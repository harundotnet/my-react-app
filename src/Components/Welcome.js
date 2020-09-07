import React,{Component} from 'react';

class Welcome extends Component{

    doThisFromClass() {
        alert("Button is Clicked from Class");
    }

    doThisWithParameter(para){
        alert(para);
    }

    render(){
        return <div>
            <button onClick={this.doThisFromClass}>Click Me from Class</button>
            <button onClick={this.doThisWithParameter.bind(this,"I came from Class Paramerter")}>Click Me with Parameter</button>
             <h1>I am {this.props.name}.</h1>
        </div>
    }
}

export default Welcome;