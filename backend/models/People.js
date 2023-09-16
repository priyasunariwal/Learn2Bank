const mongoose = require('mongoose');

const { Schema } = mongoose;
const PUsers = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true

    },
    email: {
        type: String,
        required: true,
       
    },
    phone: {
        type: Number,
        
    },
    dob: {
        type: Date,
        
    },
    gender:{
        type: String,
        
    },
     password:{
        type: String,
        required: true
    },
    pin: {
        type: Number,
    },
    accno:{
        type: Number,
        
    },
    acctype: {
        type: String,
    
    }, balance: {
        type: Number,
    
    }
  });
  
  const PeopleUsers = mongoose.model('PeopleUsers',PUsers);

  module.exports = PeopleUsers;

