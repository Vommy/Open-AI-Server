const Cocktail = require("../models/cocktail.model");
import { Request, Response } from "express";

/**
 * Generates a description for a cocktail using the cocktail.createDesc() method when a request is sent through routes.js.
 * @author Veren Villegas
 * @returns {JSON} The description of the cocktail as JSON in the form of {desc: cocktail}.
 */
exports.genDesc = async (req: Request, res: Response) => {
  try {
    if (req.query.cocktailName) {
      const cocktail: string | null = await Cocktail.createDesc(
        req.query.cocktailName
      );

      if (!cocktail)
        res.status(500).send({
          Error: `Error creating description for ${req.query.cocktailName}`,
        });
      else res.json({ desc: cocktail });
    } else
      res.status(400).send({
        message: "A cocktail name must be specified.",
      });
  } catch (err) {
    return;
  }
};
