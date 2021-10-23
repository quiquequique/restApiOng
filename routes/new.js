var { Router } = require("express");
const {
  updateNews,
  CreateNews,
  getNewsById,
  DeleteNews,
  getAllNews,
} = require("../controllers/new");
const router = Router();
const { isAdmin } = require("../middlewares/isAdmin");

router.put("/:id", updateNews);
router.get("/:id", getNewsById);
router.post("/", CreateNews);
router.get("/", getAllNews);
router.delete("/:id", isAdmin, DeleteNews);
module.exports = router;
