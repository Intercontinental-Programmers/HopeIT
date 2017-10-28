var express = require('express');
var router = express.Router();

var paypal = require('paypal-rest-sdk');


// fundacja@hopeit.com
// FundacjaHopeIt
// 
paypal.configure({
    'mode': 'sandbox', //sandbox or live
    'client_id': "AeWDxLrPczJJRHCanfA_GzqQDRHkKDLrp3X1Vhj3HXr0cpwA2Vr3tM-AzuxtYX-szrub-dKxqEj9-dhH",
    'client_secret': "ENWRgP6Y2dRzoPgwTDWoW1vQ_oMnoBnv-rmdKawA7k0hRmNNA9YFOLOzAGp5WXLh1ZTwApMzN40WPqYw",
});

/* POST home page. */
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
});

module.exports = router;
