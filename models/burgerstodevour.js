'use strict';
module.exports = function(sequelize, DataTypes) {
  var burgersToDevour = sequelize.define('burgersToDevour', {
    burgerName: DataTypes.STRING,
    devoured: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        burgersToDevour.hasOne(models.paid);
      }
    }
  });
  return burgersToDevour;
};
