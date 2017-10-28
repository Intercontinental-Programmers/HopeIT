var express = require('express');
var router = express.Router();
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

var secret_key = '8wrE1OOuytBY2nogXsQXwLqji5atfEJd';

router.get('/', function(req, res, next){
    var request = require('request');
    
    // Set the headers
    var headers = {
        'Content-Type':     'application/json'
    }
    
    request("https://api.coinhive.com/stats/site?secret=8wrE1OOuytBY2nogXsQXwLqji5atfEJd", function (error, response, body) {
        if (!error && response.statusCode == 200) {
            parsedBody = JSON.parse(body);
            console.log(parsedBody["hashesTotal"]);
            console.log(Number(parsedBody["xmrPending"].toString()).toPrecision(4));
            res.render('pagestats');
        }
    })
});

module.exports = router;