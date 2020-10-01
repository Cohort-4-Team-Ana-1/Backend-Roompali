require('dotenv').config()

const config = {
  port: process.env.PORT || 3500,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbName: process.env.DB_NAME,
  accessKeyId: process.env.SECRET_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
  authJwtSecret: process.env.AUTH_JWT_SECRET
}

module.exports = { config }
