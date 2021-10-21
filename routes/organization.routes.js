const express = require('express');

const router = express.Router();

const organizationController = require('../controllers/organization.controller');

const {
	organizationValidator,
} = require('../middlewares/organization.validator');

const { isAdmin } = require('../middlewares/isAdmin');
const { isAuthenticated } = require('../middlewares/isAuthenticated');

/* GET users listing. */
router.get('/public', organizationController.getOne);
router.patch(
	'/:id',

	[isAuthenticated, isAdmin],
	organizationController.patchOne
);

module.exports = router;
