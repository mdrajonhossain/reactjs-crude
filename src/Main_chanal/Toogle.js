import React,{Component} from 'react';
import Other from './Other'; 
import Online from './Onlineapp';


class Togglen extends Component {
constructor(props){
    super(props);
    this.handleToggleVisib = this.handleToggleVisib.bind(this);
    this.state = {
         visib : false 
    }
}

handleToggleVisib(){
    this.setState({ visib : !this.state.visib });
}

render(){
    return(
        <div> 
        <button onClick={this.handleToggleVisib}>


        {this.state.visib? 'Data' : 'Form'}
        </button>
        <div> 
        {this.state.visib ? <Other/> : <Online />}
        </div>
        </div>
      );
    }

};


export default Togglen;