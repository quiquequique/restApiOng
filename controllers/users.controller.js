const {
	insertUser,
	login,
	updateUser,
	deleteUser,
	selectAllUsers,
} = require('../Services/users.services');

const {
	REGISTER_SUCCESS,
	INVALID_CREDENTIAL,
	UPDATE_FAIL,
	UPDATED_DONE,
	DELETE_FAIL,
	DELETED_DONE,
} = require('../helpers/messages');

//Register new user
const createUser = async (req, res) => {
	const data = req.body;

	try {
		const newUserToken = await insertUser(data);

		return res.status(201).json({ msg: REGISTER_SUCCESS, newUserToken });
	} catch (error) {
		return res.status(500).json({ error: error.message });
	}
};

const loginUser = async (req, res) => {
	const data = req.body;

	try {
		const accessToken = await login(data);

		if (accessToken === null) {
			return res.status(401).json({ ok: false, msg: INVALID_CREDENTIAL });
		}

		return res.status(202).json({ accessToken });
	} catch (error) {
		return res.status(500).json({ error: error.message });
	}
};
const getAllUsers = async (req, res) => {
	try {
		const users = await selectAllUsers();
		return res.status(200).json(users);
	} catch (error) {
		return res.status(500).json({ ok: false, msg: error.message });
	}
};

const updateUserByID = async (req, res) => {
	const { id } = req.params;
	const data = req.body;

	try {
		const updatedUser = await updateUser(id, data);

		if (!updatedUser) {
			return res.status(404).json({ ok: false, msg: UPDATE_FAIL });
		}

		return res.status(200).json({ ok: true, msg: UPDATED_DONE });
	} catch (error) {
		return res.status(500).json({ ok: false, msg: error.message });
	}
};

const deleteUserByID = async (req, res) => {
	const { id } = req.params;

	try {
		const isDeleted = await deleteUser(id);

		if (!isDeleted) {
			return res.status(404).json({ ok: false, msg: DELETE_FAIL });
		}

		return res.status(200).json({ ok: true, msg: DELETED_DONE });
	} catch (error) {
		return res.status(500).json({ ok: false, msg: error.message });
	}
};

const getUserData = async (req, res) => {
	const tokenData = req.user;

	const userData = {
		id: tokenData.id,
		firstName: tokenData.firstName,
		lastName: tokenData.lastName,
		email: tokenData.email,
		photo: tokenData.photo,
		roleId: tokenData.roleId,
	};

	return res.status(200).json(userData);
};

module.exports = {
	createUser,
	loginUser,
	getAllUsers,
	updateUserByID,
	deleteUserByID,
	getUserData,
};
