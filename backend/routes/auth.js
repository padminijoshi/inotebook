const express = require('express');
const User = require('../models/User');
const router = express.Router()
const { body, validationResult } = require('express-validator');


//create a user using: POST "/api/auth". doesnt require auth
router.post('/',[body('name','enter a valid name').isLength({min:5}),
body('email','enter a valid email').isEmail(),
body('password','password must be atleast 5 characters').isLength({min:5})],(req,res)=>{
   const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({erros:errors.array()});
  }
  User.create({
   name:req.body.name,
   email:req.body.email,
   password:req.body.password,
  }).then(user => res.json(user))
   .catch(err => {console.log(err)
   res.json({error:'Please enter a unique value for email',message:err.message})})
})
module.exports = router