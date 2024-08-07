const express = require('express');
const router = express.Router();


const AttendanceRoute = require('../Routes/AttendanceRoute')
const RegisterRoute = require('../Routes/RegisterRoute')
const ProfileRoute = require('../Routes/ProfileRoute')
const AdminRoute = require('../Routes/AdminRoutes')
const EventRoute = require('../Routes/EventRoute')

router.use('/Attendance', AttendanceRoute)
router.use('/Auth', RegisterRoute)
router.use('/Profile', ProfileRoute)
router.use('/Admin', AdminRoute)
router.use('/Event', EventRoute)

module.exports = router;