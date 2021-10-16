var express = require("express");
var slidesController = require("../controllers/slides");
var router = express.Router();

/* GET roles listing. */
//router.get("/", slidesController.all);
//post
//router.post("/", slidesController.create);
//get by id
router.get("/:id", slidesController.findById);
//get by nombre
//router.get("/:name", slidesController.findByName);
//patch by id
//router.get("/:id", slidesController.update);
//delete by id
router.delete("/:id", slidesController.delete);

module.exports = router;
