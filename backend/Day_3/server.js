// express server => nodejs application

// npm => node package manager
// npx => node package executor

const express = require("express");

const server = express();

server.get("/home", (req, res) => {
  res.send("hello world");
});

server.get("/about", (req, res) => {
  res.send("Welcome to About page");
});

server.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});
