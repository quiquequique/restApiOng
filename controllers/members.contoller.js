const {
	ADDED_DONE,
	UPDATED_DONE,
	UPDATE_FAIL,
} = require('../helpers/messages');
const { addMember, editMember } = require('../services/members.services');

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
const editMemberByID = async (req, res) => {
	const { id } = req.params;
	const data = req.body;

	try {
		const updatedMember = await editMember(id, data);
		if (!updatedMember) {
			return res.status(404).json({ ok: false, msg: UPDATE_FAIL });
		}
		return res.status(200).json({ ok: true, msg: UPDATED_DONE });
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
	editMemberByID,
	deleteMember,
};
