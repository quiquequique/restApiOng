"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Comments",
      [
        {
          user_id: "02",
          body: "muy bueno",
          post_id: "03",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: "03",
          body: "muy regular",
          post_id: "02",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: "04",
          body: "muy khvregular",
          post_id: "045",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
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
  },
};
