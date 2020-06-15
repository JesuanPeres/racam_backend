const mongoose = require("mongoose")
const PhotoSchema = new mongoose.Schema({
    url_photo: String,
    hour: Date, 
    id_camera: ObjectId,
       

}, 
{
    timestamps:true,
}

);

module.exports = mongoose.model('Photo', PhotoSchema);

