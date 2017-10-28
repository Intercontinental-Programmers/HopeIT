var express = require('express');
var router = express.Router();
var auth = require('../controllers/UserAuthController');
var Message = require('../models/message');

router.post('/login', auth.doLogin);

router.post('/register', auth.doRegister);

router.post('/logout', auth.logout);

router.get('/', auth.home);

router.post('/get_messages', function(req, res){
    console.log(req);
        Message.find({email : req.body.username}, function(err, msgs){
            var messageList = [];

            msgs.forEach(function(msg){
                messageList.push(msg);
            });

            res.json({messages : messageList});

        });
});

module.exports = router;