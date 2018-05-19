import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';

import Sign from "../components/Sign.jsx";
import Redirect from "../components/Redirect.jsx";
import NoteComponent from "../components/NoteComponent.jsx";

import { createUser } from "../modules/App";

const mapActionCreators = {
  createUser
};

const mapStateToProps = state => ({
  label: state.app.toJS().label,
  loggedIn: state.app.toJS().loggedIn,
});

class Login extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (this.props.loggedIn) this.props.router.push('EditPage');
    const labels = [];
    this.props.label.map((element, index) => {
      labels.push(<Sign label={element} createUser={this.props.createUser} />);
    });
    return (
      <div id="login-page">
        <Redirect />
        {labels}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapActionCreators)(Login);
