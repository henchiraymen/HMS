//require express
const express = require("express");
const { register, login, currentPatient } = require("../controllers/patient");
const isPatientAuth = require("../middleware/isPatientAuth");
const {
  registerValidator,
  validations,
  loginValidator,
} = require("../middleware/patientValidator");

//router from express
const router = express.Router();

/**
 * @desc:register
 * @path: /register
 * @method:POST
 * @data: req.body
 */

router.post("/register", registerValidator(), validations, register);

/**
 * @desc:login
 * @path: /login
 * @method:POST
 * @data: req.body
 */

router.post("/login", loginValidator(), validations, login);

/**
 * @desc:current patient
 * @path: /current
 * @method:GET
 * @data: no data
 */

router.get("/current", isPatientAuth, currentPatient);

module.exports = router;
