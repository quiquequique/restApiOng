const { body, validationResult } = require('express-validator');

const errorMsg = require('../helpers/resError.helper');

const {
  NOT_EMPTY,
  MIN_LENGTH_3,
  MIN_LENGTH_10,
  INVALID_EMAIL,
  INVALID_INPUT,
  INVALID_URL
} = require('../helpers/messages');

exports.organizationValidator = [
  body('name')
    .trim()
    .escape()
    .notEmpty()
    .withMessage(NOT_EMPTY)
    .bail()
    .isLength({ min: 3, max: 100 })
    .withMessage(MIN_LENGTH_3),
  body('image')
    .trim()
    .escape()
    .notEmpty()
    .withMessage(NOT_EMPTY)
    .bail()
    .isLength({ min: 10, max: 255 })
    .withMessage(MIN_LENGTH_10),
  body('adress')
    .trim()
    .escape()
    .isLength({ min: 0, max: 255 })
    .withMessage(INVALID_INPUT),
  body('phone')
    .trim()
    .escape()
    .isNumeric()
    .bail()
    .isLength({ min: 0, max: 12 })
    .withMessage(INVALID_INPUT),
  body('email')
    .trim()
    .escape()
    .notEmpty()
    .isEmail()
    .bail()
    .isLength({min: 10, max: 40})
    .withMessage(INVALID_EMAIL),
  body('welcomeText')
    .trim()
    .escape()
    .notEmpty()
    .isLength({ min: 20, max: 1000 })
    .withMessage(INVALID_INPUT),
  body('aboutUsText')
    .trim()
    .escape()
    .isLength({ MIN: 0, MAX: 1000 })
    .withMessage(INVALID_INPUT),

  // eslint-disable-next-line consistent-return
  (req, res, next) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      next();
    } else {
      console.log(errors.array()); // prep para logger
      return res.status(400).json(errorMsg._400);
    }
  },
];
