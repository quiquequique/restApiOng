const { body, validationResult } = require('express-validator');
const { NOT_EMPTY } = require('../helpers/messages');

exports.addMemberValidator = [
	body('name')
		.trim()
		.escape()
		.notEmpty()
		.withMessage(NOT_EMPTY)
		.bail()
		.isString(),
	async (req, res, next) => {
		const errors = validationResult(req);

		if (!errors.isEmpty()) {
			return res.status(401).json({ errors: errors.array() });
		}

		next();
	},
];
