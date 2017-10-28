var express = require('express');
var router = express.Router();
var auth = require('../controllers/AdminAuthController');
var Worker = require('../models/worker.js');
var Message = require('../models/messages.js');
var User = require('../models/user.js')

//route to home page
router.get('/', auth.home);

// route to register page
router.get('/register', auth.register);

// route for register action
router.post('/register', auth.doRegister);

// route to login page
router.get('/login', auth.login);

// route for login action
router.post('/login', auth.doLogin);

// route for logout action
router.post('/logout', auth.logout);

// router.post('/addworker', function(request, respond){
//     var worker = new Worker({
//         username: request.body.username,
//         firstname: request.body.firstname,
//         surname : request.body.surname,
//         password: request.body.password,
//     })
//     worker.save(function(err, u) {
//         if (err) return next(err);
//         console.log('Added worker')
//         respond.redirect('/admin');
//     });
// });
router.get('/messageshistory', function(request, response){

    Message.find({}, function(err, messages){
        var messagesList = [];
        messages.forEach(function(message){
            messagesList.push(message);
        });
        response.render('../views/admin-list-message.ejs', {'messages': messagesList});
    });
});
router.post('/sendall', function(request, response){
    User.find({}, function(err, users) {
        users.forEach(function(user) {
            var message = new Message({
                email: user.username,
                topic: request.body.topic,
                body: request.body.body,
                read: false, 
                date: Date.now,
                //image: { data: Buffer, contentType: String }
            });
            message.save();
        });
        response.render('../views/admin-index.ejs');
    });
});
router.get('/sendall',function(request, response){
    response.render('admin-sendall.ejs');
})

router.post('/sendselect', function(request, respond){
    var message = new Message({
        username: String,
        firstname: String,
        surname : String,
        password: String,
    });
})


module.exports = router;