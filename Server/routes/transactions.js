var express = require('express');
var router = express.Router();

var paypal = require('paypal-rest-sdk');

var listPayment = {
    'count' : 1000,
    'start_index': '1'
};

// Emulate logged user

router.post('/', function(req, res, next) {
    var user = {
        email : req.body.user,
    }

    console.log(req.body.user);

    paypal.payment.list(listPayment, function (error, payments) {
        if (error) {
            throw error;
        } else {
            console.log("List Payments Response");
           // console.log(JSON.stringify(payments));

            let filtered_by_user = [];
            for(payment_no in payments.payments) {
                console.log(payments.payments[payment_no]);
                if( payments.payments[payment_no].state == "approved" && 
                    payments.payments[payment_no].payer.payer_info.email == user.email) {
                    
                        filtered_by_user.push(payments.payments[payment_no]);
                }
            }

            console.log(filtered_by_user);

            res.json(filtered_by_user);
        }
    });
});

module.exports = router;