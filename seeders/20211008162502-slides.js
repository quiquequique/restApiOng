'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

     await queryInterface.bulkInsert(
      'Slides',
      [
        {
          imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/EmblemaAguaControl.png/220px-EmblemaAguaControl.png',
          text: 'imagen de ejemplo 1',
          order: 1,
          organizationId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/EmblemaAireControl.png',
          text: 'imagen de ejemplo 2',
          order: 1,
          organizationId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/8c/EmblemaTierraControl.png',
          text: 'imagen de ejemplo 3',
          order: 1,
          organizationId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e6/EmblemaFuegoControl.png',
          text: 'imagen de ejemplo 4',
          order: 1,
          organizationId: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
