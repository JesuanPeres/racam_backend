// store
// getAllPhotos
// getPhoto

const Photo = require("../models/Photo");


module.exports = {
    async store (req,res){
        console.log("receiving photo")
        const { filename: url_photo} = req.file;
        const hour = Date.now()
        const photo = await Photo.create({
            url_photo, 
            hour, 
        })
        
        return res.json(photo)

    },
    async getAllPhotos(req,res){

        const photos =  await Photo.find().sort('-createdAt');
        return res.json(photos)
    

    }, 
    async getPhoto(req, res){
        
    }


}