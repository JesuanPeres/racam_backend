const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        min: 6,
        max: 255
    },
    email: {
        type: String,
        max: 255
    },
    password: {
        type: String,
        min: 8,
        max: 255
    },
}, {
    timestamps: true
});

module.exports =  mongoose.model('User', UserSchema);