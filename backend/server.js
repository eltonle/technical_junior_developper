const express = require('express');
const connectDB = require('./config/db');
const app = express();

const dotenv = require('dotenv').config();
//   connection a la base de donne

connectDB()
const port = 5500
const jwt = require('jsonwebtoken');


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/book', require('./routes/post.routes'))



app.listen(port, ()=>{console.log('server connect');})