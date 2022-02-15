const jwt = require("jsonwebtoken");
const Patient = require("../model/Patient");

const isPatientAuth = async (req, res, next) => {
  try {
    // check token
    const token = req.headers["authorization"];
    if (!token) {
      return res
        .status(401)
        .send({ errors: [{ msg: "you are not authorized" }] });
    }

    //decode : id from token
    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    // det the patient
    const patientToFind = await Patient.findOne({ _id: decoded.id });
    if (!patientToFind) {
      return res
        .status(401)
        .send({ errors: [{ msg: "you are not authorized" }] });
    }
    req.patient = patientToFind;
    next();
  } catch (error) {
    res.status(401).send({ errors: [{ msg: "you are not authorized" }] });
  }
};

module.exports = isPatientAuth;
