

let User = require("../models/user.model");

const UpdateUser =async (req, res) => {
///////////--------------ATTENDANCE TIME OUT-----------------\\\\\\\\\\\\\\\\\\\\\


const userId = req.body.userId;
const status = req.body.status;
const decision = req.body.decision;

if(status!=="underReview"){
    res.status(400).json({ message: "You already managed this user!" })

}else {
 //UPDATING TIME OUT 

 if(decision=="approved"){
    User.findOneAndUpdate({
        $and: [
    
          { _id: { $eq: userId } }
       
    
        ]
      }, { $set: { status:"approved" } }, { new: true }, (err, doc) => {
        if (err) {
          console.log("CAN'T UPDATE USER SERVER ERROR!");
        } else {
          res.status(200).json({ message: "USER UPDATED SUCCESSFULLY!" })
        }
    
    
      });
 }

 else if(decision=="cancelled"){
    User.findOneAndUpdate({
        $and: [
            
          { _id: { $eq: userId } }
       
    
        ]
      }, { $set: { status:"cancelled" } }, { new: true }, (err, doc) => {
        if (err) {
          console.log("CAN'T UPDATE USER SERVER ERROR!");
        } else {
          res.status(200).json({ message: "USER UPDATED SUCCESSFULLY!" })
        }
    
    
      });
 }


}

 


}

module.exports = UpdateUser;






