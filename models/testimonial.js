"use strict";
const { Model, INTEGER } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Testimonials extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			Testimonials.belongsTo(models.User, { as: "user", foreignKey: "userId" });
		}
	}
	Testimonials.init(
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
			name: { type: DataTypes.STRING, allowNull: false },
			image: { type: DataTypes.STRING, allowNull: true },
			content: { type: DataTypes.STRING, allowNull: true },
		},
		{
			sequelize,
			modelName: "Testimonials",
		}
	);
	return Testimonials;
};
