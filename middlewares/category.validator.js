const { body, validationResult } = require('express-validator');

const errorMsg = require('../helpers/resError.helper');

const {
  MIN_LENGTH_3,
  INVALID_INPUT,
} = require('../helpers/messages');

exports.categoryValidator = [
  body('name')
    .trim()
    .escape()
    .notEmpty()
    .isLength({ min: 3, max: 20 })
    .isString()
    .withMessage(MIN_LENGTH_3),
  body('description')
    .trim()
    .escape()
    .isString()
    .isLength({ min: 0, max: 1000 })
    .withMessage(INVALID_INPUT),
  body('image')
    .trim()
    .isString()
    .isLength({ min: 0, max: 150 })
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
