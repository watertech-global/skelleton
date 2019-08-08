//Watertech Routes
//Users Routes
//Defining app CRUD
const express = require('express');
const router = express.Router();

//Invoke a User model instance
const User = require('../models/User');

//GET

//Get all users
router.get('/', (req, res)=>{
    try {
      const users = User.find({});
      res.send({ users });
    } catch (error) {
      res.send({Message : error});
    }
});

//Get a user
router.get('/:id', (req, res)=>{
  try {
    //getting the param here
    const user = User.findById(req.params.id);
    res.send({ user });
  } catch (error) {
    res.send({Message : 'Desolé! Utilisateur non trouvé!'});
  }
});

//POST
router.post('/', (req, res)=>{
  //Create a new user
 const newUser = await User.create({
    username : req.body.username,
    password : req.body.password,
    roleCode : req.body.roleCode,
    location.idCountry : 
  }),

});
