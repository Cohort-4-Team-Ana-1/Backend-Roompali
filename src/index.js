const express = require('express')
const database = require('./database')
const usersApi = require('./components/users/routes')
const roomsApi = require('./components/rooms/routes')
const app = express()

// MongoDB Connection
database.connection()

// Body Parser
app.use(express.json({ extended: true }))

// Routes
usersApi(app)
roomsApi(app)

app.get('/', (req, res) => {
  res.send('We are working!')
})

// Server
app.listen(3500, () => {
  console.log('server listening at http://localhost:3500')
})
