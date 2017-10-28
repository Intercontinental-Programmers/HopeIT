var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var WorkerSchema = new Schema({
    username: String,
    firstname: String,
    surname : String,
    password: String
});

WorkerSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('Worker', WorkerSchema);