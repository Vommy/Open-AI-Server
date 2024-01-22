"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    if (req)
        res.json({ message: "OpenAi Server" });
    else
        res.json({ message: "Hello World!" });
});
require("./app/routes/routes")(app);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`CORS enabled Express web server is running on port ${PORT}.`);
});
