var express = require('express');
var router = express.Router();

var paypal = require('paypal-rest-sdk');

/* POST home page. */
router.get('/', function(req, res, next) {
    var paymentId = req.query.paymentId;
    var payerId = { payer_id: req.query.PayerID };
    
    paypal.payment.execute(paymentId, payerId, function(error, payment){
      if(error){
        console.error(JSON.stringify(error));
        res.render('process', {error : error});
      } else {
        if (payment.state == 'approved'){
          console.log('payment completed successfully');
          res.render('process', { error: null });
        } else {
          console.log('payment failed');
          res.json({
            payment_status : 500,
            payment_msg : "fail"
        });
        }
      }
    });
});

module.exports = router;

