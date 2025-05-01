'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class item_wishlist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      item_wishlist.belongsTo(models.tags, {
        foreignKey: 'id_tag'
      })
    }
  }
  item_wishlist.init({
    id_tag: DataTypes.INTEGER,
    name: DataTypes.STRING,
    price: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'item_wishlist',
    freezeTableName: true
  });
  return item_wishlist;
};