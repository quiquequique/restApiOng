"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			"Activities",
			[
				{
					name: "John Doe",
					content:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tristique est risus, vitae consequat urna viverra faucibus. Morbi feugiat finibus cursus. Morbi mollis suscipit leo ac laoreet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean non mollis lorem. Nam at velit id sapien posuere commodo. Cras eu mi id nisl convallis fermentum id vitae odio. Sed aliquam nisl nec congue lobortis. Aliquam sagittis vitae lectus ut tincidunt. Pellentesque non turpis nec felis sodales pharetra eget a odio.",
					image:
						"https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png",
				},
			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete("Activities", null, {});
	},
};
