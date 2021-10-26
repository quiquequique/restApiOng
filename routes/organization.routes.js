const express = require('express');

const router = express.Router();

const organizationController = require('../controllers/organization.controller');

const { organizationValidator } = require('../middlewares/organization.validator');

const { isAuthenticated } = require('../middlewares/isAuthenticated');
const { isAdmin } = require('../middlewares/isAdmin');

/* GET users listing. */
router.get('/public', organizationController.getOne);
router.patch('/:id', organizationValidator, [isAuthenticated, isAdmin], organizationController.patchOne);

module.exports = router;
