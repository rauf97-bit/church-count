const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const departmentSchema = new Schema({
    Name: {
        type: String,
        required: true
    },
    Description: {
        type: String,
        required: true
    },
    DepartmentCode: {
        type: String,
        required: true
    },
    
    
   
}, {timestamps: true });


module.exports = mongoose.model('Department', departmentSchema);