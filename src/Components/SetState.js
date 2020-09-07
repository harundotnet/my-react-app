import React,{Component} from 'react';


class SetState extends Component{

    constructor(){
        super()

        this.state={
            name:'Harun'
        }
    }

    changeName(newName){
        this.setState({name:newName});
    }


    render(){
        return <div>
            <h1>{this.state.name}</h1>
            <button onClick={this.changeName.bind(this,"Habib")}>Change Me</button>
        </div>
    }
}

export default SetState;