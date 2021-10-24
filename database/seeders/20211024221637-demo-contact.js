

module.exports = {
  up: async (queryInterface /* , Sequelize */) => {
    return queryInterface.bulkInsert('Contact', [{
      firstName: 'John',
      lasttName: 'Doe',
      phone: 455455,
      email: 'email@email.com',
      message: 'mensaje tipo de usuario contacto ong',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Pepe',
      lasttName: 'Pepa',
      phone: 455999,
      email: 'email@email.com',
      message: 'mensaje tipo de usuario contacto ong',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface /* , Sequelize */) => {
    return queryInterface.bulkDelete('Contact', null, {});
  }
};
