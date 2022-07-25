// Fawez TEKA 
//     https://www.linkedin.com/in/fawez-teka/
//     https://github.com/TekaFawez
//    Copyright © Fawez TEKA . All rights reserved.


const express = require('express');
const morgan = require('morgan'); //log http requiset
require("dotenv").config();
const mongoose = require('mongoose');

const authJwt = require('./helpers/jwt')
const errorHandler = require('./helpers/error-handelr')

const app = express();


const cors = require('cors');
//hedha lazem taamlou bech maytblokech cors !!!!!
app.use(cors());
app.options('*', cors());



require('dotenv/config')
const api = process.env.API_URL

const router = require('./routs/apiroutes')
    //middeleware

app.use(express.json()); //replace body-parser

app.use(morgan('tiny')); //vue in the terminal http request from front end

app.use(authJwt());
app.use(errorHandler);




app.use(`${api}`, router)
















mongoose.connect("mongodb://localhost:27017/GestionEvents", { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log('connected to db!'))

app.listen(2000, () => {

    console.log("the server is running http://localhost:2000")
})