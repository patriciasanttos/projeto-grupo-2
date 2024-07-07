'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'thermo_washers',
      [
        {
          id: "A1",
          brand: "A",
          instruments_capacity: 10,
          trachea_capacity: 18,
          instruments_time: 60,
          vent_assist_time: 60,
          price: 1000.00
        },
        {
          id: "A2",
          brand: "A",
          instruments_capacity: 15,
          trachea_capacity: 30,
          instruments_time: 60,
          vent_assist_time: 60,
          price: 2000.00
        },
        {
          id: "B1",
          brand: "B",
          instruments_capacity: 10,
          trachea_capacity: 18,
          instruments_time: 75,
          vent_assist_time: 70,
          price: 3000.00
        },
        {
          id: "B2",
          brand: "B",
          instruments_capacity: 15,
          trachea_capacity: 34,
          instruments_time: 46,
          vent_assist_time: 56,
          price: 4000.00
        },
        {
          id: "C1",
          brand: "C",
          instruments_capacity: 10,
          trachea_capacity: 15,
          instruments_time: 45,
          vent_assist_time: 60,
          price: 5000.00
        },
        {
          id: "C2",
          brand: "C",
          instruments_capacity: 12,
          trachea_capacity: 35,
          instruments_time: 45,
          vent_assist_time: 60,
          price: 6000.00
        },
        {
          id: "D1",
          brand: "D",
          instruments_capacity: 12,
          trachea_capacity: 20,
          instruments_time: 40,
          vent_assist_time: 40,
          price: 7000.00
        },
        {
          id: "D2",
          brand: "D",
          instruments_capacity: 18,
          trachea_capacity: 30,
          instruments_time: 45,
          vent_assist_time: 60,
          price: 8000.00
        },
        {
          id: "E1",
          brand: "E",
          instruments_capacity: 6,
          trachea_capacity: 18,
          instruments_time: 30,
          vent_assist_time: 45,
          price: 9000.00
        },
        {
          id: "E2",
          brand: "E",
          instruments_capacity: 10,
          trachea_capacity: 18,
          instruments_time: 25,
          vent_assist_time: 35,
          price: 10000.00
        },
        {
          id: "E3",
          brand: "E",
          instruments_capacity: 15,
          trachea_capacity: 35,
          instruments_time: 27,
          vent_assist_time: 35,
          price: 11000.00
        },
        {
          id: "F1",
          brand: "F",
          instruments_capacity: 12,
          trachea_capacity: 20,
          instruments_time: 45,
          vent_assist_time: 45,
          price: 12000.00
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('thermo_washers', null, {});
  }
};
