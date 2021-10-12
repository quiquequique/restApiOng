const { register, login } = require("../services/users.services");

const { REGISTER_SUCCESS, INVALID_CREDENTIAL } = require("../helpers/messages");

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
		const user = await login(data);

		if (user === null) {
			return res.status(401).json({ ok: false, msg: INVALID_CREDENTIAL });
		}

		return res.status(202).json({ user });
	} catch (error) {
		return res.status(500).json({ error: error.message });
	}
};

module.exports = {
	addUser,
	loginUser,
};
