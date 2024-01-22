// Installing dependencies
const express = require('express');
import { Request, Response } from "express";
const cors = require('cors');

//Setting up express
const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Default route
app.get("/", (req: Request, res: Response) => {
    if(req)
        res.json({ message: "OpenAi Server" });
    else
        res.json({ message: "Hello World!" });
});

require("./app/routes/routes")(app);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`CORS enabled Express web server is running on port ${PORT}.`);
});