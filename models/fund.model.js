//schema represents the structure of a particular document

const mongoose =require('mongoose');
const Schema = mongoose.Schema;


const fundSchema = new Schema({
    email:{
        type:String,
        required:true,
        trim:true  // removing the first space in value input 

    },
    type:{
        type:String,
        required:true,
        trim:true  // removing the first space in value input 

    },
    cryptocurrency:{
        type:String,
        required:true,
        trim:true  // removing the first space in value input 

    },
    address:{
        type:String,
        required:true,
        trim:true  // removing the first space in value input 

    },
    amount:{
        type:Number,
        required:true,
        trim:true  // removing the first space in value input 

    },
    date:{
        type:String,
        required:true,
        trim:true  // removing the first space in value input 

    },
   
    action:{
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

      
   


const Fund= mongoose.model('fund',fundSchema);

module.exports = Fund;