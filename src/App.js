import React from 'react'; 
import Home from './Hompage';
import Apppage from './Main_chanal/Apppage';
import School from './Main_chanal/School';
import Online from './Main_chanal/Onlineapp'; 
import Other from './Main_chanal/Other';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";



function App() {
  return (
    <div className="App">
        <header className="App-header">
        
    <Router>     
          <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/second" exact component={Apppage} />
              <Route path="/School" component={School} />
              <Route path="/Online" component={Online} />
              <Route path="/Other" component={Other} />

          </Switch>
    </Router>

        </header>
    </div>
  );
}


export default App;




 