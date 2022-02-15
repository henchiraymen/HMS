const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Patient = require("../model/Patient");

exports.register = async (req, res) => {
  try {
    const { fullName, email, password, age, phone, address } = req.body;

    // check email
    const patientToCheck = await Patient.findOne({ email });
    if (patientToCheck) {
      return res
        .status(400)
        .send({ errors: [{ msg: "Patient already exist !!!! " }] });
    }

    //instance of model
    const newPatient = new Patient({
      fullName,
      email,
      password,
      age,
      phone,
      address,
    });

    //hash password
    const salt = 10;
    const hashedPassword = await bcrypt.hash(password, salt);
    newPatient.password = hashedPassword;

    //save patient to DB
    await newPatient.save();

    //token
    const token = jwt.sign({ id: newPatient._id }, process.env.SECRET_KEY,{expiresIn:'24h'});

    res
      .status(200)
      .send({ msg: "Register success...", patient: newPatient, token });
  } catch (error) {
    res.status(400).send({ errors: [{ msg: "Register fail !!!! " }] });
  }
};

//login
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    //check email
    const patientToCheck = await Patient.findOne({ email });
    if (!patientToCheck) {
      return res
        .status(400)
        .send({ errors: [{ msg: "Bad credentials !!!! " }] });
    }

    //check password
    const isMatch = await bcrypt.compare(password, patientToCheck.password);
    if (!isMatch) {
      return res
        .status(400)
        .send({ errors: [{ msg: "Bad credentials !!!! " }] });
    }

    //token
    const token = jwt.sign({ id: patientToCheck._id }, process.env.SECRET_KEY,{expiresIn:'24h'});

    res
      .status(200)
      .send({ msg: "login success ... ", patient: patientToCheck, token });
  } catch (error) {
    res.status(400).send({ errors: [{ msg: "login fail !!!! " }] });
  }
};

exports.currentPatient = (req, res) => {
  res.send(req.patient);
};
