var mongoose = require('mongoose');
var passport = require('passport');
var User = require('../models/user.js');

var userController = {};

userController.home = function(req, res){
    if(req.user)
        res.json(req.user);
};

userController.doRegister = function(req, res){
    User.register(new User({username : username, firstname : firstname, surname : secondname,
                            nickname : nick, }), password, function(err, user){
                                if(err){
                                    console.log(err);
                                    return res.json({register : 'fail'});
                                }
                                console.log('dobrze');
                                res.json({register : 'good'});

                            });
};

userController.doLogin = function(req, res){
    passport.authenticate('local'(req, res), function(){
        console.log('Zalogowano');
        res.redirect('/user');
    });
}