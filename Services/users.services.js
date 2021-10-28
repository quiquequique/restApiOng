const bcrypt = require('bcrypt');
const sendEmail = require('../Services/welcomeEmail.services');

const { User } = require('../models');
const { createAccessToken } = require('./jwt.services');
const dayjs = require('dayjs');

const insertUser = ({ firstName, lastName, email, photo, password }) => {
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
		/* added by quique */
		sendEmail(firstName, lastName, email, 'registerEmail');
		return createAccessToken(createdUser);
		/* end added by quique */
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
	try {
		const exist = await User.findOne({ where: { email } });

		if (!exist) {
			return false;
		}
		return true;
	} catch (error) {
		throw error;
	}
};
const selectAllUsers = async () => {
	try {
		return await User.findAll();
	} catch (error) {
		throw error;
	}
};

const updateUser = async (id, data) => {
	try {
		Object.keys(data).forEach((i) => data[i] === '' && delete data[i]);

		if (data.password) {
			data.password = bcrypt.hashSync(data.password, 10);
		}

		const isUpdated = await User.update(data, { where: { id } });

		if (isUpdated[0] === 0) {
			return false;
		}

		return true;
	} catch (error) {
		throw error;
	}
};

const deleteUser = async (id) => {
	try {
		const isDeleted = await User.update(
			{ deletedAt: dayjs().format('YYYY-MM-DD hh:mm:ss') },
			{ where: { id, deletedAt: null } }
		);

		if (isDeleted[0] === 0) {
			return false;
		}

		return true;
	} catch (error) {
		throw error;
	}
};

const validateUser = async (id) => {
	try {
		const userExist = await User.findOne({ where: id });

		if (!userExist) {
			return false;
		}

		return true;
	} catch (error) {
		throw error;
	}
};

module.exports = {
	insertUser,
	login,
	isRegister,
	selectAllUsers,
	updateUser,
	deleteUser,
	validateUser,
};
