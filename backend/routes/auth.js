const express = require('express');
const User = require('../models/User');
const router = express.Router()



//create a user using: POST "/api/auth". doesnt require auth
router.get('/',(req,res)=>{
   console.log(req.body);
   const user = User(req.body);
   user.save()
   res.send("hello");
})
module.exports = router