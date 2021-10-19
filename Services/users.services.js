const bcrypt = require("bcrypt");
const sendEmail = require("../Services/welcomeEmail.services");

const { User } = require("../models");
const { createAccessToken } = require("./jwt.services");
const dayjs = require("dayjs");

const register = ({ firstName, lastName, email, photo, password }) => {
	const newUser = {
		firstName,
		lastName,
		email,
		photo,
		password: bcrypt.hashSync(password, 10),
	};

	try {
		const createdUser = User.create(newUser);
		if (!createdUser) {
			return null;
		}
		sendEmail(firstName, lastName, email);
		return createdUser;
	} catch (error) {
		throw error;
	}
};

const login = async ({ email, password }) => {
	try {
		const user = await User.findOne({
			where: { email, deletedAt: null },
		});

		if (!user) {
			return null;
		}

		const isCorrect = await bcrypt.compareSync(password, user.password);

		if (!isCorrect) {
			return null;
		}

		return createAccessToken(user);
	} catch (error) {
		throw error;
	}
};

const isRegister = async (email) => {
	const exist = await User.findOne({ where: { email } });

	if (!exist) {
		return false;
	}
	return true;
};

const deleteUser = async (id) => {
	const isDeleted = await User.update(
		{ deletedAt: dayjs().format("YYYY-MM-DD hh:mm:ss") },
		{ where: { id, deletedAt: null } }
	);

	if (isDeleted[0] === 0) {
		return false;
	}

	return true;
};

module.exports = {
	register,
	login,
	isRegister,
	deleteUser,
};
