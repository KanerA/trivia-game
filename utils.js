const { Op } = require('sequelize');
const { country, question } = require('./models');
const sequelize = require('sequelize');
const { Sequelize } = require('sequelize');

const getQuestion = async (req, res) => {
    const result = await question.findAll({
        order: sequelize.literal('rand()'),
        limit: 1,
    });
    const questionObject = {};
    const selectedQuestion = result[0].dataValues;
    questionObject.question = selectedQuestion.template;
    let countries;
    switch(selectedQuestion.type){
        case 1:
            countries = await country.findAll({
                attributes: ['country', selectedQuestion.columns],
                order: sequelize.literal('rand()'),
                limit: 4,
            });
            questionObject.answers = countries.map(countryData => countryData.dataValues.country);
            res.json(questionObject);
            break;
        case 2:
            countries = await country.findAll({
                attributes: ['country', selectedQuestion.columns],
                group: selectedQuestion.columns,
                order: sequelize.literal('rand()'),
                limit: 4,
            });
            let randomIndex = Math.floor(Math.random() * 4);
            questionObject.question = questionObject.question.replace('~X~', countries[randomIndex].dataValues.country);
            questionObject.answers = countries.map(countryData => countryData.dataValues[selectedQuestion.columns]);
            res.json(questionObject);
            break;
        case 3:
            countries = await country.findAll({
                attributes: ['country', selectedQuestion.columns],
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