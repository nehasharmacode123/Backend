// const express = require("express");

// const app = express(); //server create ho gaya

// app.use(express.json());
// /notes => title & description

// let notes = [];

// app.post("/notes", (req, res) => {
//   console.log(req.body);
//   notes.push(req.body);
//   res.json({
//     Message: "Note added successsfully",
//     notes: notes,
//   });
// });

// app.listen(3000, () => {
//   console.log(`Server is running on port 3000`);
// });

const express = require("express");

const app = express(); //server create ho gaya

app.use(express.json());

let notes = [];

app.post("/notes", (req, res) => {
  console.log(req.body);
  notes.push(req.body);
  res.json({
    Message: "Note added Successfully",
    notes: notes,
  });
});

app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});
