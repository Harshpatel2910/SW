const express = require('express');


const cors = require('cors');
const blogsRoutes = require('./routes/app')

const app = express();
const router = express.Router();


require('dotenv').config();


app.use(express.json());


app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
}))


app.use('/api',blogsRoutes)


app.listen(4000);

console.log("Server is running on port 4000");
module.exports = app;



