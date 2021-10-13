var { Router } = require("express");
const { updateNews, getNewsById } = require("../controllers/new");
const router = Router();

router.put("/news/:id", updateNews);
router.get("/news/:id", getNewsById);

module.exports = router;
