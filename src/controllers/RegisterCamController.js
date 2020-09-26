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
        const {name} = req.params;
        const user = await User.findOne({name: name});

        if(!user){
            return res.json({exists: false});
        }

        const {_id, email} = user;
    
        return res.json({exists: true, _id, email, name});
    },

    
}