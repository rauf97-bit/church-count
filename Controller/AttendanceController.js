const Attendance = require('../Model/Attendance');
const Worker = require('../Model/Worker');
const dotenv = require('dotenv');


const markAttendanceLoggedIn = async(req, res) => 
{
    try {
      const { id } = req.params;
  
      const WorkerData = await Worker.findById(id).exec();
      if(!WorkerData) {
          res.status(404).json({message : "No user found"})
      }
  
      const currentDate = new Date();
      const currentDay = currentDate.getDay();
  
      // Check if Sunday only is enabled in the settings
      const sundayOnly = process.env.SUNDAY_ONLY === 'True';
  
      if (sundayOnly && currentDay !== 0) {
          res.status(403).json({message : "Attendance can only be marked on Sundays"})
      } else {
          // Check if attendance has already been marked for the current day
          const startOfDay = new Date(currentDate);
          startOfDay.setHours(0, 0, 0, 0);
  
          const endOfDay = new Date(currentDate);
          endOfDay.setHours(23, 59, 59, 999);
  
          const alreadyMarked = await Attendance.findOne({
              Worker: id,
              Date: {
                  $gte: startOfDay,
                  $lt: endOfDay
              }
          });
  
          if (alreadyMarked) {
              res.status(403).json({message : "Attendance has already been marked for today"})
          } else {
              const attendanceRecord = new Attendance({
                  Date : currentDate,
                  Name : `${WorkerData.FirstName} ${WorkerData.LastName}`,
                  Department : WorkerData.Department,
                  Status : 'Present',
                  Worker: WorkerData._id
              });
  
              await attendanceRecord.save();
  
              // Render the date and time in the local time zone
              const localDate = attendanceRecord.Date.toLocaleString();
  
              res.status(200).json({message:"Successful", attendanceRecord: {...attendanceRecord.toObject(), Date: localDate}})
          }
      }
    } catch(error) {
      console.log(`An error occurred: ${error}`)
      res.status(500).json({message:"An error occurred"})
    }
}

const getAttendanceReportByDept = async(req, res) => {
    try {
      const { department, date } = req.params;
      const { page = 1, limit = 10 } = req.query;
       console.log(req.query);
      // Parse the date string into a Date object
      const reportDate = new Date(date);
  
      // Set the start and end of the day for the report date, taking into account the time zone offset
      const timezoneOffset = reportDate.getTimezoneOffset();
      reportDate.setHours(0, -timezoneOffset, 0, 0);
      const endOfDay = new Date(reportDate);
      endOfDay.setHours(23, 59 - timezoneOffset, 59, 999);
      console.log(reportDate);
      console.log(endOfDay);
     //apply pagination
      const attendanceRecords = await Attendance.find({
        Department: department,
        Date: {
          $gte: reportDate,
          $lt: endOfDay
        }
      })
      .skip((page - 1) * limit)
      .limit(limit);
      if(!attendanceRecords){
        return res.status(200).json({message : "No record found"});
      }
      // Get the total number of attendance records for the specified department and date
      const totalRecords = await Attendance.countDocuments({
        Department: department,
        Date: {
          $gte: reportDate,
          $lt: endOfDay
        }
      });
  
      // Send the attendance records and total number of records as a JSON response
      res.status(200).json({message:"Successful", attendanceRecords, totalRecords});
    } catch(error) {
      console.log(`An error occurred: ${error}`)
      res.status(500).json({message:"An error occurred"})
    }
  }
  

  module.exports = { markAttendanceLoggedIn, getAttendanceReportByDept }