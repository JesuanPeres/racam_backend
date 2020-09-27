const Camera = require('../models/Camera');
// const bcrypt = require('bcrypt');
// const passport = require('passport');


// const saltRounds = parseInt(process.env.SALT_ROUNDS);

module.exports = {
    async store(req, res){
        // console.log('user: ')
        // console.log(req.user["_id"]);
        let id = req.user["_id"]
        
        const {name, code} = req.body;
        console.log(code)


        
        const cam_exits = await Camera.findOne({'code': code});

        if(cam_exits){
            return res.json({success: false, message: 'Camera already used'});
        }

        const cam = new Camera();

        cam.name = name;
        cam.code = code;
        cam. idOwner = id
        
        
        const success = await cam.save();

        if(!success){
            return res.json({'error': 'Can not save camera'})
        }
        

        return res.json({success: true});
    },

    

    async show(req, res){
        console.log("cameras")
        // idUser = req.user['_id']
        // console.log(idUser);
        idUser = "5efd36c8366ed7255a198383"
        
        const cameras = await Camera.find({'idOwner': idUser});
        // console.log(cameras);


        // if(!user){
        //     return res.json({exists: false});
        // }

        // const {_id, email} = user;
    
         return res.json({exists: true, cameras});
    },

    
}