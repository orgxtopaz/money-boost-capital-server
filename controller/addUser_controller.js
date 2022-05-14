
let User = require("../models/user.model");

const AddUser =async (req, res) => {
    

 
const firstname = req.body.firstname;
const lastname = req.body.lastname;
const password = req.body.password;
const phone = req.body.phone;
const email = req.body.email;
const address = req.body.address;
const city = req.body.city;
const state = req.body.state;
const zip = req.body.zip;
const cardName = req.body.cardName;
const creditCard = req.body.creditCard;
const expMonth = req.body.expMonth;
const expYear = req.body.expYear;
const cvv = req.body.cvv;
const image = req.body.image;
const fixedInvestment = 0;
const initialInvestment = 0;
const regularInvestment = 0;
const verified = "false"
const position = "user"
const code = Math.floor(100000 + Math.random() * 900000);
const date = req.body.date
const status = "underReview"

    const newUser = new User({
        firstname,
        lastname,
        password,
        phone,
        email,
        address,
        city,
        state,
        zip,
        cardName,
        creditCard,
        expMonth,
        expYear,
        cvv,
        image,
        fixedInvestment,
        initialInvestment,
        regularInvestment,
        code,
        verified,
        position,
        date,
        status
      }); // Instantiate the User in user.model`
    

      console.log(code)
      newUser.save()
     

      .then((user) => res.json({ user:user })) // IF TRUE CHECK
         .catch((err) => res.status(400).json("Errors: " + err)); // CATCH THE ERROR

           

            // .then((user) => res.status(200).json({ message: "Successfully requested!" })) // IF TRUE CHECK

            const sgMail = require("@sendgrid/mail");

            const API_KEY =
              "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";
          
            sgMail.setApiKey(API_KEY);
          
            const message = {
              to: {
                email: `${email}`,
                name: `${email}`,
              },
              from: {
                email: "nalhubsys@gmail.com",
                name: `MONEY BOOST CAPITAL`,
              },
              templateId: "d-9640c701aaf8414f8b3e5140e0aeca6e",
              dynamicTemplateData: {
                code: `${code}`,
              },
            };
          
            sgMail
              .send(message)
              .then((response) => console.log(` verify email sent ${code}`))
              .catch((error) => console.log(error.message));
          
       
  
    
}  





module.exports = AddUser;
