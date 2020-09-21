const { roomsMock } = require('./rooms')
const sinon = require('sinon')

const searchRoomByCityStub = sinon.stub()
searchRoomByCityStub.withArgs('bogota').resolves(roomsMock[0])

const find = city => {
    return searchRoomByCityStub(city)
}

module.exports = {
    find,
    searchRoomByCityStub
}