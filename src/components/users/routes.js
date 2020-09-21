const express = require("express");
const usersControllers = require("./controller");

const usersApi = (app) => {
  const router = express.Router();
  app.use("/api/users", router);
  // Route for function readUsers
  router.get("/", async (req, res, next) => {
    try {
      const users = await usersControllers.readUsers();
      res.status(200).json({
        message: "Users listed",
        total: users.length,
        body: users,
      });
    } catch (error) {
      next(error);
    }
  });
  // Route for function readOneUser
  router.get("/:userId", async (req, res, next) => {
    try {
      const user = await usersControllers.readOneUser(req.params.userId);
      res.status(200).json({
        message: "User listed",
        body: user,
      });
    } catch (error) {
      next(error);
    }
  });
  router.post("/", async (req, res, next) => {
    try {
      const user = await usersControllers.createUser(req.body);
      res.status(201).json({
        message: "User created",
        body: user,
      });
    } catch (error) {
      next(error);
    }
  });
  router.patch("/:userId", async (req, res, next) => {
    try {
      const userId = req.params.userId;
      const userBody = req.body;
      const user = await usersControllers.updateUser(userId, userBody);
      res.status(200).json({
        message: "User updated",
        body: user,
      });
    } catch (error) {
      next(error);
    }
  });
  router.patch("/delete/:userId", async (req, res, next) => {
    try {
      const userId = req.params.userId;
      const user = await usersControllers.deleteUser(userId);
      res.status(200).json({
        message: `User ${userId} deleted`,
      });
    } catch (error) {
      next(error);
    }
  });
};

module.exports = usersApi;
