//schema represents the structure of a particular document

const mongoose =require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new Schema({
    firstname:{
        type:String,
        required:true,
        trim:true  // removing the first space in value input 

    },
    lastname:{
        type:String,
        required:true,
        trim:true  // removing the first space in value input 

    },
    password:{
        type:String,
        required:true,
        trim:true  // removing the first space in value input 

    },
    phone:{
        type:String,
        required:true,
        trim:true  // removing the first space in value input 

    },
    address:{
        type:String,
        required:true,
        trim:true  // removing the first space in value input 

    },
    city:{
        type:String,
        required:true,
        trim:true  // removing the first space in value input 

    },
    state:{
        type:String,
        required:true,
        trim:true  // removing the first space in value input 

    },
    zip:{
        type:String,
        required:true,
        trim:true  // removing the first space in value input 

    },
    cardName:{
        type:String,
        required:true,
        trim:true  // removing the first space in value input 

    },
    creditCard:{
        type:String,
        required:true,
        trim:true  // removing the first space in value input 

    },
    expMonth:{
        type:String,
        required:true,
        trim:true  // removing the first space in value input 

    },

    expYear:{
        type:String,
        required:true,
        trim:true  // removing the first space in value input 

    },
    cvv:{
        type:String,
        required:true,
        trim:true  // removing the first space in value input 

    },
    image:{
        type:String,
        required:true,
        trim:true  // removing the first space in value input 

    },



    email:{

        type:String,
        required:true,
        trim:true , // removing the first space in value input   
        unique:true //

    },

    verified:{

        type:String,
        required:true,
        trim:true  // removing the first space in value input     

    },
    code:{

        type:String,
        required:true,
        trim:true  // removing the first space in value input     

    },
    position:{

        type:String,
        required:true,
        trim:true  // removing the first space in value input     

    },
    fixedInvestment:{

        type:Number,
        required:true,
        trim:true  // removing the first space in value input     

    },
    initialInvestment:{

        type:Number,
        required:true,
        trim:true  // removing the first space in value input     

    },

    regularInvestment:{
        type:Number,
        required:true,
        trim:true  // removing the first space in value input     

    },
    date:{

        type:String,
        required:true,
        trim:true  // removing the first space in value input     

    },
    status:{

        type:String,
        required:true,
        trim:true  // removing the first space in value input     

    },




},{timestamps:true})// date  and time of the data being passed

      
   


const User= mongoose.model('user',userSchema);

module.exports = User;