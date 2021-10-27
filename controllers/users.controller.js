const {
	register,
	login,
	patchUser,
	deleteUser,
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
const addUser = async (req, res) => {
	const data = req.body;

	try {
		const newUserToken = await register(data);

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

const updateUser = async (req, res) => {
	const { id } = req.params;
	const data = req.body;

	try {
		const updatedUser = await patchUser(id, data);

		if (!updatedUser) {
			return res.status(404).json({ ok: false, msg: UPDATE_FAIL });
		}

		return res.status(200).json({ ok: true, msg: UPDATED_DONE });
	} catch (error) {
		return res.status(500).json({ ok: false, msg: error.message });
	}
};

const disableUser = async (req, res) => {
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
		firstName: tokenData.firstName,
		lastName: tokenData.lastName,
		email: tokenData.email,
		photo: tokenData.photo,
		roleId: tokenData.roleId,
	};

	return res.status(200).json(userData);
};

module.exports = {
	addUser,
	loginUser,
	updateUser,
	disableUser,
	getUserData,
};
