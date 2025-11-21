// const http = require("http");

// const server = http.createServer((req, res) => {
//   res.end("Hello Neha my heart");
// }); //server create ho gaya

// server.listen(3000, () => {
//   console.log(`Server is running on port 3000`);
// });

const express = require("express");

const server = express(); //server create ho jaata hai

server.get("/home", (req, res) => {
  /*
    req.body
    req.query
    req.params

    req.headers & req.cookies

    */

  res.send("Welcome to the Home Page");
});

server.get("/about", (req, res) => {
  res.send("Welcome to About Page");
});

server.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});
