"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			"Activities",
			[
				{
					name: "John Doe",
					content:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tristique est risus",
					image:
						"https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png",
					createdAt: new Date(),
					updatedAt: new Date()
				},
			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete("Activities", null, {});
	},
};
