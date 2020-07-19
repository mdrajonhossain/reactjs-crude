import axios from 'axios';
import {Link} from "react-router-dom";
import ContentEditable from 'react-contenteditable';
import React, {useState, useEffect} from 'react';
import Online from './Onlineapp';


import './Com.css';


function Other({value}) {
    const [items, setItems] = useState([]);
    const [id, setId] = useState();

    const [data, setData] = useState([]);
    const [fdata, setFdata] = useState([]);

    const [popup, setPopup] = useState(false);

    const [edit, setEdit] = useState(true);

    const [editname, setEditname] = React.useState('');
    const [name, setName] = React.useState('');

    const [editfname, setEditfname] = React.useState();
    const [fname, setFname] = React.useState();

    const [idata, setIdata] = React.useState();
    const [updatemessage, setUpdatemessage] = React.useState();


    useEffect((props) => {
        axios.get('http://localhost:4000/api/customers')
            .then(res => {
                console.log(res)
                setItems(res.data)
            })
    },[])

    function sayHello(name) {

        const id = {
            id: name
        };
        axios.post('http://localhost:4000/deleting', id)
            .then((res) => {
                setId(res.data)
                console.log(id)
            })
    }

    console.log(typeof editname, '33')
    function handleChange(e) {
        setName(e.target.value);
    }

    function handleChangee(ev) {
        setFname(ev.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault()

        console.log(typeof name)

        const dataUpdate = {
            id : idata,
            name: name,
            fname: fname
        };

        // const data = JSON.stringify(userObject)

        axios.post('http://localhost:4000/update', dataUpdate)
            .then((res) => {
            });
    };

    function popUp(data) {
        setPopup(true)
    }

    function clicMe(item) {
        setEdit(!edit);
        setIdata(item.id);
        setEditname(item.name);
        setEditfname(item.fname);
    }

    return (
        <div className=""><br/>

            <Link to="/Second">
                <button type="button" class="btn btn-info">Back</button>
                <Link to="/Online">
                    <button type="button" class="btn btn-success "><b>Insert Data</b></button>
                </Link>
            </Link>

            {updatemessage}
            <h2> </h2>

            {edit ?

                <table class="table table-hover table-dark">
                    <thead>
                    <tr style={{alignItems: "center"}}>
                        <th scope="col">Sl</th>

                        <th scope="col">Name</th>
                        <th scope="col">Father Name</th>
                        <th scope="col">Age</th>
                        <th scope="col">Action</th>
                    </tr>
                    </thead>


                    <tbody>
                    {items.map((item, index) => <tr key={index}>
                            <td>{item.id}</td>
                            <td><ContentEditable html={item.name}/></td>
                            <td><ContentEditable html={item.fname}/></td>
                            <td>{item.age}</td>
                            <td>
                                <button class="btn btn-danger" onClick={() => sayHello(item.id)}>Delete</button>
                                &nbsp;
                                <button class="btn btn-info" onClick={() => clicMe(item)}>Edit</button>
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>

                :

                <div className="container">
                    <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Update Name</label>
                        <input type="text" Value={editname} onChange={handleChange}
                               className="form-control text-dark bg-warning" autofocus/>
                    </div>
                    <div className="form-group">
                        <label>Update Father Name</label>
                        <input type="text" Value={editfname} onChange={handleChangee}
                               className="form-control text-dark bg-warning" autofocus/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Update Data" className="btn btn-success btn-block"/>
                    </div>
                    </form>
                </div>

            }

        </div>
    )
}


export default Other