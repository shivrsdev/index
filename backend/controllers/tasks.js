// /backend/controllers/tasks.js
// tasks controller (it is tasks, not task because we are in the /api/tasks path)

const tasksService = require('../services/tasks');

exports.getTasks = async (_request, response) => {
    try {
        const tasks = await tasksService.getTasks();
        response.status(200).json({ tasks: tasks });
    } catch(error) {
        response.status(500).json({ error: error });
    }
}

exports.createTask = async (request, response) => {
    try {
        if (!request.body.content) {
            response.status(400).json({ error: 'Bad request!' }); // bad request
            return;
        }

        const task = await tasksService.createTask(request.body.content);
        response.status(200).json({ task: task });
    } catch(error) {
        response.status(500).json({ error: error });
    }
}

exports.checkTask = async (request, response) => {
    try {
        if (!request.params.id) {
            response.status(400).json({ error: 'Bad request!' }); // bad request
            return;
        }

        await tasksService.checkTask(request.params.id);
        response.status(200).json({});
    } catch(error) {
        response.status(500).json({ error: error });
    }
}