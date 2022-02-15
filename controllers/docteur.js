const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Docteur = require("../model/Docteur");

// register docteur
exports.register = async (req, res) => {
  try {
    const { fullName, email, password, phone, address, speciality } = req.body;

    // check email
    const docteurToCheck = await Docteur.findOne({ email });
    if (docteurToCheck) {
      return res
        .status(400)
        .send({ errors: [{ msg: "Docteur already exist !!!! " }] });
    }

    //instance of model
    const newDocteur = new Docteur({
      fullName,
      email,
      password,
      phone,
      address,
      speciality,
    });

    //hash password
    const salt = 10;
    const hashedPassword = await bcrypt.hash(password, salt);
    newDocteur.password = hashedPassword;

    //save patient to DB
    await newDocteur.save();

    //token
    const token = jwt.sign({ id: newDocteur._id }, process.env.SECRET_KEY, {
      expiresIn: "24h",
    });

    res
      .status(200)
      .send({ msg: "Register success...", docteur: newDocteur, token });
  } catch (error) {
    res.status(400).send({ errors: [{ msg: "Register fail !!!! " }] });
  }
};

// login
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    //check email
    const docteurToCheck = await Docteur.findOne({ email });
    if (!docteurToCheck) {
      return res
        .status(400)
        .send({ errors: [{ msg: "Bad credentials !!!! " }] });
    }

    //check password
    const isMatch = await bcrypt.compare(password, docteurToCheck.password);
    if (!isMatch) {
      return res
        .status(400)
        .send({ errors: [{ msg: "Bad credentials !!!! " }] });
    }

    //token
    const token = jwt.sign({ id: docteurToCheck._id }, process.env.SECRET_KEY, {
      expiresIn: "24h",
    });

    res
      .status(200)
      .send({ msg: "login success ... ", docteur: docteurToCheck, token });
  } catch (error) {
    res.status(400).send({ errors: [{ msg: "login fail !!!! " }] });
  }
};

//get current docteur
exports.currentDocteur = (req, res) => {
  res.send(req.docteur);
};

// Get All Docteurs
exports.getAllDocteurs = async (req, res) => {
  try {
    const docteurList = await Docteur.find();
    res.status(200).send({ msg: "docteurs load successfuly", docteurList });
  } catch (error) {
    res.status(400).send({ msg: "docteurs load fail ... ", error });
  }
};

// delete docteur
exports.deleteDocteur = async (req, res) => {
  try {
    const docteurId = req.params.id;
    await Docteur.deleteOne({ _id: docteurId });
    res.status(200).send({ msg: "docteur deleted successfuly ..." });
  } catch (error) {
    res.status(400).send({ msg: "docteur deleted fail !!! ", error });
  }
};

//update docteur
exports.updateDocteur = async (req, res) => {
  try {
    const { _id } = req.params;
    const newDocteur = req.body;
    const result = await Docteur.updateOne(
      { _id },
      { $set: { ...newDocteur } }
    );
    if (result.modifiedCount === 0) {
      return res.status(400).send({ msg: "docteur already updated !!! " });
    }
    res.status(200).send({ msg: "docteur updated successfuly ...", result });
  } catch (error) {
    res.status(400).send({ msg: "can not update the docteur !!! ", error });
  }
};

// get docteur by id
exports.getDocteurById = async (req, res) => {
  try {
    const { _id } = req.params;
    const docteurToFind = await Docteur.findOne({ _id });
    if (!docteurToFind) {
      res.status(400).send({ msg: "can not find the docteur !!! " });
    }
    res
      .status(200)
      .send({ msg: "docteur find successfuly ...", docteurToFind });
  } catch (error) {
    res.status(400).send({ msg: "can not find the docteur !!! ", error });
  }
};
