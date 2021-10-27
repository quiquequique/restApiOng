const { Router } = require("express");

const router = Router();

const { createTestimony } = require("../controllers/testimony.controller");

const { isAuthenticated } = require("../middlewares/isAuthenticated");
const { isAdmin } = require("../middlewares/isAdmin");

router.post("/", [isAuthenticated, isAdmin], createTestimony);

module.exports = router;
