const User = require('../models/User');
const bcrypt = require('bcrypt')

const saltRounds = parseInt(process.env.SALT_ROUNDS);

module.exports = {
    async store(req, res){
        const {name, email, password} = req.body;
        const user = new User();

        user.name = name;
        user.email = email;
        user.password = await bcrypt.hash(password, saltRounds);
        
        const success = await user.save();

        if(!success){
            return res.json({'error': 'Can not save user'})
        }

        return res.json(user);
    }
}