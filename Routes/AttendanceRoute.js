const express = require('express');
const router = express.Router();
const { markAttendanceLoggedIn } = require('../Controller/AttendanceController')

// Mark Attendance
router.post('/Mark/:id', markAttendanceLoggedIn);

module.exports = router;