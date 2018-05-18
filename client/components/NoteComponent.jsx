import React from "react";
import NoteDisplay from "./NoteDisplay.jsx";

const NoteComponent = props => {
  const notelist = [];
  props.list.map((note, idx) => {
    notelist.push(
      <NoteDisplay
        // img = {props.img}
        edit={props.editNote}
        delete={props.deleteNote}
        key={idx}
      />
    );
  });
  return(
      <div id= "noteDisplay">
        <h4> Previous NOte </h4>
        {notelist}
      </div>
  )
};

export default NoteComponent;
