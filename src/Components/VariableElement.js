import React,{Component} from 'react';

// By default, return keyword does not support conditional statement.
// if we want,conditional statement in return keyword then we variable element
// which is same as ternary operator
// It can write two ways check below

class VariableElement extends Component{

    constructor(){
        super()

        this.state={
            isRegister:true
        }
    }

    
    render(){

        return (
            // this.state.isRegister? <h2>Register Successfully</h2> : <h2>If you are new Register Now</h2>
            this.state.isRegister?
            (
                <h2>Register Successfully</h2> 
            ) 
            :(
                <h2>If you are new Register Now</h2>
            )

        );
    }
}

export default VariableElement;