import React from "react";
import DeleteIcon from "@material-ui/icons/Delete"


const Note = (props)=>{
  const handleClick = (event)=>{
    props.onDelete(props);
  }
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}><DeleteIcon /></button>
    </div>
  )
};

export default Note;