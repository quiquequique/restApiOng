

module.exports = {
  up: async (queryInterface /* , Sequelize */) => {
    return queryInterface.bulkInsert('Contacts', [{
      firstName: 'John',
      lastName: 'Doe',
      phone: 455455,
      email: 'email@email.com',
      message: 'mensaje tipo de usuario contacto ong',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Pepe',
      lastName: 'Pepa',
      phone: 455999,
      email: 'email@email.com',
      message: 'mensaje tipo de usuario contacto ong',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface /* , Sequelize */) => {
    return queryInterface.bulkDelete('Contacts', null, {});
  }
};
