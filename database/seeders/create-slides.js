'use strict';

module.exports = {
  
  //para llenar la BD 
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Slides', [
      {
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/7d/EmblemaAguaControl.png',
        text: 'Aguaa',
        order: 1,
        organizationId: 3,
        createdAt: new Date,
        updatedAt: new Date
      },
            {
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e6/EmblemaFuegoControl.png',
        text: 'Fuegoo',
        order: 2,
        organizationId: 3,
        createdAt: new Date,
        updatedAt: new Date
      },
            {
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/8c/EmblemaTierraControl.png',
        text: 'Tierraa',
        order: 3,
        organizationId: 3,
        createdAt: new Date,
        updatedAt: new Date
      },
            {
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/EmblemaAireControl.png',
        text: 'Airee',
        order: 4,
        organizationId: 1,
        createdAt: new Date,
        updatedAt: new Date
      }
      ], {});
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
