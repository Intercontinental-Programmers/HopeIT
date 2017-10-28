var express = require('express');
var router = express.Router();

var paypal = require('paypal-rest-sdk');

var listPayment = {
    'start_index': '1'
};

// Emulate logged user
var user = {
    email : "darczynca@gmail.com",
}

router.get('/', function(req, res, next) {

    paypal.payment.list(listPayment, function (error, payments) {
        if (error) {
            throw error;
        } else {
            console.log("List Payments Response");
            console.log(JSON.stringify(payments));

            let filtered_by_user = [];
            for(payment_no in payments.payments) {
                console.log(payments.payments[payment_no]);
                if( payments.payments[payment_no].state == "approved" && 
                    payments.payments[payment_no].payer.payer_info.email == user.email) {
                    
                        filtered_by_user.push(payments.payments[payment_no]);
                }
            }


            res.json(filtered_by_user);
        }
    });
});

module.exports = router;