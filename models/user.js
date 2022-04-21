const mongoose= require("mongoose");

const UserSchema= new mongoose.Schema({
    frist_name:{
        type:String,
        required:true
    },
    last_name:{
        type:String,
        required:true
    },
    company_name:{
        type:String,
      
    },
    mobile_number:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
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
const User= mongoose.model("user", UserSchema);
module.exports=User;