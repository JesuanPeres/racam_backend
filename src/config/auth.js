const passport = require('passport');
const User = require('../models/User');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

passport.use(new LocalStrategy({
    usernameField: 'email',
}, async (username, password, done)=>{
    User.findOne({email: username}, async (err, user)=>{
        if(err){
            return done(err);
        }

        if(!user){
            return done(null, false);
        }

        const result = await bcrypt.compare(password, user.password);

        if(!result){
            return done(null, false);
        }

        return done(null, user);
    })
}));

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    User.findById(id).then((user)=>{
        done(null, user);
    });
});