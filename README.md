# Open-AI-Server
An HTTP server built on Node.js and Express that manages requests and responses to OPENAI.

This server can be used for connecting applications to allow for conversations with ChatGPT as well as for sending one-time requests. 

# How to run
1. Download or clone the repository.
2. Change into the working directory.
3. Create a .env file. Create the following variable:
```
  OPENAI_API_KEY = {your_openai_key}
```
4. To compile the TypeScript files, run the following command in the terminal:
```
tsc
```
5. To run the server, run the following command in the terminal:
```
node index.js
```
