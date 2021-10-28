'use strict';
const faker = require('faker');
const bcrypt = require('bcrypt');

let fakeUser = [
	{
		firstName: 'admin',
		lastName: 'test',
		email: 'admin@test.com',
		password: bcrypt.hashSync('123456', 10),
		photo: faker.image.image(),
		roleId: 1,
		deletedAt: null,
		createdAt: new Date(),
		updatedAt: new Date(),
	},
];

for (let i = 0; i <= 20; i++) {
	const userRole = i < 10 ? 1 : 2;
	fakeUser.push({
		firstName: faker.name.firstName(),
		lastName: faker.name.lastName(),
		email: faker.internet.email(),
		password: bcrypt.hashSync('123456', 10),
		photo: faker.image.image(),
		roleId: userRole,
		deletedAt: null,
		createdAt: new Date(),
		updatedAt: new Date(),
	});
}

module.exports = {
	up: async (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Users', fakeUser, {});
	},

	down: async (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Users', null, {});
	},
};
