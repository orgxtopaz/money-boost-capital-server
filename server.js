const UserRouter = require("./routes/user.routes"); //CALL THE ROUTES FOLDER
let User = require("./models/user.model");

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

//Routing defines the way in which the client requests are handled by the application endpoints.
require("dotenv").config();
const migzapp = express(); // framwework to be used

const port = process.env.PORT || 5000; // the port .env give port if 5000 already used
var bodyParser = require('body-parser');
migzapp.use(bodyParser.json({limit: "50mb"}));
migzapp.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));

migzapp.use(cors()); // migzapp will use cors
migzapp.use(express.json()); // migzapp use express.json



migzapp.use("/", UserRouter); //

const uri = process.env.ATLAS_URI; // getting the datas in the .env which is the mongo database

mongoose.connect(
  uri,
  {
    useNewUrlParser: true,

    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw err;
    console.log("Connected to MongoDB!!!");
  }
); // MONGO DB NEEDED CONFIG.

const connection = mongoose.connection; // CONNECT NOW TO DATABASE / MONGO DB

connection.once("open", () => {
  console.log("MONGO DB CONNECTION ESTABLISHED!");
});

migzapp.listen(port, () => {
  console.log("Server is running in port:" + port);
});
