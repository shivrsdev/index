// /backend/models/task.js
// task model

const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Task', taskSchema);