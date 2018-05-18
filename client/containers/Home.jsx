import React from "react";
import {Link} from "react-router-dom";

class Home extends React.Component{
    constructor(props){
        super(props);
        this.handleprev = this.handleprev.bind(this);
    }
    render(){

        return(
        <div id = "home">
            <PrevNote />
            <NewNote />
        </div>
        )

    }
    handleprev
}