// /backend/services/tasks.js
// tasks service

const Task = require('../models/task');

exports.getTasks = async () => {
    try {
        const tasks = await Task.find();
        return tasks;
    } catch(error) {
        throw new Error(error);
    }
}

exports.createTask = async (content) => {
    try {
        const newTask = new Task({
            content: content
        });

        await newTask.save();

        return newTask;
    } catch(error) {
        throw new Error(error);
    }
}

exports.checkTask = async (id) => {
    try {
        await Task.findByIdAndDelete(id);
    } catch(error) {
        throw new Error(error);
    }
}