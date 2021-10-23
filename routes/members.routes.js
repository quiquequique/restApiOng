const express = require('express');

const router = express.Router();

const {
	addNewMember,
	editMemberByID,
	getAllMembers,
	deleteMemberById,
} = require('../controllers/members.contoller');
const { addMemberValidator } = require('../middlewares/members.validator');

router.get('/', getAllMembers);
router.post('/', [addMemberValidator], addNewMember);
router.put('/:id', editMemberByID);
router.delete('/:id', deleteMemberById);

module.exports = router;
