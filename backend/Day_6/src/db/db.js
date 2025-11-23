const mongoose = require('mongoose');


function connectToDB(){

    mongoose.connect("mongodb+srv://nehasharma962595:9ThYiVJXrtwNo63e@cluster0.r8n9pas.mongodb.net/cohort")
    .then(()=>{
        console.log("Connected to DB");
        
    })
}

module.exports = connectToDB;

