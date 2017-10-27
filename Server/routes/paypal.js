var express = require('express');
var router = express.Router();

var paypal = require('paypal-rest-sdk');




/* GET home page. */
router.get('/:client_id/:client_secret/:total/:currency/:desc', function(req, res, next) {
    var create_payment_json = {
        "intent": "sale",
        "payer": {
            "payment_method": "paypal"
        },
        "redirect_urls": {
            "return_url": "http://return.url",
            "cancel_url": "http://cancel.url"
        },
        "transactions": [{
            "item_list": {
                "items": [{
                    "name": "item",
                    "sku": "item",
                    "price": req.params.total,
                    "currency": req.params.currency,
                    "quantity": 1
                }]
            },
            "amount": {
                "currency": req.params.currency,
                "total": req.params.total
            },
            "description": req.params.desc,
        }]
    };

    paypal.configure({
        'mode': 'sandbox', //sandbox or live
        'client_id': req.params.client_id,
        'client_secret': req.params.client_secret,
    });

    paypal.payment.create(create_payment_json, function (error, pmnt) {
        if (error) {
            throw error;
        } else {
            console.log("Create Payment Response");
            console.log(pmnt);
    
        }
        res.json(pmnt);
    });
});

/* POST home page. */
router.post('/', function(req, res, next) {
    var create_payment_json = {
        "intent": "sale",
        "payer": {
            "payment_method": "paypal"
        },
        "redirect_urls": {
            "return_url": "http://return.url",
            "cancel_url": "http://cancel.url"
        },
        "transactions": [{
            "item_list": {
                "items": [{
                    "name": "item",
                    "sku": "item",
                    "price": req.body.total,
                    "currency": req.body.currency,
                    "quantity": 1
                }]
            },
            "amount": {
                "currency": req.body.currency,
                "total": req.body.total
            },
            "description": req.body.desc,
        }]
    };

    paypal.configure({
        'mode': 'sandbox', //sandbox or live
        'client_id': req.body.client_id,
        'client_secret': req.body.client_secret,
    });

    paypal.payment.create(create_payment_json, function (error, pmnt) {
        if (error) {
            throw error;
        } else {
            console.log("Create Payment Response");
            console.log(pmnt);
    
        }
        res.json(pmnt);
    });
});

module.exports = router;
