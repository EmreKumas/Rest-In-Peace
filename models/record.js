const mongoose = require('mongoose');

const RecordSchema = new mongoose.Schema({
    key: String,
    value: String,
    createdAt: Date,
    counts: [{
        id: Number,
        value: Number
    }]
});

const Record = mongoose.model('Record', RecordSchema);

module.exports = Record;