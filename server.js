// require express
const express = require("express");

// instance of express
const app = express();

//require dotenv and config
require("dotenv").config();

// port
const port = process.env.port;

// connect to DB
const connectDB = require("./config/connectDB");
connectDB();

//express.json(middleware)
app.use(express.json());

//routes
const patientRouter = require("./routes/patient");
const docteurRouter = require("./routes/docteur");
const rendezvousRouter = require("./routes/rendezvous");
app.use("/api/patient", patientRouter);
app.use("/api/docteur", docteurRouter);
app.use("/api/rendezvous", rendezvousRouter);

//create server
app.listen(port, (error) => {
  error
    ? console.error("can not run the server !!!!")
    : console.log(`server is running on port ${port} ...`);
});

console.clear();