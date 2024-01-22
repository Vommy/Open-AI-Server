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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const openai_1 = __importDefault(require("openai"));
require("dotenv").config();
const oApiKey = process.env.OPEN_API_KEY;
const openai = new openai_1.default({ apiKey: oApiKey });
const Cocktail = function (Cocktail) {
    let name = Cocktail.name;
    name = name;
};
Cocktail.createDesc = (title) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const completion = yield openai.chat.completions.create({
            messages: [{ role: "system", content: "You are a helpful assistant." },
                { role: "user", content: `Generate a small product description for the following cocktail name: ${title}` }],
            model: "gpt-3.5-turbo-1106",
        });
        console.log(completion.choices[0].message.content);
        return completion.choices[0].message.content;
    }
    catch (error) {
        return "Error: " + error;
    }
});
module.exports = Cocktail;
