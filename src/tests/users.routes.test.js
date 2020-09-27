const assert = require("assert");
const proxyquire = require("proxyquire");
const {
  usersMock,
  usersMockAttributes,
  usersIdTest,
  UsersControllerMock,
} = require("../utils/mocks/users");
const testServer = require("../utils/testServer");

describe("Users - Routes", () => {
  const router = proxyquire("../components/users/routes", {
    "./controller": UsersControllerMock,
  });
  const request = testServer(router);
  describe("GET /api/users", () => {
    it("Should respond with status 200", (done) => {
      request.get("/api/users").expect(200, done);
    });
    it("Should respond with a content-type json", (done) => {
      request.get("/api/users").expect("Content-type", /json/, done);
    });
  });
  describe("GET /api/users/userId", () => {
    it("Should respond with status 200", (done) => {
      request.get(`/api/users/${usersIdTest}`).expect(200, done);
    });
    it("Should respond with a content-type json", (done) => {
      request
        .get(`/api/users/${usersIdTest}`)
        .expect("Content-type", /json/, done);
    });
  });
  describe("POST /api/users", () => {
    it("Should respond with status 201", (done) => {
      request.post("/api/users").expect(201, done);
    });
    it("Should respond with a content-type json", (done) => {
      request.post("/api/users").expect("Content-type", /json/, done);
    });
  });
  describe("PATCH /api/users/userId", () => {
    it("Should respond with status 200", (done) => {
      request.patch(`/api/users/${usersIdTest}`).expect(200, done);
    });
    it("Should respond with a content-type json", (done) => {
      request
        .patch(`/api/users/${usersIdTest}`)
        .expect("Content-type", /json/, done);
    });
  });
  describe("DELETE /api/users/userId", () => {
    it("Should respond with status 200", (done) => {
      request.delete(`/api/users/${usersIdTest}`).expect(200, done);
    });
    it("Should respond with a content-type json", (done) => {
      request
        .delete(`/api/users/${usersIdTest}`)
        .expect("Content-type", /json/, done);
    });
  });
});
