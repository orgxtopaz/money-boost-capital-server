



const router = require('express').Router();

const jwt = require('jsonwebtoken'); ///FOR THE SECURITY / AUTHORIZATIONS


//MAKING FUNCTIONS TO VERIFY IF USER IS AUTHORIZED WITH THE VALID TOKEN
///SECURITY SO THAT DATA COULD NOT BE DISPLAY IF USER IS NOT LOG IN AND AUTHORIZE
const verifyJWT = (req, res, next) => {
    const token = req.body.headers["x-access-token"]
  
    if (!token) {
      res.send("YOU ARE NOT AUTHORIZED MADAPAKER!!")
    } else {
      jwt.verify(token, "jwtSecret", (err, decoded) => {
        if (err) {
          res.json({ auth: false, message: "You are not Authenticated!" })
        } else {
          req.userId = decoded.id;
          next();
        }
      })
    }
  
  }
  
///////////////////
const Forgot = require('../controller/forgotPassword_controller');
const viewSpecificOfficial = require('../controller/viewSpecificOfficial_controller');



  router.post('/forgot/', Forgot); //OFFICIALS LOG IN  
  router.post('/viewOfficial/:id',verifyJWT, viewSpecificOfficial); ///VIEW SPECIFIC OFFICIAL 


////////////////////////////////////////////////////////


  const verifyUser = require('../controller/verifyLogin_controller');
  const Login = require('../controller/login_controller');
  const addUser = require('../controller/addUser_controller');
  const addFund = require('../controller/addFund_controller');
  const getFund = require('../controller/getFund_controller');
  const getAllFunds = require('../controller/getAllFund_controller');
  const getAllUsers = require('../controller/getAllUsers_controller');
  const updateUser = require('../controller/updateUser_controller');




  const manageRequests = require('../controller/manageRequests_controller');

  router.put('/verify/', verifyUser); 
  router.post('/login/', Login); 
  router.post('/register/', addUser); 
  router.post('/sendFund/', addFund); 
  router.post('/getFunds/', getFund); 
  router.post('/getAllFund/', getAllFunds); 
  router.post('/getAllUsers/', getAllUsers); 
  router.post('/manageRequests/', manageRequests); 
  router.put('/updateUser/', updateUser); 




module.exports = router;