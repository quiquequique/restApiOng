var express = require("express");
var slidesController = require("../controllers/slides");
var router = express.Router();

/* GET roles listing. */
router.get("/", slidesController.getAllSlides);
//post
//router.post("/", slidesController.create);
//get by id
router.get("/:id", slidesController.getSlideById);
//get by nombre
//router.get("/:name", slidesController.findByName);
//patch by id
router.put("/:id", slidesController.updateSlide);
//delete by id
router.delete("/:id", slidesController.deleteSlide);

module.exports = router;
