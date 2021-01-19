const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Schema for prints

const PrintSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    printFile: {
        type: File,
        required: true
    },
    settings: {
        type: Array
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Print = mongoose.model('prints', PrintSchema);
module.exports = Print;