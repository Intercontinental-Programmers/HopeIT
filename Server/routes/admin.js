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
    User.find({}, function(err, users) {
        var userList = [];
    
        users.forEach(function(user) {
          userList.push(user);
        });
    
        res.render('../views/admin-list-users.ejs', {users : userList});  
      });
});

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
                //image: { data: Buffer, contentType: String }
            });
            message.save();
        });
        response.render('../views/admin-index.ejs', {admin : request.user});
    });
});
router.get('/sendall',function(request, response){
    response.render('admin-sendall.ejs');
});

router.post('/sendselect', function(request, respond){
    var message = new Message({
        username: String,
        firstname: String,
        surname : String,
        password: String,
    });
})

router.get('/send_one_message', function(req, res){
    User.find({}, function(err, users) {
        var userList = [];
    
        users.forEach(function(user) {
          userList.push(user);
        });
    
        res.render('../views/admin-one-user-message.ejs', {users : userList});  
      });
});

router.post('/send-one-message', function(req, res){

});



module.exports = router;