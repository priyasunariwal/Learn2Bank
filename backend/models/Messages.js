const mongoose = require('mongoose');

const { Schema } = mongoose;
const Messagee = new mongoose.Schema({
    PeopleUser:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'PeopleUsers'
    },
    username: {
        type: String,
        required: true

    },
    text: {
        type: String,
        required: true,
       
    },
    date: {
        type: Date,
        default: Date.now
    }
    
    
  });
  
  const Message = mongoose.model('Message',Messagee);

  module.exports = Message;