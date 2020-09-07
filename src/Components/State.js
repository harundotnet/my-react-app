import React,{Component} from 'react';

class State extends Component{

    constructor(){
        super()

    var objMyInfo={
        name:"Harun",
        age:30,
        color:['red','green','blue'],
        address:{district:'Rangpur',village:'Khat Khatia'}
    };

    this.state=objMyInfo;
        // We can assign value directly in state property
        // this.state={
        //     name:"Habib",
        //     age:19,
        //     height:'5 feet 7 inch',
        //     weight:'53 KG'
        // }

    }

    render(){
        return <div>
            <p>I'm <strong>{this.state.name}</strong>. My age is <b>{this.state.age}</b>.<br></br>
            I lives in <i>{this.state.address.district}</i>. My favourite color is <i>{this.state.color[2]}</i>.
            </p>
        </div>
    }
}

export default State;