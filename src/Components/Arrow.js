import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const AlertMe=(param1)=>{
    alert(param1);
}

const Arrow=()=>{
    return(
        <button className="btn btn-danger" onMouseEnter={AlertMe.bind(this,"Ouch! You naughty.")}>Touch Me</button>
    );
}


export default Arrow;