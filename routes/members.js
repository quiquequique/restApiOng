const express = require('express');
const router = express.Router();

const {
  getAllMembers,
  getMemberById,
  createMember,
  updateMember,
  deleteMember
} = require('../controllers/members');

router.get('/members', getAllMembers);
router.get('/members/:id', getMemberById);
router.post('/members/', createMember);
router.put('/members/:id', updateMember);
router.delete('/members/:id', deleteMember);

module.exports = router;
