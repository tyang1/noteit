import React, { PropTypes } from 'react';
const Sign = (props) => {
     return(
        <div id="log">
            <form method="post">
                <label>{props.label}</label>
                <input type = "text" name = "user" placeholder = "username"/>
                <input type = "text" name = "pwd" placeholder = "password"/>
                <button id="submit">Submit</button>
            </form>
        </div>
     )

}