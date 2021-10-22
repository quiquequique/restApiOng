const express = require('express');

const router = express.Router();

const {
	addNewMember,
	getAllMembers,
} = require('../controllers/members.contoller');
const { addMemberValidator } = require('../middlewares/members.validator');

router.get('/', getAllMembers);
router.post('/', [addMemberValidator], addNewMember);

// router.put('/:id', updateMember);
// router.delete('/:id', deleteMember);

module.exports = router;
