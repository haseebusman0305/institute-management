// signup.js
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/userModel');    

// Signup route
router.post('/', async (req, res) => {
    console.log('Received sign-up request');
    console.log('Request body:', req.body);

    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
        console.log('User already exists');
        return res.status(400).json({ error: 'User already exists' });
    }

    const hash = await bcrypt.hash(password, 10);
    const newUser = new User({ email, password: hash });
    await newUser.save();
    console.log('User created');
    res.json({ message: 'User created' });
});
router.get("/", function (req, res) {
    res.send("Wiki home page");
  });
module.exports = router;