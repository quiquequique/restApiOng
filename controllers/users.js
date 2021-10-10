const { register } = require("../Services/users");

//Register new user
const addUser = async (req, res) => {
	const data = req.body;

	const newUser = await register(data);

	res.json({ msg: "Register new user", newUser });
};

const getUsers = (req, res) => {
	res.send("Get all users");
};

const getUserByID = (req, res) => {
	const { id } = req.params;
	res.send(`Get user by ID = ${id}`);
};

const editUser = (req, res) => {
	const { id } = req.params;
	const data = req.body;

	res.json({ msg: `Edit user with ID = ${id}`, data });
};

const deleteUser = (req, res) => {
	const { id } = req.params;

	res.json({ msg: `Delete user with ID = ${id}` });
};

module.exports = {
	getUsers,
	getUserByID,
	addUser,
	editUser,
	deleteUser,
};