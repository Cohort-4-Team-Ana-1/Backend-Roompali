const express = require("express");

const usersApi = (app) => {
  const router = express.Router();
  app.use("/api/users", router);
  router.get("/", (req, res) => {
    res.send("Test working 2!");
  });
};

module.exports = usersApi;
