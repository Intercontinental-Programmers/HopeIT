var mongoose = require('mongoose');
var passport = require('passport');
var Admin = require('../models/admin.js');

var adminController = {};

adminController.home = function(req, res) {
    if(req.user)
        res.render('../views/admin-index.ejs', {admin : req.user, moreno : getCoins()});
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

var getCoins = function(){
    var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    var express = require('express');
    var router = express.Router();
    console.log('elo');
    var secret_key = '8wrE1OOuytBY2nogXsQXwLqji5atfEJd';
    
    router.get('/', function(req, res, next){
        var request = require('request');
        
        // Set the headers
        var headers = {
            'Content-Type':     'application/json'
        }
        
        request("https://api.coinhive.com/stats/site?secret=8wrE1OOuytBY2nogXsQXwLqji5atfEJd", function (error, response, body) {
            console.log('elo2');
            if (!error && response.statusCode == 200) {
                parsedBody = JSON.parse(body);
                console.log(parsedBody["hashesTotal"]);
                console.log(Number(parsedBody["xmrPending"]).toPrecision(10));
                return (Number(parsedBody["xmrPending"]).toPrecision(10) * 316.68).toString();
            }
            return 10;
        })
    });
};

module.exports = adminController;