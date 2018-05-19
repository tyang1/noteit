import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import NoteComponent from "../components/NoteComponent.jsx";

import {
  addNote,
  deleteNote,
} from "../modules/App";

const mapActionCreators = {
  addNote,
  deleteNote,
};

const mapStateToProps = state => ({
  value1: state.app.toJS().value1
});

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.EnterPrev = this.EnterPrev.bind(this);
  }
  render() {
    return (
      <div id="home">
        <NoteComponent deleteNote = {props.deleteNote} editNote={props.editNote} />
        <NoteCreate addNote = {props.addNote} />
      </div>
    );
  }
  EnterPrev(e) {
    e.preventDefault();
    const newNote = {
      id: Date.now(),
      iframe: "something"
    };
    this.state(prevState => {
      {
        prevNoteList: prevState.prevNoteList.push(newNote);
      }
    });
  }
}

export default connect(mapStateToProps, mapActionCreators)(Home);
