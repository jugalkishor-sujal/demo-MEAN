// app/models/user.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({    
    name: { type: String, required: true },
    password: { type: String, required: true },
    modified: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', UserSchema);
