
import React,{Component} from 'react';
import './Com.css';  
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import axios from 'axios';
import Togglen from './Toogle'; 
import {reactLocalStorage} from 'reactjs-localstorage';
import Other from './Other';
import Update from "./Update";



class School extends Component {
    
  constructor(props){
    super(props);
    this.state = {
      name : [],
      namea :''

    }
  }

   
  render(){

  function handleClick(e) {
    e.preventDefault();
    localStorage.setItem('namea', 'Md. Rajon Hossain');
}


    function handleExit(e) {
    e.preventDefault();
    reactLocalStorage.remove('namea'); 

    console.log(localStorage.getItem('namea'))

 
    }



    return(
      <div className="Container-fluid">
      <Link to="/second"> <button type="button" class="btn btn-info">Back</button></Link>
      <Link to="/School"> <button type="button" class="btn btn-info">Home</button></Link>




        <div className="row">


          <div className="col-md-3 bg-info sitebar text-">
             <div class="list-group" id="list-tab" role="tablist">
                  <a class="list-group-item list-group-item-action" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">Home</a>
                  <a class="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list" href="#list-profile" role="tab" aria-controls="profile">Profile</a>
                  <a class="list-group-item list-group-item-action" id="list-messages-list" data-toggle="list" href="#list-messages" role="tab" aria-controls="messages">Messages</a>
                  <a class="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list" href="#list-settings" role="tab" aria-controls="settings">Settings</a>
                  <a class="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list" href="#list-settings" role="tab" aria-controls="settings">Settings</a>
              </div>
          </div>


          <div className="col-md-9">


<button type="button" class="btn btn-danger" data-toggle="modal" data-target="#exampleModalCenter">
  default
</button>

<Update/>

<button type="button" onClick={handleClick}   class="btn btn-info">Onclick</button>
<button type="button" onClick={handleExit}   class="btn btn-info">Exit</button>

<Togglen/>










<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
          </div>





      </div>
      </div>

      );
}
}

 
 export default School;