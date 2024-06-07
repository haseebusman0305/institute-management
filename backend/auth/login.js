//login page 
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const router = express.Router();


router.post('/', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
        return res.status(401).json({ error: 'Password is incorrect' });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.json({ token });
}   
);
router.get("/", function (req, res) {
    res.send("sign in page ");
  });

module.exports = router;
