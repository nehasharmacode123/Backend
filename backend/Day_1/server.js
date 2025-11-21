// console.log("Hello world");

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// var catMe = require("cat-me");

// console.log(catMe());

// http => module
// cat-me => package

const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Hello Queen Neha Sharma");
}); //server create ho gaya

server.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});
