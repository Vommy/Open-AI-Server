"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = (app) => {
    const cocktail = require("../controllers/cocktail.controller");
    app.get("/cocktail-desc", cocktail.genDesc);
};
