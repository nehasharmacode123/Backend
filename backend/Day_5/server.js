const express = require('express');
const connectToDB = require('./src/db/db')


connectToDB();
const server = express();

// server database se connect server.js file me

server.use(express.json());

server.get("/",(req,res)=>{
    res.send("hello world")
})

server.post("/notes",(req,res)=>{
    const {title,content} = req.body

    console.log(title,content);
    
})


server.listen(3000,()=>{
    console.log(`Server is running on port 3000`);
    
})