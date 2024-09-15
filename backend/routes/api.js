// /backend/routes/api.js
// api routes

const tasksController = require('../controllers/tasks');

const router = require('express').Router();

router.get('/tasks', tasksController.getTasks);
router.post('/tasks', tasksController.createTask);
router.delete('/tasks/:id', tasksController.checkTask);

module.exports = router;