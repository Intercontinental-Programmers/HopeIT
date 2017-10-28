var mongoose = require('mongoose');
//var bcrypt = require('bcrypt');

var messageSchema = new mongoose.Schema({
    email: String,
    topic: String,
    body: String,
    read: Boolean, 
    date: Date,
    image: { data: Buffer, contentType: String }
});


module.exports = mongoose.model('Message', messageSchema);