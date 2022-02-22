const Rendezvous = require("../model/Rendezvous");

//add rendez-vous
exports.addRendezvous = async (req, res) => {
  try {
    const {
      patientId,
      docteurId,
      docteurName,
      patientName,
      date,
      time,
      status,
    } = req.body;
    //check the date of the rendezvous
    const rendezvousToCheck = await Rendezvous.findOne({
      docteurId,
      date,
      time,
    });
    if (rendezvousToCheck) {
      return res.status(400).send({
        errors: [{ msg: "il y a un autre rendez-vous a cette date !!!! " }],
      });
    }

    //instance of model
    const newRendezvous = new Rendezvous({
      patientId,
      docteurId,
      docteurName,
      patientName,
      date,
      time,
      status,
    });

    //save to DB
    await newRendezvous.save();
    res.status(200).send({
      msg: "Rendez-vous est enregistrer avec succés, attend la validation ...",
      rendezvous: newRendezvous,
    });
  } catch (error) {
    res.status(400).send({
      errors: [{ msg: "enregistrement de rendez-vous est écoué !!!! " }],
    });
  }
};

//update rendez-vous
exports.updateRendezvous = async (req, res) => {
  try {
    const { _id } = req.params;
    const newRendezvous = req.body;
    const result = await Rendezvous.updateOne(
      { _id },
      { $set: { ...newRendezvous } }
    );
    if (result.modifiedCount === 0) {
      return res.status(400).send({ msg: "rendez-vous already updated !!! " });
    }
    res
      .status(200)
      .send({ msg: "rendez-vous updated successfuly ...", result });
  } catch (error) {
    res.status(400).send({ msg: "can not update the rendez-vous !!! ", error });
  }
};

//get rendez-vous by patientId
exports.getRendezvousByPatientId = async (req, res) => {
  try {
    const { patientId } = req.params;
    const rendezvousToFind = await Rendezvous.find({ patientId });
    if (!rendezvousToFind) {
      res.status(400).send({ msg: "can not find rendez-vous !!! " });
    }
    res
      .status(200)
      .send({ msg: "rendez-vous find successfuly ...", rendezvousToFind });
  } catch (error) {
    res.status(400).send({ msg: "can not find rendez-vous !!! ", error });
  }
};

//get rendez-vous by docteurId
exports.getRendezvousByDocteurId = async (req, res) => {
  try {
    const { docteurId } = req.params;
    const rendezvousToFind = await Rendezvous.find({ docteurId });
    if (!rendezvousToFind) {
      res.status(400).send({ msg: "can not find rendez-vous !!! " });
    }
    res
      .status(200)
      .send({ msg: "rendez-vous find successfuly ...", rendezvousToFind });
  } catch (error) {
    res.status(400).send({ msg: "can not find rendez-vous !!! ", error });
  }
};
