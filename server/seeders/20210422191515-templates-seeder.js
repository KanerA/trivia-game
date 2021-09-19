"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "questions",
      [
        {
          template: "Which country is the most populous?",
          columns: "population",
          type: 1,
          desc: true,
        },
        {
          template: "Which country is the least populous?",
          columns: "population",
          type: 1,
          desc: false,
        },
        {
          template: "Which country is the largest by total area?",
          columns: "area",
          type: 1,
          desc: true,
        },
        {
          template: "Which country is the smallest by total area?",
          columns: "area",
          type: 1,
          desc: false,
        },
        {
          template: "Which country is the the most densely populated?",
          columns: "density_pop",
          type: 1,
          desc: true,
        },
        {
          template: "Which country is the least densely populated?",
          columns: "density_pop",
          type: 1,
          desc: false,
        },
        {
          template: "Which country has the most cellphones per person?",
          columns: "phones_per_1000",
          type: 1,
          desc: true,
        },
        {
          template: "In what continent is ~X~?",
          columns: "continent",
          type: 2,
          desc: false,
        },
        {
          template: "How many people live in ~X~?",
          columns: "population",
          type: 2,
          desc: false,
        },
        {
          template: "In what continent is ~X~?",
          columns: "continent",
          type: 2,
          desc: false,
        },
        {
          template: "Are there more people in ~X~ than ~Y~?",
          columns: "population",
          type: 3,
          desc: false,
        },
        {
          template: "Is ~X~ larger than ~Y~?",
          columns: "area",
          type: 3,
          desc: false,
        },
        {
          template: "Does ~X~ have a higher population density than ~Y~?",
          columns: "density_pop",
          type: 3,
          desc: false,
        },
        {
          template:
            "Is the quality of life in ~X~ higher than the quality of life in ~Y~?",
          columns: "quality_of_life_index",
          type: 3,
          desc: false,
        },
        {
          template:
            "Is the crime rate in ~X~ higher than the crime rate in ~Y~?",
          columns: "crime_index",
          type: 3,
          desc: false,
        },
        {
          template:
            "Are restaurants in ~X~ are more expensive than restaurants in ~Y~?",
          columns: "Restaurant_Price_Index",
          type: 3,
          desc: false,
        },
      ].map((question, i) => {
        question.id = i + 1;
        question.created_at = new Date();
        question.updated_at = new Date();
        return question;
      }),
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
