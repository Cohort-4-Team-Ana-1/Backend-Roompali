const Users = require('./schema')
const bcrypt = require('bcrypt')
/**
 * Bring all users records
 */
const readUsers = () => {
  const users = Users.find({})
  return users
}

/**
 * Bring one user record
 */
const readOneUser = (userId) => {
  const user = Users.findById(userId)
  return user
}

/**
 *
 * Create an new user
 *  */
const createUser = async user => {
  const encriptedPassword = await bcrypt.hash(user.password, 10)
  const userData = {
    username: user.username,
    password: encriptedPassword,
    email: user.email
  }
  const newUser = await Users.create(userData)
  return newUser
}
/**
 * Update an user
 */

const updateUser = async (userId, user) => {
  const userChanges = {
    username: user.username,
    password: user.password,
    email: user.email
  }
  await Users.findByIdAndUpdate(
    userId,
    { $set: userChanges },
    { omitUndefined: true, upsert: true }
  )
  const userChanged = await Users.findById(userId)
  return userChanged
}

/**
 * Delete an user
 */
const deleteUser = async (userId) => {
  const userDeleted = {
    deleted: true
  }
  await Users.findByIdAndUpdate(
    userId,
    { $set: userDeleted },
    { omitUndefined: true, upsert: true }
  )
}

module.exports = {
  readUsers,
  readOneUser,
  createUser,
  updateUser,
  deleteUser
}
