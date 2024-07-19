const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workerSchema = new Schema({
    FirstName: {
        type: String,
        required: true
    },
    LastName: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    PhoneNumber: {
        type: String,
        required: true
    },
    DOB: {
        type: String,
        required: false
    },
    Unit:
    {
        type: Schema.Types.ObjectId,
        required: false,
        ref:'Unit'
    },
    Address:
    {
        type: String,
        required: false
    }
}, {timestamps: true });


module.exports = mongoose.model('Worker', workerSchema);