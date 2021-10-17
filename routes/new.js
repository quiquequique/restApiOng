var { Router } = require("express");
const {
  updateNews,
  CreateNews,
  getNewsById,
  DeleteNews,
  getAllNews,
} = require("../controllers/new");
const router = Router();

router.put("/:id", updateNews);
router.get("/:id", getNewsById);
router.post("/", CreateNews);
router.get("/", getAllNews);
router.delete("/:id", DeleteNews);
module.exports = router;
