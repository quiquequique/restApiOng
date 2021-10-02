var express = require('express');
var userController = require("../controllers/Users")
var router = express.Router();

/* GET users listing. */
router.get('/', userController.all);
//post
router.post('/', userController.create);
//get by id 
router.get('/:id', userController.findById);
//get by nombre 
router.get('/:name', userController.findByName);
//patch by id 
router.get('/:id', userController.update);
//delete by id 
router.get('/:id',userController.delete);

module.exports = router;
