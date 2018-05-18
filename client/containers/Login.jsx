import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import Sign from '../components/Sign.jsx';
import NoteComponent from "../components/NoteComponent.jsx";


import {
  addNote,
} from "../modules/App";

const mapActionCreators = {
  addNote
};

const mapStateToProps = state => ({
  label: state.app.toJS().label
});

class Login extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const labels = [];
    this.props.label.map((element, index) => {
      labels.push(<Sign label={element} />);
    });
    return <div>{labels}</div>;
  }
}

export default connect(mapStateToProps, mapActionCreators)(Login);

