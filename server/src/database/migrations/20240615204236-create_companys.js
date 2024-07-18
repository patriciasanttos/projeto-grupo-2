'use strict';

const { DataTypes } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('companys', {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      cnpj: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      company_name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      cep: {
        type: DataTypes.STRING,
        allowNull: false
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      segment: {
        type: DataTypes.STRING,
        allowNull: false
      },
      role: {
        type: DataTypes.STRING,
        allowNull: false
      },
      objective: {
        type: DataTypes.STRING,
        allowNull: false
      },
      situation: {
        type: DataTypes.STRING,
        allowNull: false
      },
      autoclaves: {
        type: DataTypes.STRING
      },
      thermo_washers: {
        type: DataTypes.STRING
      },
      contact_confirm: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      rate: {
        type: DataTypes.STRING
      },
      created_at: {
          type: DataTypes.DATE,
          defaultValue: DataTypes.NOW,
          allowNull: false,
      },
      updated_at: {
          type: DataTypes.DATE,
          defaultValue: DataTypes.NOW,
          allowNull: false
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('companys');
  }
};
