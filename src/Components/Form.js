import React, { Component } from 'react';

class Form extends Component {
    constructor(){
        super()

        this.state={
            username:" "
        };
    }

    onChangeHandler=(event)=>{
        // var newName=event.target.value;
        // this.setState({name:newName})
        let userName=event.target.name;
        let myvalue=event.target.value
        this.setState({[userName]:myvalue})
    }

    onSubmitHandler=()=>{
        alert(this.state.username)
    }

    render() {
        return (
            <div>
                <p>Please enter your name</p>
                <form onSubmit={this.onSubmitHandler}>
                    <input name="username" type="text" placeholder="Enter your name" onChange={this.onChangeHandler}></input>
                    <br></br>
                    <input type="submit" value="Submit Now"></input>
                </form>
        <p>Result: My name is {this.state.username}</p>
                
            </div>
        );
    }
}

export default Form;