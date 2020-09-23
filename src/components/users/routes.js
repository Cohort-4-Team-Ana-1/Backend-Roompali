const express = require('express')
const usersControllers = require('./controller')
const passport = require('passport')
const jwt = require('jsonwebtoken')
const { config } = require('../../config')

// Passport Basic Strategy
require('../../utils/auth/strategies/local')

const usersApi = (app) => {
  const router = express.Router()
  app.use('/api/users', router)

  // Route for sign-in
  router.post('/sign-in', async (req, res, next) => {
    passport.authenticate('local', { session: false }, (err, user, info) => {
      if (err || !user) {
        return res.status(400).json({
          message: 'Incorrect email and password',
          user: user
        })
      }
      req.login(user, { session: false }, (err) => {
        if (err) {
          res.send(err)
        }
        const payload = {
          _id: user._id,
          user: user.username,
          email: user.email
        }
        const token = jwt.sign(payload, config.authJwtSecret, {
          expiresIn: '15m'
        })
        return res.status(200).json({
          payload: payload,
          token: token
        })
      })
    })(req, res, next)
  })

  // Route for function readUsers
  router.get('/', async (req, res, next) => {
    try {
      const users = await usersControllers.readUsers()
      res.status(200).json({
        message: 'Users listed',
        total: users.length,
        body: users
      })
    } catch (error) {
      next(error)
    }
  })
  // Route for function readOneUser
  router.get('/:userId', async (req, res, next) => {
    try {
      const user = await usersControllers.readOneUser(req.params.userId)
      res.status(200).json({
        message: 'User listed',
        body: user
      })
    } catch (error) {
      next(error)
    }
  })
  router.post('/', async (req, res, next) => {
    try {
      const userEmail = await usersControllers.readUserByEmail(req.body.email)
      if(userEmail !== null){
        res.status(400).json({
          message:'Invalid user'
        })
      } else {
        const user = await usersControllers.createUser(req.body)
        res.status(201).json({
          message: 'User created',
          body: user
        })
      }

    } catch (error) {
      next(error)
    }
  })
  router.patch('/:userId', async (req, res, next) => {
    try {
      const userId = req.params.userId
      const userBody = req.body
      if(req.body.email !== null ){
        const userEmail = await usersControllers.readUserByEmail(req.body.email)
        if(userEmail !== null){
          res.status(400).json({
            message:'Invalid user'
          })
        } else {
          const user = await usersControllers.updateUser(userId, userBody)
          res.status(200).json({
            message: 'User updated',
            body: user
          })
        }
      } else {
        const user = await usersControllers.updateUser(userId, userBody)
        res.status(200).json({
          message: 'User updated',
          body: user
        })
      }
    } catch (error) {
      next(error)
    }
  })
  router.delete('/:userId', async (req, res, next) => {
    try {
      const userId = req.params.userId
      await usersControllers.deleteUser(userId)
      res.status(200).json({
        message: `User ${userId} deleted`
      })
    } catch (error) {
      next(error)
    }
  })
}

module.exports = usersApi
