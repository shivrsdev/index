// /backend/config/database.js
// connectToDB function

const mongoose = require('mongoose');

const connectToDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to database');
    } catch(error) {
        throw new Error(error);
    }
}

module.exports = { connectToDB };