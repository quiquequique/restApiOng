var { Router } = require("express");
const { updateNews } = require("../controllers/new");
const router = Router();

router.put("/news/:id", updateNews);

module.exports = router;
