'use strict';

const { DataTypes } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('thermo_washer', {
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
      carga_instrumentos: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      carga_traqueias: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      tempo_instrumentos: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      tempo_assistencia_vent: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('thermo_washer');
  }
};
