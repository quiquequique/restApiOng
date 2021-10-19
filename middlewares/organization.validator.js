const { body, validationResult } = require('express-validator');

const errorMsg = require('../helpers/resError.helper');

const {
  NOT_EMPTY,
  MIN_LENGTH_3,
  MIN_LENGTH_10,
  INVALID_EMAIL,
  EXIST_EMAIL,
  PASSWORD_LENGTH,
  INVALID_CREDENTIAL,
} = require('../helpers/messages');

exports.organizationValidator = [
  body('name')
    .trim()
    .escape()
    .notEmpty()
    .withMessage(NOT_EMPTY)
    .bail()
    .isLength({ min: 3 })
    .withMessage(MIN_LENGTH_3),
  body('image')
    .trim()
    .escape()
    .notEmpty()
    .withMessage(NOT_EMPTY)
    .bail()
    .isLength({ min: 10 })
    .withMessage(MIN_LENGTH_10),
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
