const request = require("supertest");
const app = require("../index"); // assuming the express app is exported as "app" from "../app.js"

describe('api', () => {

  it('should return a 200', () => {
    request(app).get('/test').then((res) => {
      expect(res.statusCode).toBe(200);
    });
  });

});