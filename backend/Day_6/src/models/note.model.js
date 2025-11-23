// SCHEMA

// note => {title and content}

const mongoose = require('mongoose');

/* title & content */
/*
Boolean
Number
String
*/

const noteSchema = new mongoose.Schema({
    title:String,
    content:String
})

const noteModel = mongoose.model("note",noteSchema)

module.exports = noteModel;