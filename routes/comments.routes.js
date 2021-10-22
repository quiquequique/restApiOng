const { Router } = require("express");
const router = Router();

const {
  getAllComments,
  createComment,
} = require("../controllers/comments.controller");

router.get("/", getAllComments);
router.post("/", createComment);

module.exports = router;
