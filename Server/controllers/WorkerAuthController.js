var mongoose = require('mongoose');
var passport = require('passport');
var Worker = require('../models/worker.js');

var workerController = {};

workerController.home = function(req, res) {
    if(req.user)
        res.render('../views/worker-index.ejs', {worker : req.user});
    res.send('Trzeba się zalogować');
};

workerController.login = function(req, res){
    res.render('../views/worker-login.ejs');
};

workerController.doLogin = function(req, res) {
    passport.authenticate('worker')(req, res, function () {
        console.log('Zalogowano');
      res.redirect('/worker');
    });
  };

workerController.logout = function(req, res) {
    req.logout();
    res.redirect('/worker');
  };

module.exports = workerController;