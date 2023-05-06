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
    //const user = await db.Users.findOne({ where: { email: profile && password : profile.id } })
   
console.log(profile);

req.session.loggedUser.name = profile.name.givenName;
req.session.loggedUser.lastname = profile.name.familyName;
req.session.loggedUser.email = profile.email;


  db.Users.create({
    email: profile.email,
    name: profile.name.givenName,
    lastname : profile.name.familyName,
    password : profile.id,
   
}
).then((user) => {
   return done(null, user)
}
  
)  
}

)

);
passport.serializeUser(function(user, done) {
 // console.log("aqui : "+ user.id)
 return done(null, {
  id: user.id,
  name: user.name.givenName,
  lastname: user.name.familyName
})
  
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});
