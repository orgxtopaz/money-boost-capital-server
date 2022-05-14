const jwt = require('jsonwebtoken');

let User = require("../models/user.model");

const login =async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
  
    //CHECKING IF USER EXIST ON DATABASE
    User.find({ $and: [{ email: { $eq: email } }, { password: { $eq: password } }, { status: { $eq: "approved" } },{ verified: { $eq: "true" } }] })
  
      /// VALIDATING IF USER EXIST
      .then(user => {
  
        if (user.length > 0) {
         
          if(user[0].position =="admin"){
            res.json({ auth: true, position:user[0].position, email:user[0].email,password:user[0].password,position:user[0].position  })

          }else if(user[0].position =="user"){
            res.json({ auth: true, position:user[0].position, email:user[0].email,password:user[0].password,position:user[0].position,user:user  })

          }
         
  
  
        } else {
          res.status(400).json({ auth: false, message: "User did not exist" })
        }
  
      })
  

}


module.exports = login;

   

  
