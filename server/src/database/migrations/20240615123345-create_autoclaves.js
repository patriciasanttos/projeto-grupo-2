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
      marca: {
        type: DataTypes.STRING,
        allowNull: false
      },
      vol_total: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      vol_util: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      tempo_total_ciclo: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      tempo_carga_desc: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      tempo_teste_db: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      tempo_aquecimento: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('autoclaves');
  }
};
