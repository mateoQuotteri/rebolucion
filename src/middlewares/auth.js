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
  function async (req, accessToken, refreshToken, profile, done) {
   /* const newUser = {
      id: profile.id,
      firstName: profile.name.givenName,
      lastName: profile.name.familyName,
      
  }*/
  // User.findOrCreate({ googleId: profile.id }, (err, user) => {
  //     return cb(err, user);
  //   });

  db.Users.create({
    email: profile.email,
    name: profile.name.givenName,
    lastname : profile.name.familyName,
    password : "123456"
   
}).then((user) => {

    done(null, user)
  
  
}
  
)  
}

)

);
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});
