const mongoose = require('mongoose')

const CameraSchema = new mongoose.Schema({
    code: {
        type: String,
    },
    idOwner:{
        type: Schema.ObjectId,
        ref: "User", 
    }
    
}, {
    timestamps: true
});

module.exports =  mongoose.model('Camera', CameraSchema);