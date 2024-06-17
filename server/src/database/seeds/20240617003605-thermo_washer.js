'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'thermo_washer',
      [
        {
          id: "A1",
          marca: "A",
          carga_instrumentos: 10,
          carga_traqueias: 18,
          tempo_instrumentos: 60,
          tempo_assistencia_vent: 60,
        },
        {
          id: "A2",
          marca: "A",
          carga_instrumentos: 15,
          carga_traqueias: 30,
          tempo_instrumentos: 60,
          tempo_assistencia_vent: 60,
        },
        {
          id: "B1",
          marca: "B",
          carga_instrumentos: 10,
          carga_traqueias: 18,
          tempo_instrumentos: 75,
          tempo_assistencia_vent: 70,
        },
        {
          id: "B2",
          marca: "B",
          carga_instrumentos: 15,
          carga_traqueias: 34,
          tempo_instrumentos: 46,
          tempo_assistencia_vent: 56,
        },
        {
          id: "C1",
          marca: "C",
          carga_instrumentos: 10,
          carga_traqueias: 15,
          tempo_instrumentos: 45,
          tempo_assistencia_vent: 60,
        },
        {
          id: "C2",
          marca: "C",
          carga_instrumentos: 12,
          carga_traqueias: 35,
          tempo_instrumentos: 45,
          tempo_assistencia_vent: 60,
        },
        {
          id: "D1",
          marca: "D",
          carga_instrumentos: 12,
          carga_traqueias: 20,
          tempo_instrumentos: 40,
          tempo_assistencia_vent: 40,
        },
        {
          id: "D2",
          marca: "D",
          carga_instrumentos: 18,
          carga_traqueias: 30,
          tempo_instrumentos: 45,
          tempo_assistencia_vent: 60,
        },
        {
          id: "E1",
          marca: "E",
          carga_instrumentos: 6,
          carga_traqueias: 18,
          tempo_instrumentos: 30,
          tempo_assistencia_vent: 45,
        },
        {
          id: "E2",
          marca: "E",
          carga_instrumentos: 10,
          carga_traqueias: 18,
          tempo_instrumentos: 25,
          tempo_assistencia_vent: 35,
        },
        {
          id: "E3",
          marca: "E",
          carga_instrumentos: 15,
          carga_traqueias: 35,
          tempo_instrumentos: 27,
          tempo_assistencia_vent: 35,
        },
        {
          id: "F1",
          marca: "F",
          carga_instrumentos: 12,
          carga_traqueias: 20,
          tempo_instrumentos: 45,
          tempo_assistencia_vent: 45,
        },
      ],
      {}
  );
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
