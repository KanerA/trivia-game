const { Op } = require('sequelize');
const { country, question } = require('./models');
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
    let answer;
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
            answer = 
                (countries.sort((a, b) => {
                    if(selectedQuestion.desc) return b[column] - a[column];
                    return a[column] - b[column];
                }))
                .slice(0, 1);       
            questionObject.answer = answer;
            questionObject.answers = countries.map(countryData => countryData.dataValues.country);
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
            questionObject.answers = countries.map(countryData => countryData.dataValues[column]);
            answer = 
                (countries.filter(country => { // filter with the country in the question to get the right country object
                    if(replacementWord === country.dataValues.country) return country.dataValues[column];
                })
                )[0] // filter returns an array and we want the first and basically the only object in the array
                .dataValues[column]; // gets the value of the answer 
            questionObject.answer = answer;
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
            questionObject.answers = ["true", "false"];
            res.json(questionObject);
            break;
    }
}

module.exports = { getQuestion };