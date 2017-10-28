var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport');
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var Admin = require('./models/admin');
var index = require('./routes/index');
var user = require('./routes/user');
var paypal = require('./routes/paypal');
var proces = require('./routes/process');
//var pagestats = require('./routes/pagestats');
//var userstats = require('./routes/userstats');
var coinhive = require('./routes/coinhive');
var admin = require('./routes/admin');
var transactions = require('./routes/transactions');

var app = express();

//database setup
mongoose.connect('mongodb://test:test123@ds237445.mlab.com:37445/hopeit-icp')
.then(() =>  console.log('connection succesful'))
.catch((err) => console.error(err));

//initialize some security shit, man 
var LocalStrategy = require('passport-local').Strategy;
app.use(require('express-session')({
secret: 'prof jacek cichon drugi pali dobre szlugi',
resave: false,
saveUninitialized: false
}));

//passport strategy initialization
passport.use(new LocalStrategy(Admin.authenticate()));
passport.serializeUser(Admin.serializeUser());
passport.deserializeUser(Admin.deserializeUser());

app.use(passport.initialize());
app.use(passport.session());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/user', user);
//app.use('/pagestats', pagestats);
//app.use('/userstats', userstats);
app.use('/coinhive', coinhive);
app.use('/paypal', paypal);
app.use('/process', proces);
app.use('/admin', admin);
app.use('/transactions', transactions);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
