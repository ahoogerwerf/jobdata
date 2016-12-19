var express = require('express');
var router = express.Router();
var sse = require('express-server-sent-events');
var jobData = {};

//

// POst data

router.post('/', sse, function (request, res) {

	jobData.Mill = request.body.Mill;
	jobData.Job = request.body.Job;
    jobData.Stain = request.body.Stain;

    
        rescollection.forEach(function (item, index) {
// for some reason, the push to the client only works from within a async call, and data: must be at the beginning                
            setTimeout(function () {
            item.sse('data: ' + JSON.stringify(jobData) + '\n\n');
            }
                , 0);

        });
   // }
    

});



router.get('/', function (req, res) {
    res.render('jobstain', { Mill: jobData.Mill, Job: jobData.Job, Stain: jobData.Stain });
    res.end("yes");

});

module.exports = router;
