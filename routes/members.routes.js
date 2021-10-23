const express = require('express');

const router = express.Router();

const {
	addNewMember,
	getAllMembers,
	deleteMemberById,
} = require('../controllers/members.contoller');
const { addMemberValidator } = require('../middlewares/members.validator');

router.get('/', getAllMembers);
router.post('/', [addMemberValidator], addNewMember);
router.delete('/:id', deleteMemberById);

// router.put('/:id', updateMember);

module.exports = router;
