const mongoose = require("mongoose")
const PhotoSchema = new mongoose.Schema({
    url_photo: 
    {
        type:String,
        min: 5, 
        max: 255
    },
    
    hour: Date, 

    id_camera: mongoose.ObjectId,
}, 

{
    timestamps:true,
});

module.exports = mongoose.model('Photo', PhotoSchema);

