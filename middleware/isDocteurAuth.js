const jwt = require("jsonwebtoken");
const Docteur = require("../model/Docteur");

const isDocteurAuth = async (req, res, next) => {
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
    const docteurToFind = await Docteur.findOne({ _id: decoded.id });
    if (!docteurToFind) {
      return res
        .status(401)
        .send({ errors: [{ msg: "you are not authorized" }] });
    }
    req.docteur = docteurToFind;
    next();
  } catch (error) {
    res.status(401).send({ errors: [{ msg: "you are not authorized" }] });
  }
};

module.exports = isDocteurAuth;
