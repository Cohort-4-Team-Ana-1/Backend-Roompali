const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')
const UsersSchema = require('../../../components/users/schema')

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

module.exports = passport
