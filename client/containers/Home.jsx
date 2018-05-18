import React from "react";
import {Link} from "react-router-dom";

class Home extends React.Component{
    constructor(props){
        super(props);
        this.Enterprev = this.Enterprev.bind(this);
    }
    render(){

        return(
        <div id = "home">
            <PrevNote />
            <NewNote />
        </div>
        )

    }
    Enterprev(e) {
        e.preventDefault();
        const newNote = {
            id: Date.now(),
            iframe: "something"
        }
        this.state(prevState => {
            {
                    prevNoteList: prevState.prevNoteList.push(newNote)
            }
        })
    }
}