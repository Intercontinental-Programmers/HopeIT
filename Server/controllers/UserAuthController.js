var mongoose = require('mongoose');
var passport = require('passport');
var User = require('../models/user.js');

var userController = {};

userController.home = function(req, res){
    if(req.user)
        res.json(req.user);
};

userController.doRegister = function(req, res){
    User.register(new User({username : req.body.username, firstname : req.body.firstname, surname : req.body.surname,
                            nickname : req.body.nick, }), req.body.password, function(err, user){
                                if(err){
                                    console.log(err);
                                    return res.json({register : false});
                                }
                                console.log('dobrze');
                                res.json({register : true});

                            });
};

userController.doLogin = function(req, res){
    console.log(req.body);
    passport.authenticate('user')(req, res, function(){
        console.log('Zalogowano');
        res.json(req.user);
    });
}

userController.logout = function(req, res){
    req.logout();
    res.json({loggedout : true});
};

module.exports = userController;