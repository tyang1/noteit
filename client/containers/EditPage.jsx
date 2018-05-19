import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";


import {
  } from "../modules/App";
  


const mapActionCreators = {
    
};

const mapStateToProps = state => ({
   
});

class EditPage extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div id = 'iframe'>
                <Hightlight />
                <Iframe />
            </div>

        )
    }
}

export default NoteComponent;