const { ADDED_DONE } = require('../helpers/messages');
const { addMember } = require('../services/members.services');

//get all members
const getAllMembers = (_, res) => {
	try {
		res.send('list of all members');
	} catch (err) {
		console.error(err);
		res.status(500).json(errors._500);
	}
};

//create member
const addNewMember = async (req, res) => {
	const data = req.body;

	try {
		const newMember = await addMember(data);
		return res.status(201).json({ msg: ADDED_DONE, newMember });
	} catch (err) {
		console.error(err);
		res.status(500).json(errors._500);
	}
};

//update member
const updateMember = (req, res) => {
	const { id } = req.params;

	try {
		res.send('member updated: ' + id);
	} catch (err) {
		console.error(err);
		res.status(500).json(errors._500);
	}
};

//delete member
const deleteMember = (req, res) => {
	const { id } = req.params;

	try {
		res.send('member deleted: ' + id);
	} catch (err) {
		console.error(err);
		res.status(500).json(errors._500);
	}
};

module.exports = {
	getAllMembers,
	addNewMember,
	updateMember,
	deleteMember,
};
