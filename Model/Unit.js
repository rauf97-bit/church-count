const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const unitSchema = new Schema({
    Name: {
        type: String,
        required: true
    },
    UnitCode: {
        type: String,
        required: true
    },
    Description: {
        type: String,
        required: true
    },
    Department: {
        type: Schema.Types.ObjectId, // FK representing link to dept table
        ref: 'Department',
        required: true
    },
}, {timestamps: true });
   



module.exports = mongoose.model('Unit', unitSchema);