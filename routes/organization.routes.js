const express = require('express');

const router = express.Router();

const organizationController = require('../controllers/organization.controller');

const { organizationValidator } = require('../middlewares/organization.validator');

/* GET users listing. */
router.get('/public', organizationController.getOne);
router.patch('/:id', [organizationValidator], organizationController.patchOne);

module.exports = router;
