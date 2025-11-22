const express = require("express");

const server = express();

server.use(express.json());

let notes = [];

server.get("/", (req, res) => {
  res.send("Hello world");
});

// /notes => {title, content}

server.post("/notes", (req, res) => {
  console.log(req.body);

  notes.push(req.body);
  res.json({
    Message: "Note created Successfully",
  });
});

server.get("/notes", (req, res) => {
  res.json(notes);
});

// DELETE /note/:index
// DELETE /note/:2

server.delete('/notes/:index',(req,res)=>{
  const index = req.params.index
  delete notes[index]
  res.json({
    message:"note deleted successfully",
  })
})


server.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});

