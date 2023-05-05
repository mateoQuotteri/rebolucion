const db = require("../database/models")
const passport = require("passport")
const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;


const GOOGLE_CLIENT_ID ="219187070770-8etp7aglnutn7ne64q52ppvt7c79gkq9.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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"

passport.use(new GoogleStrategy({
    clientID:     GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/google/callback",
    passReqToCallback   : true
  },
  function(req, accessToken, refreshToken, profile, done) {
    /*User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return done(err, user);
    });*/
    db.Users.create({
        email: profile.email,
        name: profile.given_name,
        lastname : profile.family_name,
        password: profile.sub,
       
    }).then(() => {
        req.session.loggedUser = profile;
    })
}
));
