const { Router } = require("express");
const router = Router();

const {
  getAllComments,
  updateComment,
  createComment,
} = require("../controllers/comments.controller");

router.get("/", getAllComments);
router.put("/:id", updateComment);
router.post("/", createComment);

module.exports = router;
