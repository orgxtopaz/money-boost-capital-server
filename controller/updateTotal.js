let Attendance = require("../models/attendance.model");
let allAttendance = require("../models/totalAttendance.model");

const timeOut =async (req, res) => {

const email = req.body.email;
const date = req.body.date;
const timeOut = req.body.timeOut;


//CHECKING IF USER ALREADY TIME OUT
Attendance.find({
  $and: [

    { email: { $eq: email } }
  

  ]
})

  /// VALIDATING IF USER EXIST
  .then(attendance => {

    if (attendance.length > 0) {
   
                allAttendance.find({
                    $and: [
    
                      { email: { $eq: email } },
                    
    
                    ]
                  })
                   
                  .then(checkallattendance => {
    
                    if(checkallattendance.length>0){
    
                     allAttendance.findOneAndUpdate({
                      $and: [
              
                        { email: { $eq: email } }
                       
              
                      ]
                    },
                    
                    
                    { $set: { overallTotalHours:checkallattendance[0].overallTotalHours+totalHours ,overallTotalDays:checkallattendance[0].overallTotalDays +1 }    }, { new: true }, (err, doc) => {
                     
              
              
                    });
    
                    }
    
    
                  })
    

     



    } else {
      res.status(400).json({ message: "You Must Time In First or You are already Time .OUT! " })

    }


  })

  .catch((err) => res.status(400).json("Errorsss: " + err)); // CATCH THE ERROR



}

module.exports = timeOut;

