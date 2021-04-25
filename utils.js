const { Op } = require('sequelize');
const { country, question, saved_question } = require('./models');
const sequelize = require('sequelize');

const getQuestion = async (req, res) => {
    const result = await question.findOne({
        order: sequelize.literal('rand()'),
    });
    const questionObject = {};
    const selectedQuestion = result.dataValues;
    const column = selectedQuestion.columns;
    questionObject.question = selectedQuestion.template;
    questionObject.desc = selectedQuestion.desc;
    let countries;
    switch(selectedQuestion.type){
        case 1:
            countries = await country.findAll({
                attributes: ['country', column],
                where: {
                    [column]: {
                      [Op.ne]: null
                    }
                },
                order: sequelize.literal('rand()'),
                limit: 4,
            });
            const answer1 = 
                (countries.sort((a, b) => {
                    if(selectedQuestion.desc) return b[column] - a[column];
                    return a[column] - b[column];
                }))
                .slice(0, 1);       
            questionObject.answer = answer1[0].country;
            questionObject.options = countries.map(countryData => countryData.dataValues.country);
            res.json(questionObject);
            break;
        case 2:
            countries = await country.findAll({
                attributes: ['country', column],
                where: {
                    [column]: {
                      [Op.ne]: null
                    }
                },
                group: column,
                order: sequelize.literal('rand()'),
                limit: 4,
            });
            let randomIndex = Math.floor(Math.random() * 4);
            const replacementWord = countries[randomIndex].dataValues.country;
            questionObject.question = questionObject.question.replace('~X~', replacementWord);
            questionObject.options = countries.map(countryData => countryData.dataValues[column]);
            const answer2 = 
                (countries.filter(country => { // filter with the country in the question to get the right country object
                    if(replacementWord === country.dataValues.country) return country.dataValues[column];
                })
                )[0] // filter returns an array and we want the first and basically the only object in the array
                .dataValues[column]; // gets the value of the answer 
            questionObject.answer = answer2;
            res.json(questionObject);
            break;
        case 3:
            countries = await country.findAll({
                attributes: ['country', column],
                where: {
                    [column]: {
                      [Op.ne]: null
                    }
                },
                order: sequelize.literal('rand()'),
                limit: 2,
            });
            let randomIndex3 = Math.floor(Math.random() * 2);
            const firstCountry = countries[randomIndex3].dataValues;
            const secondCountry = countries[1- randomIndex3].dataValues;
            questionObject.question = questionObject.question.replace('~X~', firstCountry.country);
            questionObject.question = questionObject.question.replace('~Y~', secondCountry.country);
            questionObject.options = ["true", "false"];
            // numerical based options, if the first country's value in the question is bigger than 
            // the second country's value, the answer is true, otherwise , false
            const answer3 = firstCountry[column] - secondCountry[column] > 0 ? "true" : "false";
            questionObject.answer = answer3;
            res.json(questionObject);
            break;
    }
}

const saveRatedQuestion = async (req, res) => {
    console.log(body);
    try{
        const {body} = req;
        const saved = saved_question.findOne({
            where: { [Op.and]:{
                    question:{
                        [Op.eq]: body.question
                    },
                    option_1: {
                        [Op.eq]: body.option_1
                    },
                    option_2: {
                        [Op.eq]: body.option_2
                    },
                    option_3: {
                        [Op.eq]: body.option_3
                    },
                    option_4: {
                        [Op.eq]: body.option_4
                    },
                }
            }
        })
        if(saved){
            await saved_question.create(body);
            res.status(200).json({message: 'Question saved successfully'});
        }
        } catch(err) {
        res.status(500).json({error: err.message});
    }
}

module.exports = { getQuestion, saveRatedQuestion };