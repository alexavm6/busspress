const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/User');

passport.use(new LocalStrategy({
    usernameField: 'user',
    passwordField: 'password'
}, async (user, password, done) => {

    //Match user
    const userFound = await User.findOne({user});
    if (!userFound) {
        return done(null, false, { message: 'Usuario no encontrado' });
    } else {
        //Match password of the user found
        const match = await userFound.matchPassword(password);
        if (match) {
            return done(null, userFound);
        } else {
            return done(null, false, { message: 'Contraseña incorrecta' });
        }
    }

}));

passport.serializeUser((user, done) => {
    
    done(null, user.id);
});

async function getId(id){
    const user = await User.findById(id).exec();
    return user;
}

passport.deserializeUser(async (id, done) => {
/*
    User.findById(id, (err, user) => {
        done(err, user);
    });
*/

    const user = await getId(id).then(function(err, user) {
        done(err, user);
    });


    

});