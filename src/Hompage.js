import React,{Component} from 'react';
import logo from './logo.gif'; 
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
 

class Home extends Component {
  render(){ 
  return (
   
        <div className="firstpage text-center">
      
        <img src={logo} className="App-logo " alt="logo" />

        <h1 className="text-danger">Butterfly.com</h1>
        <p>Butterflies have the typical four-stage insect life cycle. 
        Winged adults lay eggs on the food plant on which their larvae, 
        known as caterpillars, will feed. The caterpillars grow, sometimes very rapidly,
         and when fully developed, pupate in a chrysalis.</p> 


 
  
        <Link to="/second"> <button type="button" class="btn btn-info ">Go to Company List</button></Link>
    </div> 
    
     
 
 
  );
}
}

export default Home;


 