const express = require('express');
const router = express.Router();
const { markAttendanceLoggedIn, getAttendanceReport } = require('../Controller/AttendanceController')

// Mark Attendance
router.post('/Mark/:id', markAttendanceLoggedIn);
router.get('/reports/:department/:date', getAttendanceReport);

module.exports = router;