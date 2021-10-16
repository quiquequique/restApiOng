var express = require("express");
var rolesController = require("../controllers/roles");
var router = express.Router();

/* GET roles listing. */
router.get("/", rolesController.all);
//post
router.post("/", rolesController.create);
//get by id
router.get("/:id", rolesController.findById);
//get by nombre
router.get("/:name", rolesController.findByName);
//patch by id
router.get("/:id", rolesController.update);
//delete by id
router.get("/:id", rolesController.delete);

module.exports = router;
