const {
	ADDED_DONE,
	UPDATED_DONE,
	UPDATE_FAIL,
	DELETE_FAIL,
	DELETED_DONE,
} = require('../helpers/messages');

const {
	insertMember,
	getMembers,
	updateMember,
	deleteMember,
} = require('../services/members.services');

//get all members
const getAllMembers = async (req, res) => {
	const { page } = req.query || 1;
	try {
		const members = await getMembers(page);
		return res.status(200).json({ members });
	} catch (err) {
		res.status(500).json({ ok: false, msg: err.message });
	}
};

//create member
const createMember = async (req, res) => {
	const data = req.body;

	try {
		const newMember = await insertMember(data);
		return res.status(201).json({ msg: ADDED_DONE, newMember });
	} catch (err) {
		res.status(500).json({ ok: false, msg: err.menssage });
	}
};

//update member
const updateMemberByID = async (req, res) => {
	const { id } = req.params;
	const data = req.body;

	try {
		const updatedMember = await updateMember(id, data);
		if (!updatedMember) {
			return res.status(404).json({ ok: false, msg: UPDATE_FAIL });
		}
		return res.status(200).json({ ok: true, msg: UPDATED_DONE });
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
	createMember,
	updateMemberByID,
	deleteMemberById,
};
