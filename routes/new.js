var { Router } = require("express");
const { updateNews, CreateNews } = require("../controllers/new");
const router = Router();

router.put("/news/:id", updateNews);
router.post("news", CreateNews);

module.exports = router;
