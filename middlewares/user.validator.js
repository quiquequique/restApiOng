const { body, validationResult } = require("express-validator");
const {
	NOT_EMPTY,
	MIN_LENGTH_3,
	INVALID_EMAIL,
	EXIST_EMAIL,
	PASSWORD_LENGTH,
	INVALID_CREDENTIAL,
} = require("../helpers/messages");

const { isRegister } = require("../Services/users.services");

exports.registerValidator = [
	body("firstName")
		.trim()
		.escape()
		.notEmpty()
		.withMessage(NOT_EMPTY)
		.bail()
		.isLength({ min: 2 })
		.withMessage(MIN_LENGTH_3),
	body("lastName")
		.trim()
		.escape()
		.notEmpty()
		.withMessage(NOT_EMPTY)
		.bail()
		.isLength({ min: 2 })
		.withMessage(MIN_LENGTH_3),
	body("email")
		.trim()
		.notEmpty()
		.normalizeEmail()
		.withMessage(INVALID_EMAIL)
		.custom(async (value) => {
			if (await isRegister(value)) {
				return Promise.reject(EXIST_EMAIL);
			}
		})
		.bail(),
	body("password")
		.trim()
		.escape()
		.notEmpty()
		.withMessage(NOT_EMPTY)
		.bail()
		.isLength({ min: 6, max: 16 })
		.withMessage(PASSWORD_LENGTH),
	async (req, res, next) => {
		const errors = validationResult(req);

		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		next();
	},
];

exports.loginValidator = [
	body("email")
		.trim()
		.notEmpty()
		.normalizeEmail()
		.withMessage(INVALID_CREDENTIAL)
		.bail(),
	body("password")
		.trim()
		.escape()
		.notEmpty()
		.withMessage(INVALID_CREDENTIAL)
		.bail()
		.isLength({ min: 6, max: 16 })
		.withMessage(PASSWORD_LENGTH),
	(req, res, next) => {
		const errors = validationResult(req);

		if (!errors.isEmpty()) {
			return res.status(401).json({ errors: errors.array() });
		}

		next();
	},
];
