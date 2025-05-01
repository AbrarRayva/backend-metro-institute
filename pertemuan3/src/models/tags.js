'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tags extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      tags.hasMany(models.item_wishlist, {
        foreignKey: 'id_tag'
      })
    }
  }
  tags.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tags',
  });
  return tags;
};