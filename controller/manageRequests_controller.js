let User = require("../models/user.model");
let Fund = require("../models/fund.model");

const ManageRequests = async (req, res) => {
  ///////////--------------ATTENDANCE TIME OUT-----------------\\\\\\\\\\\\\\\\\\\\\

  const requestId = req.body.requestId;
  const from = req.body.from;
  const type = req.body.type;
  const amount = parseInt(req.body.amount);
  const action = req.body.action;
  const status = req.body.status;
  const manage = req.body.manage;

  if (status == "pending") {
    //CHECKING IF USER ALREADY TIME OUT
    Fund.find({
      $and: [{ _id: { $eq: requestId } }, { email: { $eq: from } }],
    })

      /// VALIDATING IF REQUEST
      .then((fund) => {
        if (fund.length > 0) {
          if (action == "fund") {
            if (manage == "approved") {

               ///////////////////////////////////////////////////////////////////

              if (type == "INITIAL INVESTMENT") {




                User.find({
                  $and: [
  
                    { email: { $eq: from } },
                  
  
                  ]
                })

                .then(checkuser => {

                  if(checkuser.length>0){
  
                    User.findOneAndUpdate({
                    $and: [
            
                      { email: { $eq: from } }
                     
            
                    ]
                  },
                 
                  { $set: { initialInvestment:checkuser[0].initialInvestment +amount }    }, { new: true }, (err, doc) => {

                    if (err) {
                    
                      res.status(400).json("FUNDING ERROR"); // CATCH THE ERROR

                    }else{

                      Fund.find({
                        $and: [
        
                          {_id: { $eq: requestId } } 
                        
        
                        ]
                      })
                      
                      .then(checkfund => { 

                        if(checkfund.length>0){


                          Fund.findOneAndUpdate({
                            $and: [
                    
                              { _id: { $eq: requestId } }
                             
                    
                            ]
                          },
                          
                          { $set: { status:checkfund[0].status="approved" }    }, { new: true }, (err, doc) => {
                            
                            if(err){
                              res.status(400).json("FUNDING ERROR"); // CATCH THE ERROR

                            }else{
                              res.status(200).json("FUNDING STATUS UPDATED"); // CATCH THE ERROR

                            }

                          }

                          
                          )



                         }







                      })
                   



                 
                      




                    }
                  });
                }
              })
             
              }



              ///////////////////////////////////////////////////////////////////


             
              else if (type == "REGULAR INVESTMENT") {


                  User.find({
                  $and: [
  
                    { email: { $eq: from } },
                  
  
                  ]
                })

                .then(checkuser => {

                  if(checkuser.length>0){
  
                    User.findOneAndUpdate({
                    $and: [
            
                      { email: { $eq: from } }
                     
            
                    ]
                  },
                 
                  { $set: { regularInvestment:checkuser[0].regularInvestment +amount }    }, { new: true }, (err, doc) => {

                    if (err) {
                    
                      res.status(400).json("FUNDING ERROR"); // CATCH THE ERROR

                    }else{

                      Fund.find({
                        $and: [
        
                          {_id: { $eq: requestId } } 
                        
        
                        ]
                      })
                      
                      .then(checkfund => { 

                        if(checkfund.length>0){


                          Fund.findOneAndUpdate({
                            $and: [
                    
                              { _id: { $eq: requestId } }
                             
                    
                            ]
                          },
                          
                          { $set: { status:checkfund[0].status="approved" }    }, { new: true }, (err, doc) => {
                            
                            if(err){
                              res.status(400).json("FUNDING ERROR"); // CATCH THE ERROR

                            }else{
                              res.status(200).json("FUNDING STATUS UPDATED"); // CATCH THE ERROR

                            }

                          }

                          
                          )



                         }







                      })
                   



                 
                      




                    }
                  });
                }
              })




              }
          

                 ///////////////////////////////////////////////////////////////////


              else if (type == "FIXED INVESTMENT") {

                User.find({
                  $and: [
  
                    { email: { $eq: from } },
                  
  
                  ]
                })

                .then(checkuser => {

                  if(checkuser.length>0){
  
                    User.findOneAndUpdate({
                    $and: [
            
                      { email: { $eq: from } }
                     
            
                    ]
                  },
                 
                  { $set: { fixedInvestment:checkuser[0].fixedInvestment +amount }    }, { new: true }, (err, doc) => {

                    if (err) {
                    
                      res.status(400).json("FUNDING ERROR"); // CATCH THE ERROR

                    }else{

                      Fund.find({
                        $and: [
        
                          {_id: { $eq: requestId } } 
                        
        
                        ]
                      })
                      
                      .then(checkfund => { 

                        if(checkfund.length>0){


                          Fund.findOneAndUpdate({
                            $and: [
                    
                              { _id: { $eq: requestId } }
                             
                    
                            ]
                          },
                          
                          { $set: { status:checkfund[0].status="approved" }    }, { new: true }, (err, doc) => {
                            
                            if(err){
                              res.status(400).json("FUNDING ERROR"); // CATCH THE ERROR

                            }else{
                              res.status(200).json("FUNDING STATUS UPDATED"); // CATCH THE ERROR

                            }

                          }

                          
                          )



                         }







                      })
                   



                 
                      




                    }
                  });
                }
              })
        
            }


          }
            









             ///////////////////////////////////////////////////////////////////







            else if (manage == "cancelled") {

                Fund.find({
                  $and: [
  
                    {_id: { $eq: requestId } } 
                  
  
                  ]
                })
                
                .then(checkfund => { 

                  if(checkfund.length>0){


                    Fund.findOneAndUpdate({
                      $and: [
              
                        { _id: { $eq: requestId } }
                       
              
                      ]
                    },
                    
                    { $set: { status:checkfund[0].status="cancelled" }    }, { new: true }, (err, doc) => {
                      
                      if(err){
                        res.status(400).json("FUNDING ERROR"); // CATCH THE ERROR

                      }else{
                        res.status(200).json("Request Fund Cancelled"); // CATCH THE ERROR
                      }

                    }

                    
                    )


                   }


                })
             



           
                




         

            



             
            }





          } 
          






















          
          ////////////////////WITHDRAW
          else if (action == "withdraw") {


            if (manage == "approved") {

              ///////////////////////////////////////////////////////////////////

             if (type == "INITIAL INVESTMENT") {




               User.find({
                 $and: [
 
                   { email: { $eq: from } },
                 
 
                 ]
               })

               .then(checkuser => {

                 if(checkuser.length>0){
 
                   User.findOneAndUpdate({
                   $and: [
           
                     { email: { $eq: from } }
                    
           
                   ]
                 },
                
                 { $set: { initialInvestment:checkuser[0].initialInvestment - amount }    }, { new: true }, (err, doc) => {

                   if (err) {
                   
                     res.status(400).json("WITHDRAW ERROR"); // CATCH THE ERROR

                   }else{

                     Fund.find({
                       $and: [
       
                         {_id: { $eq: requestId } } 
                       
       
                       ]
                     })
                     
                     .then(checkfund => { 

                       if(checkfund.length>0){


                         Fund.findOneAndUpdate({
                           $and: [
                   
                             { _id: { $eq: requestId } }
                            
                   
                           ]
                         },
                         
                         { $set: { status:checkfund[0].status="approved" }    }, { new: true }, (err, doc) => {
                           
                           if(err){
                             res.status(400).json("WITHDRAW ERROR"); // CATCH THE ERROR

                           }else{
                             res.status(200).json("FUNDING STATUS UPDATED"); // CATCH THE ERROR

                           }

                         }

                         
                         )



                        }







                     })
                  



                
                     




                   }
                 });
               }
             })
            
             }



             ///////////////////////////////////////////////////////////////////


            
             else if (type == "REGULAR INVESTMENT") {


                 User.find({
                 $and: [
 
                   { email: { $eq: from } },
                 
 
                 ]
               })

               .then(checkuser => {

                 if(checkuser.length>0){
 
                   User.findOneAndUpdate({
                   $and: [
           
                     { email: { $eq: from } }
                    
           
                   ]
                 },
                
                 { $set: { regularInvestment:checkuser[0].regularInvestment - amount }    }, { new: true }, (err, doc) => {

                   if (err) {
                   
                     res.status(400).json("WITHDRAW ERROR"); // CATCH THE ERROR

                   }else{

                     Fund.find({
                       $and: [
       
                         {_id: { $eq: requestId } } 
                       
       
                       ]
                     })
                     
                     .then(checkfund => { 

                       if(checkfund.length>0){


                         Fund.findOneAndUpdate({
                           $and: [
                   
                             { _id: { $eq: requestId } }
                            
                   
                           ]
                         },
                         
                         { $set: { status:checkfund[0].status="approved" }    }, { new: true }, (err, doc) => {
                           
                           if(err){
                             res.status(400).json("WITHDRAW ERROR"); // CATCH THE ERROR

                           }else{
                             res.status(200).json("WITHDRAW STATUS UPDATED"); // CATCH THE ERROR

                           }

                         }

                         
                         )



                        }







                     })
                  



                
                     




                   }
                 });
               }
             })




             }
         

                ///////////////////////////////////////////////////////////////////


             else if (type == "FIXED INVESTMENT") {

               User.find({
                 $and: [
 
                   { email: { $eq: from } },
                 
 
                 ]
               })

               .then(checkuser => {

                 if(checkuser.length>0){
 
                   User.findOneAndUpdate({
                   $and: [
           
                     { email: { $eq: from } }
                    
           
                   ]
                 },
                
                 { $set: { fixedInvestment:checkuser[0].fixedInvestment - amount }    }, { new: true }, (err, doc) => {

                   if (err) {
                   
                     res.status(400).json("WITHDRAW ERROR"); // CATCH THE ERROR

                   }else{

                     Fund.find({
                       $and: [
       
                         {_id: { $eq: requestId } } 
                       
       
                       ]
                     })
                     
                     .then(checkfund => { 

                       if(checkfund.length>0){


                         Fund.findOneAndUpdate({
                           $and: [
                   
                             { _id: { $eq: requestId } }
                            
                   
                           ]
                         },
                         
                         { $set: { status:checkfund[0].status="approved" }    }, { new: true }, (err, doc) => {
                           
                           if(err){
                             res.status(400).json("WITHDRAW ERROR"); // CATCH THE ERROR

                           }else{
                             res.status(200).json("WITHDRAW STATUS UPDATED"); // CATCH THE ERROR

                           }

                         }

                         
                         )



                        }







                     })
                  



                
                     




                   }
                 });
               }
             })
       
           }


         }
           









            ///////////////////////////////////////////////////////////////////





           else if (manage == "cancelled") {

               Fund.find({
                 $and: [
 
                   {_id: { $eq: requestId } } 
                 
 
                 ]
               })
               
               .then(checkfund => { 

                 if(checkfund.length>0){


                   Fund.findOneAndUpdate({
                     $and: [
             
                       { _id: { $eq: requestId } }
                      
             
                     ]
                   },
                   
                   { $set: { status:checkfund[0].status="cancelled" }    }, { new: true }, (err, doc) => {
                     
                     if(err){
                       res.status(400).json("WITHDRAW ERROR"); // CATCH THE ERROR

                     }else{
                       res.status(200).json("Request WITHDRAW Cancelled"); // CATCH THE ERROR
                     }

                   }

                   
                   )


                  }


               })
            



           



            
           }

            





















          }



        }






      })
      .catch((err) => res.status(400).json("SERVER ERROR: " + err)); // CATCH THE ERROR
  } else {
    res.status(400).json("You already Manage the request "); // CATCH THE ERROR
  }
};

module.exports = ManageRequests;

