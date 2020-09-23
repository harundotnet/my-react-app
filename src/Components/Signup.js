import React, { Component } from 'react'

export default class Signup extends Component {
    constructor(){
        super()

        this.state={
            fname:'',
            lname:'',
            email:'',
            mobile:''

        }
    }

    onChangeHandler=(e)=>{
        let inputNames=e.target.name; // Get all input tag names
        let inputValues=e.target.value; // Get all input tag values
        this.setState({[inputNames]:inputValues}) // Set all the values in state

        //====== Form Validation Start =======
        if(inputNames ==="fname"){
            var namePattern=/^([a-zA-Z])(2,30)$/;
            if(!namePattern.test(inputValues)){
                this.setState({fname:"Name is not valid"});
            }
           // !namePattern.test(inputValues)? (this.setState({fname:"Name is not valid"})): (this.setState({fname:""}));
        }

    }

    render() {
        return (
            <div>
                <p>Signup Form</p>

                <form>

                    <input onChange={this.onChangeHandler} name="fname" type="text" placeholder="First Name"></input><br></br>
                    <span style={{color:"red"}}>{this.state.fname} </span><br></br>
                    <input onChange={this.onChangeHandler} name="lname" type="text" placeholder="Last Name"></input><br></br>
                    <input onChange={this.onChangeHandler} name="email" type="text" placeholder="Email"></input><br></br>
                    <input onChange={this.onChangeHandler} name="mobile" type="text" placeholder="Mobile"></input><br></br>
                    <input type="submit" value="Save"></input><br></br>
                </form>

                <p>
                    First Name:{this.state.fname} <br/>
                    Last Name:{this.state.lname}  <br/>
                    Email:{this.state.email}  <br/>
                    Mobile:{this.state.mobile}
                </p>

            </div>
        )
    }
}
