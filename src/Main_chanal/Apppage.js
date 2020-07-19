import React,{Component} from 'react';
import './Com.css'; 

import School from './School';
import Online from './Onlineapp';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
 

function Applisthome() {
  return (
    <div className="App text-center Applisthome">
        <header className="App-headser">
        <br />
        <Link to="/"> <button type="button" class="btn btn-danger">Home Page</button></Link><br /><br />

        
        <Link to="/School"> <button type="button" class="comlist btn btn-info text-danger">School Management System</button></Link><br /><br />
        <Link to="/Online"> <button type="button" class="comlist btn btn-warning text-danger"><b>BD Corona Report</b></button></Link><br /><br />
        <Link to="/Other"> <button type="button" class="comlist btn btn-success text-danger">Other System</button></Link><br /><br />

        </header>
    </div>
  );
}

export default Applisthome;

