const User = require('../models/User');
const bcrypt = require('bcrypt');
const passport = require('passport');

const saltRounds = parseInt(process.env.SALT_ROUNDS);

module.exports = {
    async logged(user){
        if(user){
            return true;
        }

        return false;
    },

    async store(req, res){
        const {name, email, password} = req.body;
        console.log(req.body);

        const user_exits = await User.findOne({'email': email});

        if(user_exits){
            return res.json({success: false, message: 'This email have already been taked'});
        }

        const user = new User();

        user.name = name;
        user.email = email;
        user.password = await bcrypt.hash(password, saltRounds);
        
        const success = await user.save();

        if(!success){
            return res.json({'error': 'Can not save user'})
        }

        return res.json({sucess: true, userId: user._id});
    },

    async login(req, res, next){
        passport.authenticate('local', (error, user)=>{
            if(error){
                return res.send(error);
            }

            if(!user){
                return res.json({success: false, message: 'Wrong email/password'});
            }

            req.logIn(user, (err)=>{
                if(err){
                    return res.json({success: false, message: err}); 
                }
                return res.json({success: true, message: 'You are loged in'});
            });

        })(req, res, next);
        
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

    async profile(req, res){
        const user = await req.user;
        if(!user){
            return res.json({loged: false, user: null});
        }

        return res.json({loged: true, user: {id: user.id, name: user.name, email: user.email}});
    },

    

    async logout(req, res){
        // if (this.logged(req.user)){
        if (!(req.user)){

            return res.json({success: false});
        }
        else{

            req.logout()
            return res.json({success: true});
        }

    }
}