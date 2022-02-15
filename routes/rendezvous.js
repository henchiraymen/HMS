//require express
const express = require("express");
const {
  addRendezvous,
  updateRendezvous,
  getRendezvousByPatientId,
  getRendezvousByDocteurId,
} = require("../controllers/rendezvous");

//router from express
const router = express.Router();

/**
 * @desc:register
 * @path: /add
 * @method:POST
 * @data: req.body
 */

router.post("/add", addRendezvous);

/**
 * @desc : update rendez-vous
 * @method : PUT
 * @path : /update
 * @data : req.params and req.body
 */
router.put("/update/:_id", updateRendezvous);

/**
 * @desc : get rendez-vous by patientId
 * @method : GET
 * @path : /getrendezvousbypatient
 * @data : req.params
 */
router.get("/getrendezvousbypatient/:patientId", getRendezvousByPatientId);

/**
 * @desc : get rendez-vous by docteurId
 * @method : GET
 * @path : /getrendezvousbydocteur
 * @data : req.params
 */
 router.get("/getrendezvousbydocteur/:docteurId", getRendezvousByDocteurId);


module.exports = router;
