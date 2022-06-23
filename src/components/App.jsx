import React, { useState, useEffect } from "react";
import Heading from "./Header";
import Footer from "./Footer";
import Note from "./Notes";
import axios from "../axios.js";
import CreateArea from "./CreateArea";

const App = ()=>{
  const [notes, setNotes] = useState([]);
  useEffect(()=>{
    async function fetchData(){
      const req = await axios.get("/note");
      setNotes(req.data);
    }
    fetchData();
  });
  const addNote = (newNote) =>{
    async function updateData(){
      await axios.post("/note", newNote);
    }
    updateData();
  };

  const deleteNote = (oldNote) => {
    console.log(oldNote);
    async function deleteData(){
      await axios.delete("/note", {data: oldNote});
    }
    deleteData();
  };
  
  return(
  <div>
    <Heading />
    <CreateArea onAdd={addNote}/>
    {notes.map((note)=> {
      return ( <Note key={note._id} id={note._id} title={note.title} content={note.content} onDelete={deleteNote} />);
    })}
    <Footer />
  </div>);
};

export default App;