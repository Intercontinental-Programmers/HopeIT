var express = require('express');
var router = express.Router();
var User = require('../models/user');

var paypal = require('paypal-rest-sdk');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;



// fundacja@hopeit.com
// FundacjaHopeIt
// 
paypal.configure({
    'mode': 'sandbox', //sandbox or live
    'client_id': "AeWDxLrPczJJRHCanfA_GzqQDRHkKDLrp3X1Vhj3HXr0cpwA2Vr3tM-AzuxtYX-szrub-dKxqEj9-dhH",
    'client_secret': "ENWRgP6Y2dRzoPgwTDWoW1vQ_oMnoBnv-rmdKawA7k0hRmNNA9YFOLOzAGp5WXLh1ZTwApMzN40WPqYw",
});

/* POST home page. 
router.post('/', function(req, res, next) {
    // Build PayPal payment request
    var payReq = JSON.stringify({
        intent:'sale',
        payer:{
          payment_method:'paypal'
        },
        redirect_urls:{
          return_url:'http://localhost:3000/process',
          cancel_url:'http://localhost:3000/cancel'
        },
        transactions:[{
          amount:{
            total: req.body.total,
            currency: req.body.currency
          },
          description:'This is the payment transaction description.'
        }]
      });

    console.log(req.body);

    paypal.payment.create(payReq, function(error, payment){
        var links = {};
      
        if(error){
          console.error(JSON.stringify(error));
        } else {
          // Capture HATEOAS links
          payment.links.forEach(function(linkObj){
            links[linkObj.rel] = {
              href: linkObj.href,
              method: linkObj.method
            };
            console.log(linkObj);
          })
      
          // If redirect url present, redirect user
          if (links.hasOwnProperty('approval_url')){
            res.send(links['approval_url'].href);
          } else {
            console.error('no redirect URI present');
          }
        }
    });
}); */

/* POST home page. */
router.get('/:total/:currency', function(req, res, next) {
    // Build PayPal payment request
    var payReq = JSON.stringify({
        intent:'sale',
        payer:{
          payment_method:'paypal'
        },
        redirect_urls:{
          return_url:'http://207.154.221.96:3000/process',
          cancel_url:'http://207.154.221.96:3000/cancel'
        },
        transactions:[{
          amount:{
            total: req.params.total,
            currency: req.params.currency
          },
          description:'This is the payment transaction description.'
        }]
      });

    console.log(req.params);

    paypal.payment.create(payReq, function(error, payment){
        var links = {};
      
        if(error){
          console.error(JSON.stringify(error));
        } else {
          // Capture HATEOAS links
          payment.links.forEach(function(linkObj){
            links[linkObj.rel] = {
              href: linkObj.href,
              method: linkObj.method
            };
            console.log(linkObj);
          })
      
          // If redirect url present, redirect user
          if (links.hasOwnProperty('approval_url')){
            res.redirect(links['approval_url'].href);
          } else {
            console.error('no redirect URI present');
          }
        }
    });
});

router.post("/transaction_list", function(req, res){
  User.find({}, function(err, users) {
    var userList = [];

    users.forEach(function(user) {
    userList.push(user.username);
    
    var request = require('request');
    var headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
    };
    request.post({headers: headers, url: "http://207.154.221.96:3000/transactions", body: "user"}, function (error, response) {
            if (!error && response.statusCode == 200) {
                parsedBody = JSON.parse(response);
                console.log(parsedBody["hashesTotal"]);
                console.log(Number(parsedBody["xmrPending"].toString()).toPrecision(4));
                res.render('pagestats');
            }
        })
    });
  });
}); 

module.exports = router;
