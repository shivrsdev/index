// /backend/app.js
// app

const express = require('express');
require('dotenv').config(); // configure .env file
const { connectToDB } = require('./config/database');
const routes = require('./routes');

express() // create the app
    .use(express.json()) // include json body parser
    .use(routes)
    .listen(process.env.PORT, () => {
        connectToDB(); // connect to the database
        console.log(`Listening at port ${process.env.PORT}`);
    });