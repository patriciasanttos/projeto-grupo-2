'use strict';

const { DataTypes } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('autoclaves', {
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
      total_vol: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      useful_vol: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      cycle_time: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      charging_dischaging_time: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      db_test_time: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      heating_time: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('autoclaves');
  }
};
