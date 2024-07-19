const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const offeringSchema = new Schema({
    Branch: {
        type: Schema.Types.ObjectId,
        ref:'Branch',
        required: true
    },
    Unit: {
        type: Schema.Types.ObjectId,
        ref: 'Unit',
        required: true
    },
    Service: {
        type: String,
        required: false
    },
    Amount: {
        type: String,
        required: true
    },
    Date: {
        type: String,
        required: true
    },
    Type: {
        type: String,
        required: true
    },
    Event: {
        type: Schema.Types.ObjectId,
        ref: 'Event',
        required: true
    },
 }, {timestamps: true });


module.exports = mongoose.model('Offering', offeringSchema);