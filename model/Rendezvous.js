const mongoose = require("mongoose");

//require schema
const { Schema, model } = mongoose;

//create rendezvous schema
const rendezvousSchema = new Schema({
  patientId: {
    type: String,
    required: true,
  },
  docteurId: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: "En attente",
  },
});

module.exports = Rendezvous = model("rendezvous", rendezvousSchema);
