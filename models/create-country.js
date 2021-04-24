'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class create - country extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  create - country.init({
    country: DataTypes.STRING,
    capital: DataTypes.STRING,
    continent: DataTypes.STRING,
    region: DataTypes.STRING,
    gdp: DataTypes.INTEGER,
    literacy: DataTypes.FLOAT,
    population: DataTypes.INTEGER,
    density_pop: DataTypes.INTEGER,
    area: DataTypes.INTEGER,
    age_0_to_14_years: DataTypes.FLOAT,
    age_15_to_64_years: DataTypes.FLOAT,
    age_above_65_years: DataTypes.FLOAT,
    crime_index: DataTypes.FLOAT,
    safety_index: DataTypes.FLOAT,
    phones_per_1000: DataTypes.FLOAT,
    cost_of_living_index: DataTypes.FLOAT,
    rent_index: DataTypes.FLOAT,
    restaurant_price_index: DataTypes.FLOAT,
    groceries_index: DataTypes.FLOAT,
    quality_of_life_index: DataTypes.FLOAT,
    health_care_index: DataTypes.FLOAT,
    pollution_index: DataTypes.FLOAT,
    traffic_commute_time_index: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'create-country',
    underscored: true,
  });
  return create - country;
};