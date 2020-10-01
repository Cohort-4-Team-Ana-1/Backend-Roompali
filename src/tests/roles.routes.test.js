const proxyquire = require('proxyquire')
const testServer = require('../utils/testServer')

const { RolControllerMock, rolIdTest } = require('../utils/mocks/roles')

describe('Roles - Routes', () => {
  const router = proxyquire('../components/roles/routes', {
    './controller': RolControllerMock
  })
  const request = testServer(router)
  describe('GET - /api/roles', () => {
    it('Should respond with status 200', (done) => {
      request.get('/api/roles').expect(200, done)
    })
  })
  describe('GET - /api/roles/:rolId', () => {
    it('Should respond with status 200', (done) => {
      request.get(`/api/roles/${rolIdTest}`).expect(200, done)
    })
  })
  describe('POST - /api/roles', () => {
    it('Should respond with status 201', (done) => {
      request.post('/api/roles').expect(201, done)
    })
  })
  describe('PATCH - /api/roles/:rolId', () => {
    it('Should respond with status 200', (done) => {
      request.patch(`/api/roles/${rolIdTest}`).expect(200, done)
    })
  })
  describe('DELETE - /api/roles/:rolId', () => {
    it('Should respond with status 200', (done) => {
      request.delete(`/api/roles/${rolIdTest}`).expect(200, done)
    })
  })
})
