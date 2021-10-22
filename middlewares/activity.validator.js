const { body, validationResult } = require('express-validator');

const errorMsg = require('../helpers/resError.helper');

const {
  NOT_EMPTY,
  MIN_LENGTH_3,
  MIN_LENGTH_10
} = require('../helpers/messages');

exports.activityValidator = [
  body('name')
    .trim()
    .escape()
    .notEmpty()
    .withMessage(NOT_EMPTY)
    .isLength({ min: 3, max: 100 })
    .withMessage(MIN_LENGTH_3),
  body('content')
    .trim()
    .escape()
    .notEmpty()
    .withMessage(NOT_EMPTY)
    .bail()
    .isLength({ min: 10, max: 255 })
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
  }
];
