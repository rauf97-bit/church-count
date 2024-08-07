const express = require('express');
const router = express.Router();
const { CreateEvent } = require('../Controller/EventController')

// Mark Attendance
router.post('/Create', CreateEvent);

module.exports = router;