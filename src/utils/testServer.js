const express = require('express')
const supertest = require('supertest')

const testServer = (router) => {
  const app = express()
  router(app)
  return supertest(app)
}

module.exports = testServer
