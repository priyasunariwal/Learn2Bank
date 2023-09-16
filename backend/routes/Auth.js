const express = require('express')
//The express.Router() function is used to create a new router object. This function is used when you want to create a new router object in your program to handle requests. 
const router = express.Router();

const JWT_SECRET = 'Coolcool';
//jwt is used for safe client server communication
var jwt = require('jsonwebtoken');

//first install  npm install bcrypt
const bcrypt = require('bcryptjs');


const PeopleUsers = require('../models/People');

// This is to create a bank customer user account
router.post('/createPUser', async (req, res) => {

    let success = false;
    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password, salt);

    try {
        let checkUserName = await PeopleUsers.findOne({ username: req.body.username });
        if (checkUserName) {
            return res.status(400).json({ error: "Sorry user already exists" })

        }

        let pusers = await PeopleUsers.create({
            name: req.body.name,
            email: req.body.email,
            username: req.body.username,
            phone: req.body.phone,
            dob: req.body.dob,
            gender: req.body.gender,
            password: secPass,
            pin: req.body.pin,
            accno: req.body.accno,
            acctype: req.body.acctype,
            balance: req.body.balance
        })

        const data = {
            pusers: {
                id: pusers.id
            }
        }


        const authtoken = jwt.sign(data, JWT_SECRET); //yeh ek token banayega with format HEADER:ALGORITHM & TOKEN TYPE,PAYLOAD:DATA,VERIFY SIGNATURE see on website if not understood
        //   console.log(authtoken); //token dekhna hai toh karlo yeh
        //   //abh yeh ko nhi bhejhke authkone bhejte hai as response

        success = true;
        res.status(200).json({ success, authtoken });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("some error occured");
    }

})

// this user login is for account holder login...
router.post('/loginPUser', async (req, res) => {

    const { username, password } = req.body;
    let success = false;
    try {
        let pusers = await PeopleUsers.findOne({ username });
        if (!pusers) {
            return res.status(400).json({ error: "please try with correct username" });
        }
        const passwordCompare = await bcrypt.compare(password, pusers.password)
        if (!passwordCompare) {
            return res.status(400).json({ error: "please try with correct password" });
        }
        const data = {
            pusers: {
                id: pusers.id
            }
        }
        const authtoken = jwt.sign(data, JWT_SECRET);
        success = true;
        res.status(200).json({ success, authtoken });
    } catch (error) {
        res.status(500).send("some error occured");
    }

})
// this user login is for advissor login...
router.post('/loginAdvisor', async (req, res) => {

    const { username, password } = req.body;
    let success = false;
    try {
        let pusers = await PeopleUsers.findOne({ username });
        if (!pusers) {
            return res.status(400).json({ error: "please try with correct username" });
        }
        const passwordCompare = await bcrypt.compare(password, pusers.password)
        if (!passwordCompare) {
            return res.status(400).json({ error: "please try with correct password" });
        }
        const data = {
            pusers: {
                id: pusers.id
            }
        }
        const authtoken = jwt.sign(data, JWT_SECRET);
        success = true;
        res.status(200).json({ success, authtoken });
    } catch (error) {
        res.status(500).send("some error occured");
    }

})


module.exports = router;