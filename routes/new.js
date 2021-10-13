var { Router } = require("express");
const { updateNews, CreateNews, getNewsById } = require("../controllers/new");
const router = Router();

router.put("/news/:id", updateNews);
router.get("/news/:id", getNewsById);
router.post("news", CreateNews);

module.exports = router;
