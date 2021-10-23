const {
	ADDED_DONE,
	DELETE_FAIL,
	DELETED_DONE,
} = require('../helpers/messages');

const {
	addMember,
	getMembers,
	deleteMember,
} = require('../services/members.services');

//get all members
const getAllMembers = async (req, res) => {
	try {
		const members = await getMembers();
		return res.status(200).json({ members });
	} catch (err) {
		res.status(500).json({ ok: false, msg: err.message });
	}
};

//create member
const addNewMember = async (req, res) => {
	const data = req.body;

	try {
		const newMember = await addMember(data);
		return res.status(201).json({ msg: ADDED_DONE, newMember });
	} catch (err) {
		res.status(500).json({ ok: false, msg: err.menssage });
	}
};

//update member
const updateMember = (req, res) => {
	const { id } = req.params;

	try {
		res.send('member updated: ' + id);
	} catch (err) {
		res.status(500).json({ ok: false, msg: err.menssage });
	}
};

//delete member
const deleteMemberById = async (req, res) => {
	const { id } = req.params;

	try {
		const isDeleted = await deleteMember(id);
		if (!isDeleted) {
			return res.status(404).json({ ok: false, msg: DELETE_FAIL });
		}

		return res.status(200).json({ ok: true, msg: DELETED_DONE });
	} catch (err) {
		res.status(500).json({ ok: false, msg: err.menssage });
	}
};

module.exports = {
	getAllMembers,
	addNewMember,
	updateMember,
	deleteMemberById,
};
