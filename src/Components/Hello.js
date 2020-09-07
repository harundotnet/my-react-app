import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

function Hello(props){

function DoThis(){
    alert("Button is clicked.");
}

function DoThisWithParameter(para){
    alert(para);
}
    return (
        <div>
            <button className="btn btn-primary m-3" onClick={DoThis}>Click Me</button>
            <button className="btn btn-success m-3" onClick={DoThisWithParameter.bind(this,"I came from Function Paramerter")}>Click Me with Parameter</button>
            <h1>I am {props.name}.My age is {props.age} years.</h1>
        </div>
    );
}

export default Hello;