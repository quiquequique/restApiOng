const { Router } = require("express");
const router = Router();

const {
  getAllComments,
  updateComment,
  createComment,
  deleteComment,
} = require("../controllers/comments.controller");

router.get("/", getAllComments);
router.put("/:id", updateComment);
router.post("/", createComment);
router.delete("/:id", deleteComment);

module.exports = router;
