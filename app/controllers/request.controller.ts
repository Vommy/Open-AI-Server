const request = require("../models/request.model");
import { Request, Response } from "express";

/**
 * Generates a description for a cocktail using the cocktail.createDesc() method when a request is sent through routes.js.
 * @author Veren Villegas
 * @returns {JSON} The description of the cocktail as JSON in the form of {desc: cocktail}.
 */
exports.genRequest = async (req: Request, res: Response) => {
  try {
    if (req.query.content) {
      const content: string | null = await request.sendRequest(
        req.query.content
      );

      if (!content)
        res.status(500).send({
          Error: `Error generating request to send to OpenAI.`,
        });
      else res.json({ role: "assistant", content: content });
    } else
      res.status(400).send({
        message: "A request to OpenAI must be specified.",
      });
  } catch (err) {
    return;
  }
};
