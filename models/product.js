'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Product.init({
    name: DataTypes.STRING,
    img: DataTypes.STRING,
    description: DataTypes.STRING,
    amount: DataTypes.INTEGER,
    price: DataTypes.DECIMAL(10, 2),
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};