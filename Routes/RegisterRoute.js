const express = require('express');
const router = express.Router();
const { RegisterWorker, handleWorkerLogin } = require('../Controller/RegisterController')


// Register Worker
router.post('/Register/Worker', RegisterWorker);
router.post('/Login/Worker', handleWorkerLogin);


module.exports = router;