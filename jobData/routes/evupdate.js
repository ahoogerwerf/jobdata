var express = require('express');
var router = express.Router();
sse = require('express-server-sent-events');


router.get('/', sse,  function (req, res) {
    req.socket.setTimeout(100000);
    // push the current session onto a array
    rescollection.push(res);

});

module.exports = router;
