const { body, validationResult } = require("express-validator");

exports.registerValidator = () => [
  body("fullName", "fullName is required !").notEmpty(),
  body("email", "enter a valid email!").isEmail(),
  body("password", " password must contain at least 6 charac !!").isLength({
    min: 6,
  }),
];

exports.loginValidator = () => [
  body("email", "enter a valid email!").isEmail(),
  body("password", " password must contain at least 6 charac !!").isLength({
    min: 6,
  }),
];

exports.validations = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};
