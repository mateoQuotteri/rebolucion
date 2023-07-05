/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const express = require('express');
const db = require("../database/models")

const router = express.Router();


const FACEBOOK_CLIENT_ID = "991804888915763"
const FACEBOOK_SECRET_KEY = "ddc25da617f1705e178651d6557cfd52"

passport.use(
  new FacebookStrategy(
    {
      clientID: FACEBOOK_CLIENT_ID,
      clientSecret:FACEBOOK_SECRET_KEY,
      callbackURL: "http://localhost:3000/facebook/callback",
    },
    async function (accessToken, refreshToken, profile, cb) {
        const user = await db.Users.findOne({ where: { email: profile.email } })
    
      if (!user) {
        console.log('Adding new facebook user to DB..');
        return cb(null, profile);
      } else {
        console.log('Facebook User already exist in DB..');
        // console.log(profile);
        return cb(null, profile);
      }
    }
  )
);


module.exports = router;