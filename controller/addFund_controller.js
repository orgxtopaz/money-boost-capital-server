
let Fund = require("../models/fund.model");

const AddFund =async (req, res) => {
    

 
const email = req.body.email;
const type = req.body.type;
const amount = req.body.amount;
const date = req.body.date;
const action = req.body.action;
const address = req.body.address;
const cryptocurrency = req.body.cryptocurrency;
const status = "pending";

    const newFund = new Fund({
        email,
        date,
        type,
        address,
        cryptocurrency,
        amount,
        action,
        status
      
      }); // Instantiate the Fund in Fund.model`

      newFund.save()

      .then((user) => res.json({ message :"Fund in process"})) // IF TRUE CHECK
      .catch((err) => res.status(400).json("Errors: " + err)); // CATCH THE ERROR

           

         
    
}  





module.exports = AddFund;
