const express = require('express');
const record = require('../models/record');

const router = express.Router();

router.post('/', (req, res) => {

    var startDate = new Date(req.body.startDate);
    var endDate = new Date(req.body.endDate);
    var minCount = req.body.minCount;
    var maxCount = req.body.maxCount;
    var record_list = [];

    // ERROR CHECKING - DATES
    if(startDate > endDate){
        var response = create_response(1, 'Error', "The start date should be less than or equal to the end date");
        res.send(response);
    }
    // ERROR CHECKING - COUNTS
    else if(minCount > maxCount){
        var response = create_response(1, 'Error', "The minCount should be less than or equal to the maxCount");
        res.send(response);
    }
    // NO ERROR
    else{
        
    }
});

function create_response(code, msg, description){
    return {
        "code": code,
        "msg": msg,
        "description": description 
    };
};

module.exports = router;