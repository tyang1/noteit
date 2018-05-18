import React from "react";
import { Link } from "react-router-dom";

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

export default Login;
