import React,{Component} from 'react';


class Condition1 extends Component{

    constructor(){
        super()
        this.state={
            isLogged:false
        }
    }

    logIn(logStatus){
        this.setState({isLogged:logStatus});
    }
    logOut(logStatus){
        this.setState({isLogged:logStatus});
    }

    render(){

        if(this.state.isLogged==true){
            return <div>
                <h2>You Login Successfully!</h2>
                <button onClick={this.logOut.bind(this,false)}>Logout</button>
            </div>
        }
        else{
            return <button onClick={this.logIn.bind(this,true)}>Login Now</button>
        }
    }
}

export default Condition1;