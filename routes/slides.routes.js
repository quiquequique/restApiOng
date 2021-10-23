var express = require("express");
var slidesController = require("../controllers/slides");
var {isAdmin} = require("../middlewares/isAdmin"); 

var router = express.Router();

/* GET roles listing. */
router.get("/",/*[isAdmin],*/ slidesController.getAllSlides);
//post
//router.post("/", slidesController.create);
//get by id
router.get("/:id",/*[isAdmin],*/ slidesController.getSlideById);
//get by nombre
//router.get("/:name", slidesController.findByName);
//patch by id
router.put("/:id",/*[isAdmin],*/ slidesController.updateSlide);
//delete by id
router.delete("/:id",/*[isAdmin],*/ slidesController.deleteSlide);
//get all slides by organization id 
router.get('/organization/:id',slidesController.slidesByOrg); 

module.exports = router;
