import { Express } from "express";

module.exports = (app: Express) => {
  const request = require("../controllers/request.controller");

  app.get("/chatgpt-req", request.genRequest);
};
