const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const connectDB = require('./db');
const protectedRoute = require('./routes/protectedRoute');
const Signup = require('./auth/signup');
const Login = require('./auth/login');


 const app = express();
dotenv.config();    

connectDB();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/protected', protectedRoute);
app.use('/signup', Signup);
app.use('/login', Login);

app.get('/', (req, res) => {
    res.send('Hello from Express!');
    }
);

app.listen(process.env.PORT, () =>
    console.log(`Server running on http://localhost:${process.env.PORT || 5000}`)
    );

