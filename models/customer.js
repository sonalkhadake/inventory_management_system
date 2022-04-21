const mongoose= require("mongoose");
const { required } = require("nodemon/lib/config");

const CustomerSchema= new mongoose.Schema({
    customer_name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },

    phone:{
        type:Number
    },

    details:{
        type:String,
      
    },
    address:{
        type:String,
        required:true
    },
 
    createdAt:{
        type:Date,
        default:Date.now
    },
    updatedAt:{
        type:Date,
        default:Date.now
    }
})
const Customer= mongoose.model("customer", UserSchema);
module.exports=Customer;