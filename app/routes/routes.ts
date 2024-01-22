import { Express } from 'express';

module.exports = (app: Express)  => {

    const cocktail = require("../controllers/cocktail.controller");

    app.get("/cocktail-desc", cocktail.genDesc);

}