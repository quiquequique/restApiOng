var express = require('express');
var router = express.Router();
const organizationController = require('../controllers/organizationController');

/* GET users listing. */
router.get('/', organizationController.getAll);

module.exports = router;