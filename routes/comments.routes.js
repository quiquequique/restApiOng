const { Router } = require("express");
const router = Router();

const { getAllComments } = require("../controllers/comments.controller");

router.get("/", getAllComments);

module.exports = router;
