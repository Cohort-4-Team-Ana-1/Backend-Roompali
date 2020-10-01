const mongoose = require('mongoose')
const debug = require('debug')('mongoose: connection')

const { config } = require('./config')

const mongoURL = `mongodb+srv://${config.dbUser}:${config.dbPassword}@${config.dbHost}/${config.dbName}?retryWrites=true&w=majority`

const connection = async (cb) => {
  try {
    await mongoose.connect(mongoURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    })
    debug('mongoDB Connected')
  } catch (error) {
    cb(error)
  }
}

module.exports = { connection }
