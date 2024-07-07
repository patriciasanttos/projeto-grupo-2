"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "autoclaves",
      [
        {
          id: "A1",
          brand: "A",
          total_vol: 102,
          useful_vol: 81,
          cycle_time: 50,
          charging_dischaging_time: 10,
          db_test_time: 30,
          heating_time: 20,
          price: 1000.00
        },
        {
          id: "A2",
          brand: "A",
          total_vol: 145,
          useful_vol: 96,
          cycle_time: 53,
          charging_dischaging_time: 10,
          db_test_time: 30,
          heating_time: 20,
          price: 2000.00
        },
        {
          id: "A3",
          brand: "A",
          total_vol: 200,
          useful_vol: 144,
          cycle_time: 53,
          charging_dischaging_time: 10,
          db_test_time: 30,
          heating_time: 20,
          price: 3000.00
        },
        {
          id: "A4",
          brand: "A",
          total_vol: 255,
          useful_vol: 192,
          cycle_time: 53,
          charging_dischaging_time: 10,
          db_test_time: 30,
          heating_time: 20,
          price: 4000.00
        },
        {
          id: "A5",
          brand: "A",
          total_vol: 322,
          useful_vol: 216,
          cycle_time: 56,
          charging_dischaging_time: 10,
          db_test_time: 30,
          heating_time: 20,
          price: 5000.00
        },
        {
          id: "A6",
          brand: "A",
          total_vol: 444,
          useful_vol: 324,
          cycle_time: 56,
          charging_dischaging_time: 10,
          db_test_time: 30,
          heating_time: 20,
          price: 6000.00
        },
        {
          id: "A7",
          brand: "A",
          total_vol: 566,
          useful_vol: 432,
          cycle_time: 56,
          charging_dischaging_time: 10,
          db_test_time: 30,
          heating_time: 20,
          price: 7000.00
        },
        {
          id: "A8",
          brand: "A",
          total_vol: 704,
          useful_vol: 540,
          cycle_time: 58,
          charging_dischaging_time: 10,
          db_test_time: 30,
          heating_time: 20,
          price: 8000.00
        },
        {
          id: "A9",
          brand: "A",
          total_vol: 878,
          useful_vol: 628,
          cycle_time: 55,
          charging_dischaging_time: 10,
          db_test_time: 30,
          heating_time: 20,
          price: 9000.00
        },
        {
          id: "B1",
          brand: "B",
          total_vol: 110,
          useful_vol: 85,
          cycle_time: 50,
          charging_dischaging_time: 10,
          db_test_time: 30,
          heating_time: 20,
          price: 10000.00
        },
        {
          id: "B2",
          brand: "B",
          total_vol: 200,
          useful_vol: 150,
          cycle_time: 50,
          charging_dischaging_time: 10,
          db_test_time: 30,
          heating_time: 20,
          price: 11000.00
        },
        {
          id: "B3",
          brand: "B",
          total_vol: 263,
          useful_vol: 135,
          cycle_time: 50,
          charging_dischaging_time: 10,
          db_test_time: 30,
          heating_time: 20,
          price: 12000.00
        },
        {
          id: "B4",
          brand: "B",
          total_vol: 370,
          useful_vol: 324,
          cycle_time: 50,
          charging_dischaging_time: 10,
          db_test_time: 30,
          heating_time: 20,
          price: 13000.00
        },
        {
          id: "B5",
          brand: "B",
          total_vol: 418,
          useful_vol: 370,
          cycle_time: 55,
          charging_dischaging_time: 10,
          db_test_time: 30,
          heating_time: 20,
          price: 14000.00
        },
        {
          id: "B6",
          brand: "B",
          total_vol: 542,
          useful_vol: 432,
          cycle_time: 55,
          charging_dischaging_time: 10,
          db_test_time: 30,
          heating_time: 20,
          price: 15000.00
        },
        {
          id: "B7",
          brand: "B",
          total_vol: 716,
          useful_vol: 574,
          cycle_time: 60,
          charging_dischaging_time: 10,
          db_test_time: 30,
          heating_time: 20,
          price: 16000.00
        },
        {
          id: "B8",
          brand: "B",
          total_vol: 891,
          useful_vol: 846,
          cycle_time: 80,
          charging_dischaging_time: 10,
          db_test_time: 30,
          heating_time: 20,
          price: 17000.00
        },
        {
          id: "C1",
          brand: "C",
          total_vol: 100,
          useful_vol: 100,
          cycle_time: 50,
          charging_dischaging_time: 10,
          db_test_time: 30,
          heating_time: 20,
          price: 18000.00
        },
        {
          id: "C2",
          brand: "C",
          total_vol: 205,
          useful_vol: 205,
          cycle_time: 50,
          charging_dischaging_time: 10,
          db_test_time: 30,
          heating_time: 20,
          price: 19000.00
        },
        {
          id: "C3",
          brand: "C",
          total_vol: 300,
          useful_vol: 300,
          cycle_time: 50,
          charging_dischaging_time: 10,
          db_test_time: 30,
          heating_time: 20,
          price: 20000.00
        },
        {
          id: "C4",
          brand: "C",
          total_vol: 333,
          useful_vol: 330,
          cycle_time: 50,
          charging_dischaging_time: 10,
          db_test_time: 30,
          heating_time: 20,
          price: 21000.00
        },
        {
          id: "C5",
          brand: "C",
          total_vol: 474,
          useful_vol: 470,
          cycle_time: 50,
          charging_dischaging_time: 10,
          db_test_time: 30,
          heating_time: 20,
          price: 22000.00
        },
        {
          id: "C6",
          brand: "C",
          total_vol: 614,
          useful_vol: 609,
          cycle_time: 50,
          charging_dischaging_time: 10,
          db_test_time: 30,
          heating_time: 20,
          price: 23000.00
        },
        {
          id: "C7",
          brand: "C",
          total_vol: 755,
          useful_vol: 748,
          cycle_time: 50,
          charging_dischaging_time: 10,
          db_test_time: 30,
          heating_time: 20,
          price: 24000.00
        },
        {
          id: "C8",
          brand: "C",
          total_vol: 910,
          useful_vol: 902,
          cycle_time: 50,
          charging_dischaging_time: 10,
          db_test_time: 30,
          heating_time: 20,
          price: 25000.00
        },
        {
          id: "D1",
          brand: "D",
          total_vol: 167,
          useful_vol: 133.6,
          cycle_time: 50,
          charging_dischaging_time: 10,
          db_test_time: 30,
          heating_time: 20,
          price: 26000.00
        },
        {
          id: "D2",
          brand: "D",
          total_vol: 252,
          useful_vol: 201.6,
          cycle_time: 50,
          charging_dischaging_time: 10,
          db_test_time: 30,
          heating_time: 20,
          price: 27000.00
        },
        {
          id: "D3",
          brand: "D",
          total_vol: 285,
          useful_vol: 216,
          cycle_time: 50,
          charging_dischaging_time: 10,
          db_test_time: 30,
          heating_time: 20,
          price: 28000.00
        },
        {
          id: "D4",
          brand: "D",
          total_vol: 321,
          useful_vol: 256.8,
          cycle_time: 50,
          charging_dischaging_time: 10,
          db_test_time: 30,
          heating_time: 20,
          price: 29000.00
        },
        {
          id: "D5",
          brand: "D",
          total_vol: 445,
          useful_vol: 324,
          cycle_time: 60,
          charging_dischaging_time: 10,
          db_test_time: 30,
          heating_time: 20,
          price: 30000.00
        },
        {
          id: "D6",
          brand: "D",
          total_vol: 578,
          useful_vol: 432,
          cycle_time: 60,
          charging_dischaging_time: 10,
          db_test_time: 30,
          heating_time: 20,
          price: 31000.00
        },
        {
          id: "D7",
          brand: "D",
          total_vol: 773,
          useful_vol: 540,
          cycle_time: 60,
          charging_dischaging_time: 10,
          db_test_time: 30,
          heating_time: 20,
          price: 32000.00
        },
        {
          id: "D8",
          brand: "D",
          total_vol: 892,
          useful_vol: 648,
          cycle_time: 60,
          charging_dischaging_time: 10,
          db_test_time: 30,
          heating_time: 20,
          price: 33000.00
        },
        {
          id: "E1",
          brand: "E",
          total_vol: 304,
          useful_vol: 108,
          cycle_time: 40,
          charging_dischaging_time: 10,
          db_test_time: 30,
          heating_time: 20,
          price: 34000.00
        },
        {
          id: "E2",
          brand: "E",
          total_vol: 364,
          useful_vol: 216,
          cycle_time: 40,
          charging_dischaging_time: 10,
          db_test_time: 30,
          heating_time: 20,
          price: 35000.00
        },
        {
          id: "E3",
          brand: "E",
          total_vol: 436,
          useful_vol: 324,
          cycle_time: 45,
          charging_dischaging_time: 10,
          db_test_time: 30,
          heating_time: 20,
          price: 36000.00
        },
        {
          id: "E4",
          brand: "E",
          total_vol: 523,
          useful_vol: 432,
          cycle_time: 50,
          charging_dischaging_time: 10,
          db_test_time: 30,
          heating_time: 20,
          price: 37000.00
        },
        {
          id: "E5",
          brand: "E",
          total_vol: 741,
          useful_vol: 540,
          cycle_time: 55,
          charging_dischaging_time: 10,
          db_test_time: 30,
          heating_time: 20,
          price: 38000.00
        },
        {
          id: "E6",
          brand: "E",
          total_vol: 109,
          useful_vol: 108,
          cycle_time: 40,
          charging_dischaging_time: 10,
          db_test_time: 30,
          heating_time: 20,
          price: 39000.00
        },
        {
          id: "E7",
          brand: "E",
          total_vol: 250,
          useful_vol: 162,
          cycle_time: 40,
          charging_dischaging_time: 10,
          db_test_time: 30,
          heating_time: 20,
          price: 40000.00
        },
        {
          id: "E8",
          brand: "E",
          total_vol: 575,
          useful_vol: 324,
          cycle_time: 50,
          charging_dischaging_time: 10,
          db_test_time: 30,
          heating_time: 20,
          price: 41000.00
        },
        {
          id: "E9",
          brand: "E",
          total_vol: 767,
          useful_vol: 432,
          cycle_time: 55,
          charging_dischaging_time: 10,
          db_test_time: 30,
          heating_time: 20,
          price: 42000.00
        },
        {
          id: "E10",
          brand: "E",
          total_vol: 959,
          useful_vol: 540,
          cycle_time: 60,
          charging_dischaging_time: 10,
          db_test_time: 30,
          heating_time: 20,
          price: 43000.00
        },
        {
          id: "E11",
          brand: "E",
          total_vol: 449,
          useful_vol: 324,
          cycle_time: 45,
          charging_dischaging_time: 10,
          db_test_time: 30,
          heating_time: 20,
          price: 44000.00
        },
        {
          id: "E12",
          brand: "E",
          total_vol: 587,
          useful_vol: 432,
          cycle_time: 50,
          charging_dischaging_time: 10,
          db_test_time: 30,
          heating_time: 12,
          price: 45000.00
        },
        {
          id: "E13",
          brand: "E",
          total_vol: 725,
          useful_vol: 540,
          cycle_time: 59,
          charging_dischaging_time: 10,
          db_test_time: 30,
          heating_time: 5,
          price: 46000.00
        },
        {
          id: "F1",
          brand: "F",
          total_vol: 449,
          useful_vol: 324,
          cycle_time: 47,
          charging_dischaging_time: 10,
          db_test_time: 30,
          heating_time: 10,
          price: 47000.00
        },
        {
          id: "F2",
          brand: "F",
          total_vol: 584,
          useful_vol: 432,
          cycle_time: 52,
          charging_dischaging_time: 10,
          db_test_time: 30,
          heating_time: 10,
          price: 48000.00
        },
        {
          id: "F3",
          brand: "F",
          total_vol: 764,
          useful_vol: 540,
          cycle_time: 57,
          charging_dischaging_time: 10,
          db_test_time: 30,
          heating_time: 10,
          price: 49000.00
        },
        {
          id: "F4",
          brand: "F",
          total_vol: 899,
          useful_vol: 648,
          cycle_time: 62,
          charging_dischaging_time: 10,
          db_test_time: 30,
          heating_time: 10,
          price: 50000.00
        }
      ], {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('autoclaves', null, {});
  },
};
