'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('countries', 'phones_per_1000', {
      type: Sequelize.FLOAT
    })
  },

  down: async (queryInterface, Sequelize) => {
    
    await queryInterface.removeColumn('countries', 'phones_per_1000');
  }
};
