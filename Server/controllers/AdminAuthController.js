var mongoose = require('mongoose');
var passport = require('passport');
var Admin = require('../models/admin.js');

var adminController = {};

adminController.home = function(req, res) {
    if(req.user)
        res.render('../views/admin-index.ejs', {admin : req.user});
    res.redirect('/admin/login');
};

adminController.register = function(req, res) {
    res.render('../views/admin-register.ejs');
};

adminController.doRegister = function(req, res) {
    Admin.register(new Admin({username : req.body.email, firstname : req.body.firstname,
                                surname : req.body.surname}), req.body.password,
                                function(err, admin) {
                                    if(err){
                                        console.log(err);
                                        return res.render('../views/admin-register.ejs', { admin : req.user });
                                    }
                                    passport.authenticate('local')(req, res, function(){
                                        console.log('dobrze');
                                        res.redirect('/');
                                    })
                                });
};

adminController.login = function(req, res){
    res.render('../views/admin-login.ejs');
};

adminController.doLogin = function(req, res) {
    console.log(req.body);
    passport.authenticate('local')(req, res, function () {
        console.log('Zalogowano');
      res.redirect('/admin');
    });
  };

adminController.logout = function(req, res) {
    req.logout();
    res.redirect('/admin');
  };

module.exports = adminController;