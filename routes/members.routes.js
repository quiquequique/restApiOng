const express = require('express');

const router = express.Router();

const {
	addNewMember,
	editMemberByID,
} = require('../controllers/members.contoller');
const { addMemberValidator } = require('../middlewares/members.validator');

router.post('/', [addMemberValidator], addNewMember);
router.put('/:id', editMemberByID);

// router.get('/', getAllMembers);
// router.delete('/:id', deleteMember);

module.exports = router;
