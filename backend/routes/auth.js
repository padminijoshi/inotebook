const express = require('express');
const User = require('../models/User');
const router = express.Router()
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

const JWT_SECRET = 'p@dminijoshi';

//create a user using: POST "/api/auth/createuser". no login required
router.post('/createuser',[body('name','enter a valid name').isLength({min:5}),
body('email','enter a valid email').isEmail(),
body('password','password must be atleast 5 characters').isLength({min:5})], async(req,res)=>{
  //if there are errors, return Bad request and the errors
   const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({erros:errors.array()});
  }
  //check whether the user with this email exists already
  try{
  let user =  await User.findOne({email:req.body.email});
  if(user){
    return res.status(400).json({error:"sorry a user with this email already exists"})
  }
  //create a new user
  const salt = await bcrypt.genSalt(10);
  secPass = await bcrypt.hash(req.body.password,salt);
   user = await User.create({
   name:req.body.name,
   email:req.body.email,
   password:secPass,
  });
  const data = {
    user:{
      id: user.id
    }
  }
  const authtoken = jwt.sign(data,JWT_SECRET);

  // res.json(user)
  res.json({authtoken})
  
  }catch(error){
    console.error(error.message);
    res.status(500).send("Some Error occured");
  }
})
module.exports = router