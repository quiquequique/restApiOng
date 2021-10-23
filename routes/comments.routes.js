const { Router } = require("express");
const router = Router();

const {
  getAllComments,
  getCommentsByPostId,
  updateComment,
  createComment,
  deleteComment,
} = require("../controllers/comments.controller");
const { isAdmin } = require("../middlewares/isAdmin");
const { isAuthenticated } = require("../middlewares/isAuthenticated");

router.get("/", isAdmin, getAllComments);
router.put("/:id", isAuthenticated, updateComment);
router.get("/:postid", getCommentsByPostId);
router.post("/", createComment);
router.delete("/:id", isAuthenticated, deleteComment);

module.exports = router;
