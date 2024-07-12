const express = require('express');
const router = express.Router();
const { RegisterWorker } = require('../Controller/RegisterController')

// Register Worker
router.post('/Register/Worker', RegisterWorker);

module.exports = router;