//require express
const express = require("express");
const {
  register,
  login,
  currentDocteur,
  getAllDocteurs,
  deleteDocteur,
  getDocteurById,
  updateDocteur,
} = require("../controllers/docteur");
const isDocteurAuth = require("../middleware/isDocteurAuth");
const {
  registerValidator,
  validations,
  loginValidator,
} = require("../middleware/docteurValidator");

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
 * @desc:current docteur
 * @path: /current
 * @method:GET
 * @data: no data
 */

router.get("/current", isDocteurAuth, currentDocteur);

/**
 * @desc : get all docteurs
 * @method : GET
 * @path : /allDocteurs
 * @data : req.body
 */
router.get("/allDocteurs", getAllDocteurs);

/**
 * @desc : delete one docteur
 * @method : DELETE
 * @path : /delete
 * @data : req.params
 */
router.delete("/delete/:id", deleteDocteur);

/**
 * @desc : get docteur by id
 * @method : GET
 * @path : /getDocteur
 * @data : req.params
 */
router.get("/getDocteur/:_id", getDocteurById);

/**
 * @desc : update docteur
 * @method : PUT
 * @path : /update
 * @data : req.params and req.body
 */
router.put("/update/:_id", updateDocteur);

module.exports = router;
