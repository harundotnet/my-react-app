import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class ReactDOM1 extends Component {

changeDOM(){
    var container=document.getElementById('myName');
    var element=<h1>Hello! Zakaria. How are you?</h1>
    var callback =function (){
        alert('I am callback function')
    }
    // render() and hydrate() method are same in parameter and calling process
    ReactDOM.hydrate(element,container,callback);
}

    render() {
        return (
            <div>
                <button onClick={this.changeDOM}>Change DOM</button>
                <h1 id='myName'>Hi ! I am Harun.</h1>
            </div>
        )
    }
}
