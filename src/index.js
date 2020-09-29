const express = require('express')
const database = require('./database')
const debug = require('debug')('app:server')
const cors = require('cors')
const { config } = require('./config')
const usersApi = require('./components/users/routes')
const rolesApi = require('./components/roles/routes')
const roomsApi = require('./components/rooms/routes')
const imagesApi = require('./components/images/routes')
const favoriteRoomsApi = require('./components/favorite-rooms/routes')
const app = express()

// Cors
app.use(cors())

// MongoDB Connection
database.connection()

// Body Parser
app.use(express.json({ extended: true }))

// Routes
usersApi(app)
rolesApi(app)
roomsApi(app)
imagesApi(app)
favoriteRoomsApi(app)

app.get('/', (req, res) => {
  res.send(`
  Server Status: [Online]
  
  For more information visit: https://github.com/Cohort-4-Team-Ana-1/Backend-Roompali`)
})

// Server
const server = app.listen(config.port, () => {
  debug(`Server listening at http://localhost:${server.address().port}`)
})
