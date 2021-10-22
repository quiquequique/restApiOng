const express = require('express');

const router = express.Router();

const { addNewMember } = require('../controllers/members.contoller');
const { addMemberValidator } = require('../middlewares/members.validator');

router.post('/', [addMemberValidator], addNewMember);

// router.get('/', getAllMembers);
// router.put('/:id', updateMember);
// router.delete('/:id', deleteMember);

module.exports = router;
