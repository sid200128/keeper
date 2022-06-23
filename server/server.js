const express = require("express");
const mongoose = require("mongoose");
const Note = require("./dbNotes.js");
const cors = require("cors");

require("dotenv").config();

const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

const connectionUrl = process.env.CONNECTION_URL;
// {useNewUrlParser:true, useFindAndModify: true, useUnifiedTopology: true}
mongoose.connect(connectionUrl);

app.get("/", (req, res)=>{
  res.send("Hi hello there");
});


app.route("/note")
.get((req, res)=>{
  Note.find((err, foundNotes)=>{
    if(!err){
      res.send(foundNotes);
    }
  });
})
.post((req, res)=>{
  const newNote = new Note(req.body);
  newNote.save((err)=>{
    if(err){
      res.send("error while creating");
    } else {
      res.send("Note succesfully created");
    }
  });
})
.delete((req, res)=>{
  Note.findByIdAndDelete(req.body.id, (err)=>{
    if(err){
      res.send("Delete unsuccessfull");
    } else {
      res.send("Delete successfull");
    }
  })
});

app.listen(3000, ()=>{
  console.log("Server is running on port 3000");
});