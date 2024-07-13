const express = require('express');
const router = express.Router();
const { GetWorkerByPhoneNumber } = require('../Controller/ProfileController')

// Mark Attendance
router.get('/:PhoneNumber', GetWorkerByPhoneNumber);

module.exports = router;