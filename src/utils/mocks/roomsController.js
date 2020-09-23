const { roomsMock, roomIdTest } = require('./rooms')
const sinon = require('sinon')

const readRoomsStub = sinon.stub()
const readOneRoomStub = sinon.stub()
const createRoomStub = sinon.stub()
const updateRoomStub = sinon.stub()
const deleteRoomStub = sinon.stub()

readRoomsStub.resolves(roomsMock)
readOneRoomStub.withArgs(`${roomIdTest}`).resolves(roomsMock[0])
createRoomStub.resolves(roomsMock[1])
updateRoomStub.resolves({'nModified': 1})
deleteRoomStub.resolves({'deletedCount': 1})

const find = () => {
  return readRoomsStub()
}

const findById = roomId => {
  return readOneRoomStub(roomId)
}

const create = room => {
  return createRoomStub(room)
}

const findByIdAndUpdate = () => {
  return updateRoomStub()
}

const findByIdAndDelete = () => {
  return deleteRoomStub()
}

module.exports = {
  find,
  findById,
  create,
  findByIdAndUpdate,
  findByIdAndDelete,
  readRoomsStub,
  readOneRoomStub,
  createRoomStub,
  updateRoomStub,
  deleteRoomStub
}
