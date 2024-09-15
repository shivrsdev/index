// /backend/routes/index.js
// all the routes

const router = require('express').Router();
const api = require('./api');

router.use('/api', api);

module.exports = router;