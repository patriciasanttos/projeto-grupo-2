'use strict';

const { DataTypes } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('thermo_washers', {
      id: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        primaryKey: true
      },
      brand: {
        type: DataTypes.STRING,
        allowNull: false
      },
      instruments_capacity: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      trachea_capacity: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      instruments_time: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      vent_assist_time: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('thermo_washers');
  }
};
