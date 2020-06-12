const mongoose = require("mongoose")
const PhotoSchema = new mongoose.Schema({
    url_file: String,
    hour: Date

}, 
{
    timestamps:true,
}

);

module.exports = mongoose.model('Photo', PhotoSchema);

