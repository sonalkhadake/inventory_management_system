const express= require("express");
const auth_user = require("../middlewares/Auth_user");

const router = express.Router();
const Customer= require("../models/customer")
const { body, validationResult } = require('express-validator');

router.get("/customer", (req, res) => {
    Customer.find().then((data) => {
      res.json( {message:"all customer data", data:data  });
    });
  });

  ///add customer
  router.post("/addcustomer", (req, res) => {
    const body = req.body;
  
    const customer = new Customer({
      customer_name: body.name,
      email: body.email,
      phone: body.phone,
      details:body.details
    
      
    });
  customer.save().then(() => {
   console.log(req.body);
    res.json({message:"customer added successfully",data:data})
    })
      
  });





module.exports= router