const { body, validationResult } = require('express-validator');

const errorMsg = require('../helpers/resError.helper');

const {
  MIN_LENGTH_3,
  INVALID_EMAIL,
  INVALID_INPUT,
} = require('../helpers/messages');

exports.contactsValidator = [
  body('firstName')
    .trim()
    .escape()
    .notEmpty()
    .isLength({ min: 3, max: 20 })
    .withMessage(MIN_LENGTH_3),
  body('lastName')
    .trim()
    .escape()
    .notEmpty()
    .isLength({ min: 3, max: 20 })
    .withMessage(MIN_LENGTH_3),
  body('phone')
    .trim()
    .escape()
    .isNumeric()
    .bail()
    .isLength({ min: 0, max: 13 })
    .withMessage(INVALID_INPUT),
  body('email')
    .trim()
    .escape()
    .notEmpty()
    .bail()
    .isEmail()
    .normalizeEmail()
    .bail()
    .isLength({ min: 0, max: 40 })
    .withMessage(INVALID_EMAIL),
  body('message')
    .trim()
    .escape()
    .isLength({ min: 0, max: 1000 })
    .withMessage(INVALID_INPUT),

  // eslint-disable-next-line consistent-return
  (req, res, next) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      next();
    } else {
      // eslint-disable-next-line no-console
      console.log(errors.array()); // prep para logger
      // eslint-disable-next-line no-underscore-dangle
      return res.status(400).json(errorMsg._400);
    }
  },
];
