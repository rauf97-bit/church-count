const express = require('express');
const router = express.Router();
const { CreateDepartment, CreateUnit, GetDepartment, GetUnit } = require('../Controller/AdminController')

// Mark Attendance
router.post('/create/department', CreateDepartment);
router.post('/create/unit', CreateUnit);
router.post('/Get/department/:Id', GetDepartment);
router.post('/Get/unit/:Id', GetUnit);


module.exports = router;