// LOAD ENVIRONMENTAL VARIABLES
require('dotenv').config

//IMPORT DEPENDENCIES
const mongoose = require("mongoose") 

// PUT OUT ENVIRONOMENTAL VARIABLE FORM PROCESS.ENV OBJECT
const MONGODB_URI = process.env.MONGODB_URI

// OTHER ENV CONFIGURATIONS TO REMOVE DEPRECATION WARNINGS
// const config = { useUnifiedTopology: true, useNewUrlParser: true };
const config = {
    useUnifiedTopology:true, 
    useNewUrlParser: true, 
    useFindAndModify: false, 
}

// ESTABLISH CONNECTION TO DATABASE
mongoose.connect(MONGODB_URI, config) 

//CREATE DATABASE CONNECTION MESSAGES 
// const db = mongoose.connection
mongoose.connection
  .on("open", () => console.log("MONGO CONNECTION IS OPEN"))
  .on("close", () => console.log("MONGO CONNECTION IS CLOSED"))
  .on("error", (error) =>
    console.log("MONGO CONNECTION ERROR \n***************\n", error)
  );

  // EXPORT MONGOOSE CONNECTION TO USE IN THE SERVER.JS FILE
  module.exports = mongoose;