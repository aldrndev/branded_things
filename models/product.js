'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsTo(models.Category, { foreignKey: 'categoryId' });
      Product.belongsTo(models.User, { foreignKey: 'authorId' });
    }
  }
  Product.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'Name cant empty',
          },
          notNull: {
            msg: 'Name cant empty',
          },
        },
      },
      description: DataTypes.STRING,
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'Price cant empty',
          },
          notNull: {
            msg: 'Price cant empty',
          },
          min: 50000,
        },
      },
      stock: DataTypes.INTEGER,
      imgUrl: DataTypes.STRING,
      authorId: DataTypes.INTEGER,
      categoryId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Product',
    }
  );
  return Product;
};
