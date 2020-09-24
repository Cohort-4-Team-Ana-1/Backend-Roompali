const proxyquire = require('proxyquire')
const testServer = require('../utils/testServer')
const ImageControllerMock = require('../utils/mocks/images')

describe('Images - Routes', () => {
  const router = proxyquire('../components/images/routes', {
    './controller': ImageControllerMock
  })

  const request = testServer(router)

  // Upload One image
  describe('Post /api/images', () => {
    it('Should respond with status 201', (done) => {
      request.post('/api/images').send({ image: 'roompali-bucket-s3.png' }).expect(201, done())
    })
    it('Should respond with a Content-type json', (done) => {
      request.post('/api/images').send({ image: 'roompali-bucket-s3.png' }).expect('Content-type', /json/, done())
    })
  })
})
