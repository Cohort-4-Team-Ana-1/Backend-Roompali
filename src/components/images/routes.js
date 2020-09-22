const express = require('express')
const { uploadImage } = require('./controller')
const singleUpload = uploadImage.single('image')
const multiUpload = uploadImage.array('image')

const imagesApi = (app) => {
  const router = express.Router()
  app.use('/api/images', router)

  // Route to Upload One Image
  router.post('/', (req, res, next) => {
    try {
      singleUpload(req, res, async (err) => {
        if (err) {
          return res.json({
            success: false,
            errors: {
              title: 'Image Upload Error',
              detail: err.message,
              error: err
            }
          })
        }
        res.status(201).json({
          message: 'Image created',
          image_url: req.file.location
        })
      })
    } catch (error) {
      next(error)
    }
  })

  // Route to Upload Multiples Images
  router.post('/multi', (req, res, next) => {
    try {
      multiUpload(req, res, async (err) => {
        if (err) {
          return res.json({
            success: false,
            errors: {
              title: 'Image Upload Error',
              detail: err.message,
              error: err
            }
          })
        }
        res.status(201).json({
          message: 'Images created',
          images_urls: req.files.map((files) => {
            return  files.location
          })
        })
      })
    } catch (error) {
      next(error)
    }
  })
}

module.exports = imagesApi
