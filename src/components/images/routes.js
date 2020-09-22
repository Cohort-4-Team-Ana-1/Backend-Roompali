const express = require("express");
const  { uploadImage } = require("./controller");
const singleUpload = uploadImage.single("image");

const imagesApi = (app) => {
  const router = express.Router();
  app.use("/api/images", router);

  router.post("/", function (req, res, next) {
    try {
      singleUpload(req, res, async function (err) {
        if (err) {
          return res.json({
            success: false,
            errors: {
              title: "Image Upload Error",
              detail: err.message,
              error: err,
            },
          });
        }
        res.status(201).json({
          message: "Image created",
          image_url: req.file.location
        });
      });
    } catch (error) {
      next(error);
    }
  });
};

module.exports = imagesApi;
