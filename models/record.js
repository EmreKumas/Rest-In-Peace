const mongoose = require('mongoose');

const RecordSchema = new mongoose.Schema({
    key: String,
    value: String,
    createdAt: Date,
    counts: Array
});

const Record = mongoose.model('Record', RecordSchema);

module.exports = Record;