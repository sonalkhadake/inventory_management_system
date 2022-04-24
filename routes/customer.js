const express= require("express");
const auth_user = require("../middlewares/Auth_user");

const router = express.Router();
const Customer= require("../models/customer")
const validateCustomer = require("../middlewares/customerValidation");


// ROUTE 1: Get All the customer using: GET "http://localhost:5000/api/customer/Customer".
router.get('/Customer',   async (req, res) => {
  try {
      const customer = await Customer.find();
      res.json(address)
  } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
  }
})

// ROUTE 2: Add a new customer using: POST "http://localhost:5000/api/customer/addCustomer". 
router.post('/addCustomer',  async (req, res) => {
  try {
      const customer = new Customer ({
          // user: req.user.id,
          customer_name: req.body.customer_name,
          email: req.body.email,
          phone: req.body.phone,
          
        });
      
      const newCustomer = await customer.save()
      res.json( newCustomer)

  } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
  }
})
   // ROUTE 3: Update an existing product using: PUT "http://localhost:5000/api/product/updateproduct". 
   router.put('/updateAddress/:id',  async (req, res) => {
    const {customer_name, email, phone  } = req.body;
    try {
      
        const newCustomer = {};
        if (customer_name) { newCustomer.customer_name = customer_name };
        if (email) { newCustomer.email = email };
        if (phone) { newCustomer.phone = phone};

       
        let customer = await Customer.findById(req.params.id);
        if (!customer) { return res.status(404).send("Not Found") }
        customer = await Customer.findByIdAndUpdate(req.params.id, { $set: newCustomer  }, { new: true })
        res.json({ customer });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

////////delete the customer 
router.delete('/deletecustomer/:id', async (req, res) => {
  try {
      // Find the customer to be delete and delete it
      const id=req.params.id
      let customer = await Customer.findById(id);
      if (!customer) { return res.status(404).send("Not Found") }

       customer = await Customer.findByIdAndDelete(id)
      res.json({ "Success": "customer has been deleted", data: product });
  } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
  }
})
  




module.exports= router;