"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert("Users", [
			{
				firstName: "John",
				lastName: "Doe",
				email: "example@example.com",
				password: "123456",
				photo:
					"https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png",
				roleId: 1,

				createdAt: new Date(),
				updatedAt: new Date(),
			},
		]);
	},

	down: async (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete("Users", null, {});
	},
};
