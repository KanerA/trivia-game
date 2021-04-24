'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('countries', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      country: {
        type: Sequelize.STRING
      },
      capital: {
        type: Sequelize.STRING
      },
      continent: {
        type: Sequelize.STRING
      },
      region: {
        type: Sequelize.STRING
      },
      gdp: {
        type: Sequelize.INTEGER
      },
      literacy: {
        type: Sequelize.FLOAT
      },
      population: {
        type: Sequelize.INTEGER
      },
      density_pop: {
        type: Sequelize.INTEGER
      },
      area: {
        type: Sequelize.INTEGER
      },
      age_0_to_14_years: {
        type: Sequelize.FLOAT
      },
      age_15_to_64_years: {
        type: Sequelize.FLOAT
      },
      age_above_65_years: {
        type: Sequelize.FLOAT
      },
      crime_index: {
        type: Sequelize.FLOAT
      },
      safety_index: {
        type: Sequelize.FLOAT
      },
      phones_per_1000: {
        type: Sequelize.FLOAT
      },
      cost_of_living_index: {
        type: Sequelize.FLOAT
      },
      rent_index: {
        type: Sequelize.FLOAT
      },
      restaurant_price_index: {
        type: Sequelize.FLOAT
      },
      groceries_index: {
        type: Sequelize.FLOAT
      },
      quality_of_life_index: {
        type: Sequelize.FLOAT
      },
      health_care_index: {
        type: Sequelize.FLOAT
      },
      pollution_index: {
        type: Sequelize.FLOAT
      },
      traffic_commute_time_index: {
        type: Sequelize.FLOAT
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('countries');
  }
};