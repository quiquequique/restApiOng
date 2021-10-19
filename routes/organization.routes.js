const express = require('express');

const router = express.Router();

const organizationController = require('../controllers/organization.controller');

/* GET users listing. */
router.get('/public', organizationController.getOne);
router.patch('/:id', organizationController.patchOne);

module.exports = router;
