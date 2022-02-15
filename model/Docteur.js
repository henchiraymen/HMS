const mongoose = require("mongoose");

//require schema
const { Schema, model } = mongoose;

//create patiant schema

const docteurSchema = new Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
  },
  speciality: {
    type: String,
    required: true,
  },
});

module.exports = Docteur = model("docteur", docteurSchema);
