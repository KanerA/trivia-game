const { Op } = require('sequelize');
const { country, question } = require('./models');
const sequelize = require('sequelize');

const getQuestion = async (req, res) => {
    const result = await question.findOne({
        order: sequelize.literal('rand()'),
    });
    const questionObject = {};
    const selectedQuestion = result.dataValues;
    questionObject.question = selectedQuestion.template;
    questionObject.desc = selectedQuestion.desc;
    let countries;
    let answer;
    switch(selectedQuestion.type){
        case 1:
            countries = await country.findAll({
                attributes: ['country', selectedQuestion.columns],
                where: {
                    [selectedQuestion.columns]: {
                      [Op.ne]: null
                    }
                },
                order: sequelize.literal('rand()'),
                limit: 4,
            });
            answer = 
                (countries.sort((a, b) => {
                    if(selectedQuestion.desc) return b[selectedQuestion.columns] - a[selectedQuestion.columns];
                    return a[selectedQuestion.columns] - b[selectedQuestion.columns];
                }))
                .slice(0, 1);       
            questionObject.answer = answer;
            questionObject.answers = countries.map(countryData => countryData.dataValues.country);
            res.json(questionObject);
            break;
        case 2:
            countries = await country.findAll({
                attributes: ['country', selectedQuestion.columns],
                where: {
                    [selectedQuestion.columns]: {
                      [Op.ne]: null
                    }
                },
                group: selectedQuestion.columns,
                order: sequelize.literal('rand()'),
                limit: 4,
            });
            let randomIndex = Math.floor(Math.random() * 4);
            const replacementWord = countries[randomIndex].dataValues.country;
            questionObject.question = questionObject.question.replace('~X~', replacementWord);
            questionObject.answers = countries.map(countryData => countryData.dataValues[selectedQuestion.columns]);
            answer = 
                (countries.filter(country => { // filter with the country in the question to get the right country object
                    if(replacementWord === country.dataValues.country) return country.dataValues[selectedQuestion.columns];
                })
                )[0] // filter returns an array and we want the first and basically the only object in the array
                .dataValues[selectedQuestion.columns]; // gets the value of the answer 
            questionObject.answer = answer;
            res.json(questionObject);
            break;
        case 3:
            countries = await country.findAll({
                attributes: ['country', selectedQuestion.columns],
                where: {
                    [selectedQuestion.columns]: {
                      [Op.ne]: null
                    }
                },
                order: sequelize.literal('rand()'),
                limit: 2,
            });
            let randomIndex3 = Math.floor(Math.random() * 2);
            questionObject.question = questionObject.question.replace('~X~', countries[randomIndex3].dataValues.country);
            questionObject.question = questionObject.question.replace('~Y~', countries[1 - randomIndex3].dataValues.country);
            questionObject.answers = ["true", "false"];
            res.json(questionObject);
            break;
    }
}

module.exports = { getQuestion };