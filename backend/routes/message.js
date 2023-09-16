const express = require('express');

const router = express.Router();

const fetchPUsers = require('../middleware/fetchPUsers');
const Message = require('../models/Messages'); // set mongo model

router.post('/uploadmessage',fetchPUsers, async (req, res) => {

    try {

        const { username, text, date } = req.body;
        
        const nmessage = new Message({
            username, text, date, PeopleUser: req.pusers.id
        });
        const savedmessage = await nmessage.save();

        res.json(savedmessage);
    } catch (error) {

        console.error(error.message);
        res.status(500).send("internal server erorr occured");

    }

});

router.get('/getyourmes',fetchPUsers,async(req,res)=>{

    const nmessage = await Message.find({PeopleUser: req.pusers.id});
    res.json(nmessage);

}); 

router.get('/getallmes',async(req,res)=>{
    const nmessage = await Message.find();
    res.json(nmessage);

});

module.exports = router;