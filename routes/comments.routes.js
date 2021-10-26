const { Router } = require('express');

const router = Router();

const {
  getAllComments,
  getCommentsByPostId,
  updateComment,
  createComment,
  deleteComment,
} = require('../controllers/comments.controller');
const { isAuthenticated } = require('../middlewares/isAuthenticated');
const { isAdmin } = require('../middlewares/isAdmin');

router.get('/', [isAuthenticated, isAdmin], getAllComments);
router.put('/:id', [isAuthenticated, isAdmin], updateComment);
router.get('/:postid', [isAuthenticated, isAdmin], getCommentsByPostId);
router.post('/', createComment);
router.delete('/:id', [isAuthenticated, isAdmin], deleteComment);

module.exports = router;
