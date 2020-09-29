const assert = require('assert')
const proxyquire = require('proxyquire')
const {
  usersMock,
  usersMockAttributes,
  usersIdTest,
  userEmailTest
} = require('../utils/mocks/users')

const usersControllerMock = require('../utils/mocks/usersController')

describe('Users - Controller', () => {
  const usersController = proxyquire('../components/users/controller', {
    './schema': usersControllerMock
  })
  describe('When readUsers function is called ', async () => {
    it('Should call find function', async () => {
      await usersController.readUsers({})
      assert.strictEqual(usersControllerMock.readUsersStub.called, true)
    })
    it('Should return an users array ', async () => {
      const users = await usersController.readUsers({})
      assert.deepStrictEqual(users, usersMock)
    })
  })
  describe('When readOneUser function is called ', async () => {
    it('Should call findById function', async () => {
      await usersController.readOneUser(usersIdTest)
      assert.strictEqual(usersControllerMock.readOneUserStub.called, true)
    })
  })
  describe('When createUser function is called ', async () => {
    it('Should call create function', async () => {
      await usersController.createUser(usersMockAttributes)
      assert.strictEqual(usersControllerMock.createUserStub.called, true)
    })
  })
  describe('When updateUser function is called ', async () => {
    it('Should call findByIdAndUpdate function', async () => {
      await usersController.updateUser(usersIdTest, usersMockAttributes)
      assert.strictEqual(usersControllerMock.updateUserStub.called, true)
    })
  })
  describe('When deleteUser function is called ', async () => {
    it('Should call findByIdAndDelete function', async () => {
      await usersController.deleteUser(usersIdTest)
      assert.strictEqual(usersControllerMock.deleteUserStub.called, true)
    })
  })
  describe('When readUserByEmail function is called ', async () => {
    it('Should call findOne function', async () => {
      await usersController.readUserByEmail(userEmailTest)
      assert.strictEqual(usersControllerMock.readUserByEmailStub.called, true)
    })
  })
})
