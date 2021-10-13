var express = require('express');
var router = express.Router();
const organizationController = require('../controllers/organizationController.controller');

/* GET users listing. */
router.get('/public', organizationController.getAll);

module.exports = router;