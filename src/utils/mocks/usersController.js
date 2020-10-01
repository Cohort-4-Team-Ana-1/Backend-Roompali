const { usersMock, usersIdTest, userEmailTest } = require('./users')
const sinon = require('sinon')

const readUsersStub = sinon.stub()
const readOneUserStub = sinon.stub()
const createUserStub = sinon.stub()
const updateUserStub = sinon.stub()
const deleteUserStub = sinon.stub()
const readUserByEmailStub = sinon.stub()

readUsersStub.resolves(usersMock)
readOneUserStub.withArgs(usersIdTest).resolves(usersMock[0])
createUserStub.resolves(usersMock[0])
updateUserStub.resolves({ nModified: 1 })
deleteUserStub.resolves({ deletedCount: 1 })
readUserByEmailStub.withArgs(userEmailTest).resolves(usersMock[0])

const find = () => {
  return readUsersStub()
}

const findById = (userId) => {
  return readOneUserStub(userId)
}

const create = (user) => {
  return createUserStub(user)
}

const findByIdAndUpdate = () => {
  return updateUserStub()
}

const findByIdAndDelete = () => {
  return deleteUserStub()
}

const findOne = (userEmail) => {
  return readUserByEmailStub(userEmail)
}

module.exports = {
  find,
  findById,
  create,
  findByIdAndUpdate,
  findByIdAndDelete,
  findOne,
  readUsersStub,
  readOneUserStub,
  createUserStub,
  updateUserStub,
  deleteUserStub,
  readUserByEmailStub
}
