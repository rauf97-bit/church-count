const express = require('express');
const router = express.Router();
const { markAttendanceLoggedIn, getAttendanceReportByDept } = require('../Controller/AttendanceController')

// Mark Attendance
router.post('/Mark/:id', markAttendanceLoggedIn);
router.get('/reports/:department/:date', getAttendanceReportByDept);

module.exports = router;