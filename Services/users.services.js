const bcrypt = require("bcrypt");
const { User } = require("../models");

const register = ({ firstName, lastName, email, photo, password }) => {
	const newUser = {
		firstName,
		lastName,
		email,
		photo,
		password: bcrypt.hashSync(password, 10),
	};

	return User.create(newUser);
};

const isRegister = async (email) => {
	const exist = await User.findOne({ where: { email } });

	if (!exist) {
		return false;
	}
	return true;
};

module.exports = {
	register,
	isRegister,
};
