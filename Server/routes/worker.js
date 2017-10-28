var express = require('express');
var router = express.Router();
var auth = require('../controllers/WorkerAuthController');
var Message = require('../models/messages.js');
//route to home page
router.get('/', auth.home);

// route to login page
router.get('/login', auth.login);

// route for login action
router.post('/login', auth.doLogin);

// route for logout action
router.post('/logout', auth.logout);

router.post('/sendall', function(request, respond){
    User.find({}, function(err, users) {
        users.forEach(function(user) {
            var message = new Message({
                email: user.username,
                topic: request.body.topic,
                body: request.body.body,
                read: false, 
                date: Date.now,
                image: { data: Buffer, contentType: String }
            });
            worker.save(function(err, u) {
                if (err) return next(err);
                console.log('Added message')
                return render('../views/massagessent.ejs');
            });
        });
        res.render();  
      });
    
});

router.post('/sendselect', function(request, respond){
    var message = new Message({
        username: String,
        firstname: String,
        surname : String,
        password: String,
    });
})



module.exports = router;