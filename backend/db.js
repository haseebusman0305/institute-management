const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB connection SUCCESS');
    } catch (error) {
        console.error('MongoDB connection FAIL');
        process.exit(1);
    }
};

module.exports = connectDB;