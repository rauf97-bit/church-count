const express = require('express');
const router = express.Router();
const { CreateDepartment, CreateUnit, GetDepartment, GetUnit, GetAllDepartments, GetAllUnits } = require('../Controller/AdminController')

// Mark Attendance
router.post('/create/department', CreateDepartment);
router.post('/create/unit', CreateUnit);
router.get('/Get/department/:Id', GetDepartment);
router.get('/Get/department', GetAllDepartments);
router.get('/Get/unit/:Id', GetUnit);
router.get('/Get/unit', GetAllUnits);

module.exports = router;