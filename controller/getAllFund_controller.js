
let User = require("../models/user.model");
let Fund = require("../models/fund.model");
const getAllFund =async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  User.find({ $and: [{ email: { $eq: email } }, { password: { $eq: password } }, { position: { $eq: "admin" } }] })
  /// VALIDATING IF USER EXIST
  .then(user => {
  
    if (user.length > 0) {
   
        Fund.find() // PROMISE IF ELSE
        .then((fundrequest) => res.json({fundrequest:fundrequest})) // IF TRUE CHECK
        .catch((err) => res.status(400).json("Error : " + err)); // IF ERROR
    
     


    } else {
      res.status(400).json({ auth: false, message: "You are not authorized!" })
    }

  })



}


module.exports = getAllFund;
