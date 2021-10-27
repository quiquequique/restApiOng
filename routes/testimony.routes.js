const { Router } = require("express");

const router = Router();

const {
  createTestimony,
  updateTestimony,
  deleteTestimony,
} = require("../controllers/testimony.controller");

const { isAuthenticated } = require("../middlewares/isAuthenticated");
const { isAdmin } = require("../middlewares/isAdmin");

router.post("/", [isAuthenticated, isAdmin], createTestimony);
router.put("/:id", [isAuthenticated, isAdmin], updateTestimony);
router.delete("/:id", [isAuthenticated, isAdmin], deleteTestimony);

module.exports = router;
