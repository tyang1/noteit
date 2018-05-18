import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import {
  myFirstAction,
} from "../modules/App";
import NoteComponent from "../components/NoteComponent.jsx";

const mapActionCreators = {
  myFirstAction
};

const mapStateToProps = state => ({
  value1: state.app.toJS().value1
});

class Login extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const labels = [];
    props.label.map((element, index) => {
      labels.push(<Sign label={element} />);
    });
    return <div>{labels}</div>;
  }
}

export default connect(mapStateToProps, mapActionCreators)(Login);

