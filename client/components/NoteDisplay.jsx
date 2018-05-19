import React from "react";
//Each individual previous note box
//with an image, delete button, and edit button

const NoteDisplay = props => (
  <div id="noteBox">
    <p> Note ID: <span>{props.noteList.img}</span></p>
    <button className = {props.noteList.noteID}>Edit</button>
    <button  className= {props.noteList.noteID}>Delete</button>
  </div>
);

export default NoteDisplay;