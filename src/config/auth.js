// const passport = require('passport');
const User = require('../models/User');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

module.exports = function(passport) {

    passport.use(new LocalStrategy({
        usernameField: 'email',
    }, (username, password, done)=>{
        User.findOne({ username: username }, (err, user) => {
            if (err) throw err;

            if (!user) return done(null, false);
            
            bcrypt.compare(password, user.password, (err, result) => {
                if (err) throw err;
                
                if (result === true) {
                    return done(null, user);
                } else {
                    return done(null, false);
                }
            });
        });
    }));
    
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });
    
    passport.deserializeUser(function(id, done) {
        User.findById(id).then((user)=>{
            done(null, user);
        });
    });
}
