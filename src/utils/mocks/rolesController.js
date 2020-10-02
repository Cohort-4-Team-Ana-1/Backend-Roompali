const { rolMock, rolIdTest } = require('./roles')
const sinon = require('sinon')

const readRolesStub = sinon.stub()
const readOneRolStub = sinon.stub()
const createRolStub = sinon.stub()
const updateRolStub = sinon.stub()
const deleteRolStub = sinon.stub()
const searchRolByUserIdStub = sinon.stub()

readRolesStub.resolves(rolMock)
readOneRolStub.withArgs(`${rolIdTest}`).resolves(rolMock[0])
createRolStub.resolves(rolMock[0])
updateRolStub.resolves({ nModified: 1 })
deleteRolStub.resolves({ deletedCount: 1 })
searchRolByUserIdStub.resolves(rolMock[0])

const find = async () => {
  return readRolesStub()
}

const findById = async (rolId) => {
  return readOneRolStub(rolId)
}

const create = async () => {
  return createRolStub()
}

const findByIdAndUpdate = async () => {
  return updateRolStub()
}

const findByIdAndDelete = async () => {
  return deleteRolStub()
}

const findOne = async () => {
  return searchRolByUserIdStub()
}

module.exports = {
  find,
  findById,
  create,
  findByIdAndUpdate,
  findByIdAndDelete,
  findOne,
  readRolesStub,
  readOneRolStub,
  createRolStub,
  updateRolStub,
  deleteRolStub,
  searchRolByUserIdStub
}
