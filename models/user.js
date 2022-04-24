const mongoose= require("mongoose");
const { required } = require("nodemon/lib/config");
// const AddressSchema = mongoose.Schema({
  
//         // user: { 
//         //     type: Schema.Types.ObjectId, 
//         //     ref: "User" 
//         // },
//         firstName: { 
//             type: String,
//              required: true 
//             },
//         lastName: { 
//             type: String, 
//             required: true 
//         },
//         address1: { 
//             type: String,
//              required: true
//              },
//         address2: { 
//             type: String 
//         },
//         country: {
//              type: String,
//               required: true 
//             },
//         state: {
//              type: String,
//               required: true 
//             },
//         city: {
//              type: String,
//               required: true 
//             },
//         street: {
//              type: String,
//               required: true 
//             },
//         building: { 
//             type: String
//          },
//         floor: {
//              type: String
//              },
//         apartment: {
//              type: String
//              },
//         phoneNumber: {
//              type: Number,
//               required: true 
//             },
//         postalCode: { 
//             type: Number, 
//             required: true
//          },
//         isPrimary: { type: Boolean },
    
//   })
const UserSchema= new mongoose.Schema({
    first_name:{
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
    isAdmin: {
         type: Boolean ,
         required:false
        },

        isseller: {
            type: Boolean ,
            required:false
           },

           isbuyer: {
            type: Boolean ,
            required:false
           },
           
           address:{
               type:Array
               
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