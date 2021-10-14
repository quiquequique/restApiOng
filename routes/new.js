var { Router } = require("express");
const {
  updateNews,
  CreateNews,
  getNewsById,
  DeleteNews,
} = require("../controllers/new");
const router = Router();

router.put("/news/:id", updateNews);
router.get("/news/:id", getNewsById);
router.post("news", CreateNews);
router.delete("/news/:id", DeleteNews);
module.exports = router;
