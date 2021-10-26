const express = require('express');

const router = express.Router();

const {
	addNewMember,
	editMemberByID,
	getAllMembers,
	deleteMemberById,
} = require('../controllers/members.contoller');
const { addMemberValidator } = require('../middlewares/members.validator');
const { isAuthenticated } = require('../middlewares/isAuthenticated');
const { isAdmin } = require('../middlewares/isAdmin');

router.get('/', getAllMembers);
router.post('/', [addMemberValidator], [isAuthenticated, isAdmin], addNewMember);
router.put('/:id', [isAuthenticated, isAdmin], editMemberByID);
router.delete('/:id', [isAuthenticated, isAdmin], deleteMemberById);

module.exports = router;
