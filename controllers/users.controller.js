const { register, login, patchUser } = require("../Services/users.services");

const {
	REGISTER_SUCCESS,
	INVALID_CREDENTIAL,
	UPDATE_FAIL,
	UPDATED_DONE,
} = require("../helpers/messages");

//Register new user
const addUser = async (req, res) => {
	const data = req.body;

	try {
		const newUser = await register(data);

		return res.status(201).json({ msg: REGISTER_SUCCESS, newUser });
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

	const updatedUser = await patchUser(id, data);

	if (!updatedUser) {
		return res.status(404).json({ ok: false, msg: UPDATE_FAIL, updateUser });
	}

	return res.status(200).json({ ok: true, msg: UPDATED_DONE });
};

module.exports = {
	addUser,
	loginUser,
	updateUser,
};
