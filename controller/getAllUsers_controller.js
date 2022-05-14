
let User = require("../models/user.model");

const getAllUsers =async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  User.find({ $and: [{ email: { $eq: email } }, { password: { $eq: password } }, { position: { $eq: "admin" } }] })
  /// VALIDATING IF USER EXIST
  .then(user => {
  
    if (user.length > 0) {
   
        User.find() // PROMISE IF ELSE
        .then((allUser) => res.json({allUser:allUser})) // IF TRUE CHECK
        .catch((err) => res.status(400).json("Error : " + err)); // IF ERROR
    
     


    } else {
      res.status(400).json({ auth: false, message: "You are not authorized!" })
    }

  })



}


module.exports = getAllUsers;
