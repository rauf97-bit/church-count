const express = require('express');
const router = express.Router();


const AttendanceRoute = require('../Routes/AttendanceRoute')
const RegisterRoute = require('../Routes/RegisterRoute')
const ProfileRoute = require('../Routes/ProfileRoute')

router.use('/Attendance', AttendanceRoute)
router.use('/Register', RegisterRoute)
router.use('/Profile', ProfileRoute)
module.exports = router;