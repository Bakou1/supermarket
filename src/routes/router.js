const express = require('express');
 const router = express.Router();
 
 const { createUser ,getAllUsers, getOneUser,updateOne,deleteOne} = require('../controller/user');
const { createSale, } = require('../controller/sale');
 
 // User route
 router.post('/user', createUser);
 router.get('/user', getAllUsers);
 router.get('/user/:id',getOneUser);
 router.put('/user/:id',updateOne);
 router.delete('/user/:id',deleteOne);

 // Sale route
 router.post('/sale', createSale);
 
 
 module.exports = router;