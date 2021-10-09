const { body, validationResult } = require("express-validator");
const { isRegister } = require("../Services/users");

exports.registerValidator = [
	body("firstName")
		.trim()
		.escape()
		.notEmpty()
		.withMessage("El nombre no puede estar vacio")
		.bail()
		.isLength({ min: 2 })
		.withMessage("El nombre debe tener por lo menos 3 caracteres"),
	body("lastName")
		.trim()
		.escape()
		.notEmpty()
		.withMessage("El apellido no puede estar vacio")
		.bail()
		.isLength({ min: 2 })
		.withMessage("El apellido debe tener por lo menos 3 caracteres"),
	body("email")
		.trim()
		.notEmpty()
		.normalizeEmail()
		.withMessage("El email ingresado es invalido")
		.custom(async (value) => {
			if (await isRegister(value)) {
				return Promise.reject("El email ingresado ya existe");
			}
		})
		.bail(),
	body("password")
		.trim()
		.escape()
		.notEmpty()
		.withMessage("La contraseña no puede estar vacia")
		.bail()
		.isLength({ min: 6, max: 16 })
		.withMessage(
			"La contraseña debe tener 6 caracteres como minimo y 16 como maximo"
		),
	async (req, res, next) => {
		const errors = validationResult(req);

		if (!errors.isEmpty()) {
			return res.status(422).json({ errors: errors.array() });
		}

		next();
	},
];
