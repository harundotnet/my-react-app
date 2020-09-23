import React, { Component } from 'react'

class BasicForm extends Component {
    constructor() {
        super();
        this.state={
            name:"",
            topic:"select",
            comment:""
        }
    }

    handleNameChange=(event)=>{
        this.setState({name:event.target.value})
    }
    handleNameChange=(event)=>{
        this.setState({name:event.target.value})
    }
    handleCommentChange=(event)=>{
        this.setState({comment:event.target.value})
    }
    handleSubmit=()=>{
        alert(`Name:${this.state.name}
            Topic: ${this.state.topic}
            Comment: ${this.state.comment}
        `)
    }
    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Name</label>
                    <input type="text"
                     name="name"
                     value={this.state.name}
                     onChange={this.handleNameChange}
                    ></input>
                </div>
                <div>
                    <label>Topic</label>
                    <select name="name" value={this.state.topic} onChange={this.handleTopicChange}>
                        <option value="select">-- Select --</option>
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                        <option value="vue">Vue</option>
                     </select>
                </div>
                <div>
                    <label>Comment</label>
                    <textarea
                     name="comment"
                     value={this.state.comment}
                     onChange={this.handleCommentChange}
                    ></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default BasicForm
