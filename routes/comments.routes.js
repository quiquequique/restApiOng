const { Router } = require("express");
const router = Router();

const {
  getAllComments,
  getCommentsByPostId,
  updateComment,
  createComment,
  deleteComment,
} = require("../controllers/comments.controller");

router.get("/", getAllComments);
router.put("/:id", updateComment);
router.get("/:postid", getCommentsByPostId);
router.post("/", createComment);
router.delete("/:id", deleteComment);

module.exports = router;
