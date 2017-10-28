var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var UserSchema = new mongoose.Schema({
    firstname : String,
    surname : String,
    nickname : String, //for coinhive
    username : String,
    password : String,
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);