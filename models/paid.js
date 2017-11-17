'use strict';
module.exports = function(sequelize, DataTypes) {
  var paid = sequelize.define('paid', {
    paid: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
      }
    }
  });
  return paid;
};
