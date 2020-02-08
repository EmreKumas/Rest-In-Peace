const express = require('express');
const record = require('../models/record');

const router = express.Router();

router.post('/', (req, res) => {
    
    var response = {'name': 'Emre Kumaş'};
    res.send(response);
    
});

module.exports = router;