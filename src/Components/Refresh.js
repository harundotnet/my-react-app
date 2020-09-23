import React,{Component} from 'react';

// When we needs to refresh or update a component view
// then we use forceUpdate method to update react component

class Refresh extends Component{

    constructor(){
        super();

        this.refreshComponent=this.refreshComponent.bind(this);
    }

    refreshComponent(){
        this.forceUpdate();
    }

    render(){
        return(
            <div>
                <button onClick={this.refreshComponent}>Refresh or Reload Button</button>
                <h3>{Math.random()}</h3>
            </div>
        )
    }
}

export default Refresh;
