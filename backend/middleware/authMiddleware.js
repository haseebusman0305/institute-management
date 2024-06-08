const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const verifyToken = async (req, res, next) => {
  
      const token = req.header('Authorization').replace('Bearer ', '');
    if (!token) {
        return res.status(403).json({ message: 'token missing ' });
      }
      try {
         const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.decoded = decoded;
        next();
      } catch (error) {
    
        console.error('JWT verification error:', error);
        res.status(401).json({ message: 'Invalid token' });
      }
};

module.exports = verifyToken;
