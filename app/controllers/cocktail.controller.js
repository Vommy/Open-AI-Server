"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Cocktail = require('../models/cocktail.model');
exports.genDesc = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (req.query.cocktailName) {
            const cocktail = yield Cocktail.createDesc(req.query.cocktailName);
            if (!cocktail)
                res.status(500).send({
                    Error: `Error creating description for ${req.query.cocktailName}`
                });
            else
                res.json({ desc: cocktail });
        }
        else
            res.status(400).send({
                message: "A cocktail name must be specified."
            });
    }
    catch (err) {
        return;
    }
});
