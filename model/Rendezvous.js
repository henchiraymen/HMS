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
    type: Date,
    required: true,
  },
  status: {
    type: String,
  },
});

module.exports = Rendezvous = model("rendezvous", rendezvousSchema);
