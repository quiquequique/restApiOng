const express = require('express');

const router = express.Router();

const {
	addNewMember,
	deleteMemberById,
} = require('../controllers/members.contoller');
const { addMemberValidator } = require('../middlewares/members.validator');

router.post('/', [addMemberValidator], addNewMember);
router.delete('/:id', deleteMemberById);

// router.get('/', getAllMembers);
// router.put('/:id', updateMember);

module.exports = router;
