const sinon = require('sinon')
const { addFavoriteRoomsRolMock, removeFavoriteRoomsRolMock} = require('./favoriteRooms')

const findByIdAndUpdateStub = sinon.stub()
const findFavoriteRoomByIdStub = sinon.stub()
const readOneRolStub = sinon.stub()

findByIdAndUpdateStub.resolves(addFavoriteRoomsRolMock)
findFavoriteRoomByIdStub.resolves(undefined)
readOneRolStub.resolves(removeFavoriteRoomsRolMock)

const findByIdAndUpdate = async () => {
    return findByIdAndUpdateStub()
}

const find = async () => {
    return findFavoriteRoomByIdStub()
}

const findById = async () => {
    return readOneRolStub()
}

module.exports = {
    findByIdAndUpdate,
    find,
    findById,
    findByIdAndUpdateStub,
    findFavoriteRoomByIdStub,
    readOneRolStub
}