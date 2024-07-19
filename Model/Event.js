const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    Name: {
        type: String,
        required: true
    },
    Description: {
        type: String,
        required: true
    },
    
    Date: {
        type: String,
        required: true
    },
    Frequency: {
        type: String,
        required: true
    }
}, {timestamps: true });

module.exports = mongoose.model('Event', eventSchema);