import OpenAI from "openai";
require("dotenv").config();

const oApiKey = process.env.OPEN_API_KEY;

const openai = new OpenAI({ apiKey: oApiKey });

const Cocktail = function (Cocktail: any) {
  let name = Cocktail.name;
  name = name;
};

/**
 * Creates a description for a cocktail using ChatGPT.
 * @param title The title of the cocktail.
 * @returns The description for the cocktail from ChatGPT
 * @author Veren Villegas
 */
Cocktail.createDesc = async (title: string) => {
  try {
    const completion = await openai.chat.completions.create({
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        {
          role: "user",
          content: `Generate a small product description for the following cocktail name: ${title}`,
        },
      ],
      model: "gpt-3.5-turbo-1106",
      //response_format: {type: "json_object"},
    });
    console.log(completion.choices[0].message.content);
    return completion.choices[0].message.content;
  } catch (error) {
    return "Error: " + error;
  }
};

module.exports = Cocktail;
