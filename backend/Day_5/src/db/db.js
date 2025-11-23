const mongoose = require('mongoose');

// server Database se kaisa connect hoga yeh tum db.js file mein likhoga

function connectToDB(){
    mongoose.connect("mongodb+srv://nehasharma962595:9ThYiVJXrtwNo63e@cluster0.r8n9pas.mongodb.net/cohort")
    .then(()=>{
        console.log("connected to DB");
        
    })
}


module.exports = connectToDB;