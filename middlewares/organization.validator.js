const { body, validationResult } = require('express-validator');

const errorMsg = require('../helpers/resError.helper');

const {
  MIN_LENGTH_3,
  MIN_LENGTH_10,
  INVALID_EMAIL,
  INVALID_INPUT,
} = require('../helpers/messages');

exports.organizationValidator = [
  body('name')
    .trim()
    .escape()
    .isLength({ min: 0, max: 100 })
    .withMessage(MIN_LENGTH_3),
  body('image')
    .trim()
    // .escape()
    .isLength({ min: 0, max: 255 })
    .withMessage(MIN_LENGTH_10),
  body('adress')
    .trim()
    .escape()
    .isLength({ min: 0, max: 255 })
    .withMessage(INVALID_INPUT),
  body('phone')
    .trim()
    .escape()
    .isString()
    .bail()
    .isLength({ min: 0, max: 12 })
    .withMessage(INVALID_INPUT),
  body('email')
    .trim()
    .escape()
    .isString()
    .bail()
    .isLength({ min: 0, max: 40 })
    .withMessage(INVALID_EMAIL),
  body('welcomeText')
    .trim()
    .escape()
    .isLength({ min: 0, max: 1000 })
    .withMessage(INVALID_INPUT),
  body('aboutUsText')
    .trim()
    .escape()
    .isLength({ MIN: 0, MAX: 100 })
    .withMessage(INVALID_INPUT),
  body('urlLinked')
    .trim()
    // .escape()
    .isLength({ MIN: 0, MAX: 100 })
    .withMessage(INVALID_INPUT),
  body('urlInsta')
    .trim()
    // .escape()
    .isLength({ MIN: 0, MAX: 100 })
    .withMessage(INVALID_INPUT),
  body('urlFace')
    .trim()
    // .escape()
    .isLength({ MIN: 0, MAX: 100 })
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
