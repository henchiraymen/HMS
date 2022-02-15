// require mongoose
const mongoose = require("mongoose");

//require schema
const { Schema, model } = mongoose;

//create patiant schema

const patientSchema = new Schema({
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
  age: {
    type: Number,
  },
  phone: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
  },
});

module.exports = Patient = model("patient", patientSchema);
