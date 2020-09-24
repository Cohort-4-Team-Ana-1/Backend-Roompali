const proxyquire = require('proxyquire')
const assert = require('assert')
const FavoriteRoomsControllerMock = require('../utils/mocks/favoriteRooms')
const testServer = require('../utils/testServer')

describe('Favorite Rooms - Route', () => {
    let router = proxyquire('../components/favorite-rooms/routes', {
        './controller': FavoriteRoomsControllerMock
    })

    const request = testServer(router)

    describe('POST /api/favorite-rooms/add', () => {
        it('Should respond with status 200', (done) => {
            request.post('/add').expect(200, done())
        })

        it('Should respond with a Content-type json', (done) => {
            request.post('/add').expect('Content-type', /json/, done())
        })
    })

    describe('POST /api/favorite-rooms/remove', () => {
        it('Should respond with status 200', (done) => {
            request.post('/remove').expect(200, done())
        })
        it('Should respond with a Content-type json', (done) => {
            request.post('/remove').expect('Content-type', /json/, done())
        })
    })
})