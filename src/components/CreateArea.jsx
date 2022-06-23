import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {

  const [isExpanded, setExpanded] = useState(false); 

  const [note, setNote] = useState({
    title: "",
    content: ""
  });
  const handleChange = (event)=>{
    const {name, value} = event.target;
    setNote(prevNote => {
      return {...prevNote, [name]: value};
    });
  };
  const submitNote = (event)=>{
    props.onAdd(note);
    setNote(()=>{
      return {
        title: "",
        content: ""
      };
    });
    event.preventDefault();
  }

  const expand = (event)=>{
    setExpanded(()=> {
      return !isExpanded;
    });
  };

  return (
    <div>
      <form className="create-note">
      {isExpanded && <input name="title" onChange={handleChange} placeholder="Title" value={note.title} />}
        <textarea name="content" onChange={handleChange} onClick={expand} placeholder="Take a note..." value={note.content} rows={isExpanded ? "3" : "1"} />
      <Zoom in={isExpanded}>
        <Fab onClick={submitNote}>
          <AddIcon />
        </Fab>
      </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
