'use strict';

var models = require("../models");

module.exports = {
  up: function (queryInterface, Sequelize) {
    return models.burgersToDevour.bulkCreate(
      [
        {burgerName: "burger 1", devoured: false},
        {burgerName: "burger 2", devoured: false},
        {burgerName: "burger 3", devoured: false},
        {burgerName: "burger 4", devoured: false},
        {burgerName: "burger 5", devoured: false}
      ]
    )
  },

  down: function (queryInterface, Sequelize) {
    return models.burgersToDevour.destroy({where:{username: [
        "burger 1",
        "burger 2",
        "burger 3",
        "burger 4",
        "burger 5"
    ]}})
  }
};
