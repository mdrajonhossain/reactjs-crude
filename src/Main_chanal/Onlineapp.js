
import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Other from "./Other";


class Online extends Component {

    constructor(props) {
        super(props)

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeFname = this.onChangeFname.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            fname: ''
        }
    }



    onChangeName(e) {
        this.setState({ name: e.target.value })
    }

    onChangeFname(e) {
        this.setState({ fname: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()

        if (this.state.name && this.state.fname ){
        const userObject = {
            name: this.state.name,
            fname: this.state.fname
        };

        axios.post('http://localhost:4000/api/data', userObject)
            .then((res) => {})

            .catch((error) => {
                console.log(error)
            });

        this.setState({ name: '', fname: '' })
    }
    }



    render() {

        return (
            <div className="container">

             <Link to="/Second"> <button type="button" class="btn btn-info">Home</button></Link>
                <Link to="/Other"> <button type="button" class="btn btn-info">Data View</button></Link>



                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Add Name</label>
                        <input type="text" value={this.state.name} onChange={this.onChangeName} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Add Father Name</label>
                        <input type="text" value={this.state.fname} onChange={this.onChangeFname} className="form-control" />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create Data" className="btn btn-success btn-block" />
                    </div>
                </form>
            </div>
        )
    }
}


export default Online;