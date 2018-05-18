import React, { PropTypes } from "react";

const Sign = props => {
  let sign = false;
  if (props.label === "sign") sign = true;
  return (
    <div id="log">
      <form class="user-form" onSubmit={props.createUser}>
        <label>{props.label}</label>
        <input type="text" name="username" placeholder="username" />
        <input type="password" name="password" placeholder="password" />
        <button id="submit">Submit</button>
      </form>
    </div>
  );
};

export default Sign;
