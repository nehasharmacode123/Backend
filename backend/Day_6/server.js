const express = require('express');
const connectToDB = require('./src/db/db');
const noteModel = require('./src/models/note.model');

const server = express();

server.use(express.json());

server.post('/notes',async (req,res)=>{
    const {title,content} = req.body

    console.log(title,content);

    await noteModel.create({
        title,content
    })

    res.json({
        message:"Note created successfully"
    })
})

server.get('/notes',async (req,res)=>{

    const notes = await noteModel.find()

    res.json({
        message:"Notes fetch successfully",
        notes
    })
})

server.delete('/notes/:id',async (req,res)=>{

    const noteId = req.params.id

    await noteModel.findOneAndDelete({
        _id : noteId
    })

    res.json({
        message:"note deleted"
    })
    
})

server.patch("/notes/:id" ,async(req,res)=>{

    const noteId = req.params.id
    const {title} = req.body
    const {content} = req.body

    await noteModel.findOneAndUpdate({
        _id:noteId,
    },{
        title:title
    })

    res.json({
        message:"Note updated successfully"
    })
})


connectToDB();
server.listen(3000,()=>{
    console.log(`Server is running on port 3000`);
    
})

