const { body, validationResult } = require("express-validator");
exports.validateAdd = [
    // validate our customer input inputs
    body("customer_name")
      .isLength({
        min: 2
      })
      .withMessage("must be at least 2 charachers"),
      
    body("email").isEmail()
      .withMessage("please enter valid email address"),

      body("phone")
      .isLength({
        min: 10
      })
      .withMessage("must be at least 10 digits"),
      
    (req, res, next) => {
      const errors = validationResult(req);  

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
      } else {
        next();
      }
    }
  ];

  ///for updating validation
  exports.validateUpdate = [
    // validate our customer input inputs
    body("customer_name")
      .isLength({
        min: 2
      })
      .withMessage("must be at least 2 charachers"),
      
    body("email").isEmail()
      .withMessage("please enter valid email address"),

      body("phone")
      .isLength({
        min: 10
      })
      .withMessage("must be at least 10 digits"),
      
    (req, res, next) => {
      const errors = validationResult(req);  
      
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
      } else {
        next();
      }
    }
  ];