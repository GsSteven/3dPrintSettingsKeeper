const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Schema for prints

const PrintSchema = new Schema({
    printSettings: {
        type: Object,
        required: true
    }
});

const Print = mongoose.model('prints', PrintSchema);
module.exports = Print;