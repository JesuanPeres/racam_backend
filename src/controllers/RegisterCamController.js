const User = require('../models/User');
// const bcrypt = require('bcrypt');
// const passport = require('passport');

// const saltRounds = parseInt(process.env.SALT_ROUNDS);

module.exports = {
    async store(req, res){
        console.log('user: ')
        console.log(req.user); 
        // const {name, email, password} = req.body;
        // console.log(req.body);

        // const user_exits = await User.findOne({email: email});

        // if(user_exits){
        //     return res.json({success: false, message: 'This email have already been taked'});
        // }

        // const user = new User();

        // user.name = name;
        // user.email = email;
        
        
        // const success = await user.save();

        // if(!success){
        //     return res.json({'error': 'Can not save user'})
        // }

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