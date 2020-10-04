const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')
const UsersSchema = require('../../../components/users/schema')
const { config } = require('../../../config')
const passportJWT = require('passport-jwt')
const JWTStrategy = passportJWT.Strategy
const ExtractJWT = passportJWT.ExtractJwt

passport.use(
  new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
  },
  async (email, password, cb) => {
    return UsersSchema.findOne({
      email: email
    })
      .then(user => {
        if (user) {
          bcrypt.compare(password, user.password).then(result => {
            if (result) {
              return cb(null, user.toJSON(), { message: 'Correct sign in' })
            } else {
              return cb(null, false, { message: 'Incorrect sign in' })
            }
          })
        } else {
          return cb(null, false, { message: 'Incorrect email and password' })
        }
      }).catch(error => cb(error))
  })
)
passport.use(
  new JWTStrategy({
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.authJwtSecret
  },
  function (jwtPayload, cb) {
    return UsersSchema.findOne({
      _id: jwtPayload._id
    }).then(user => {
      return cb(null, user)
    })
      .catch(err => {
        return cb(err)
      })
  }
  ))

module.exports = passport
