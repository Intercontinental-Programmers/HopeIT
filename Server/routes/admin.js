var express = require('express');
var router = express.Router();
var auth = require('../controllers/AdminAuthController');
var User = require('../models/user');
var Message = require('../models/message.js')

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

router.get('/users_list', function(req, res){
    console.log(req);
    
        User.find({}, function(err, users) {
            var userList = [];
        
            users.forEach(function(user) {
            userList.push(user);
            });
        
            res.render('admin-list-users.ejs', {users : userList});  
        });
    
});

router.get('/messageshistory', function(request, response){
    
        Message.find({}, function(err, messages){
            var messagesList = [];
            messages.forEach(function(message){
                messagesList.push(message);
            });
            response.render('admin-list-message.ejs', {'messages': messagesList});
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
                    //image: { data: Buffer, contentType: String }
                });
                message.save();
            });
            response.render('admin-index.ejs', {admin : request.user});
        });
    
});
router.get('/sendall',function(request, response){
    
        response.render('admin-sendall.ejs');
    
});

router.get('/send_one_message', function(req, res){

        if(req.query.username){
            res.render('admin-one-message-pre.ejs', {select : req.query.username});
        }
        User.find({}, function(err, users) {
            var userList = [];
        
            users.forEach(function(user) {
            userList.push(user);
            });
        
            res.render('admin-one-user-message.ejs', {users : userList});  
        });
    
});

router.post('/send_one_message', function(req, res){
        var message = new Message({
            email : req.body.username,
            topic : req.body.topic,
            body : req.body.body,
            read : false,
            //image: { data: Buffer, contentType: String }
        });

        message.save();

        res.redirect('/admin');
    
});






module.exports = router;