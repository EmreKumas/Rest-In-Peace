const express = require('express');
const record = require('../models/record');

const router = express.Router();

router.post('/', (req, res) => {
    
    record.find({key: 'nyOpG8k775EtWyZh'}, (err, record) => {
        if(err)
            throw err;

        res.send(record);
    });
});

module.exports = router;