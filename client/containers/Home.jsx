import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import {
  myFirstAction,
} from "../modules/App";

const mapActionCreators = {
  myFirstAction
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
        <PrevNote />
        <NewNote />
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
