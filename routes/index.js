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
        var response = create_response(1, "Error", "The start date should be less than or equal to the end date");
        res.send(response);
    }
    // ERROR CHECKING - COUNTS
    else if(minCount > maxCount){
        var response = create_response(1, "Error", "The minCount should be less than or equal to the maxCount");
        res.send(response);
    }
    // NO ERROR
    else{
        record.find({
                    "createdAt": {"$gte": startDate, "$lte": endDate},
                    $where: `this.counts.length >= ${minCount} && this.counts.length <= ${maxCount}`
                    }, (err, records) => {

            if(err)
                throw err;
    
            // Push each record into our list...
            records.forEach(record => {
                record_list.push({
                    "key": record.key,
                    "createdAt": record.createdAt,
                    "totalCount": record.counts.length
                });
            });

            // Create a response with error if the list is empty...
            if(record_list.length == 0){
                var response = create_response(0, "Success", "No record was found with the given attributes");
                res.send(response);
            }
            // Otherwise, no error...
            else{
                var response = create_response(0, "Success", null);
                delete response["description"];

                response["records"] = record_list;

                res.send(response);
            }
        });
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