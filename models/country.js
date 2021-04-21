'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Country extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Country.init({
    country: DataTypes.STRING,
    capital: DataTypes.STRING,
    continent: DataTypes.STRING,
    region: DataTypes.STRING,
    GDP: DataTypes.INTEGER,
    literacy: DataTypes.FLOAT,
    population: DataTypes.INTEGER,
    density_pop: DataTypes.INTEGER,
    area: DataTypes.INTEGER,
    age_0_to_14_years: DataTypes.FLOAT,
    age_15_to_64_years: DataTypes.FLOAT,
    age_above_65_years: DataTypes.FLOAT,
    crime_index: DataTypes.FLOAT,
    safety_index: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Country',
    underscored: true,
  });
  return Country;
};