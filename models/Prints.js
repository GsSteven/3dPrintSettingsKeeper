const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Schema for prints

const PrintSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    printImage: {
        type: String,
        required: true
    },
    settings: {
        type: Array
    },
    machineUsed: {
        type: String,
        required: true
    },
    printTime: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Print = mongoose.model('prints', PrintSchema);
module.exports = Print;