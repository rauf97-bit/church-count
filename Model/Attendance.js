const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const attendanceSchema = new Schema({
    Date: {
        type: Date,
        required: true
    },
    Name: {
        type: String,
        required: true // concatenate first name and last name from worker model
    },
    Department: {
        type: String,
        required: true
    },
    Status: {
        type: String,
        required: false,
        enum: ['Present', 'Absent']
    },
    AbsenceReason: {
        type: String,
        required: false
    },
    Worker: {
        type: Schema.Types.ObjectId,
        ref: 'Worker',
        required: true
    },
    Event: {
        type: Schema.Types.ObjectId,
        ref: 'Event',
        required: false
    },

   
   
}, {timestamps: true });


module.exports = mongoose.model('Attendance', attendanceSchema);