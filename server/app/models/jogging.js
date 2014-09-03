// app/models/user.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var JoggingSchema = new Schema({    
    name: { type: String, required: true },
    distance: { type: String, required: true, default: '0' },
    date: { type: Date, default: Date.now },
    time: { type: String, required: true , default: '0' }
});

module.exports = mongoose.model('Jogging', JoggingSchema);
