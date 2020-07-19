import axios from 'axios';
import {Link} from "react-router-dom";
import ContentEditable from 'react-contenteditable';
import React, {Component, useState, useEffect } from 'react';
 
  
import './Com.css'; 
 

function Other(props) {
  const [items, setItems] = useState([]);
  const [id, setId] = useState();

  const [data, setData] = useState([]);
  const [fdata, setFdata] = useState([]);

  const [popup, setPopup] = useState(false);

  const [edit, setEdit] = useState(true);
  
  const [name, setName] = useState(true);
  const [fname, setFname] = useState(true);
 


onChangeName = onChangeName.bind(this);
onChangeFname = onChangeFname.bind(this);
onSubmit = onSubmit.bind();
 
  useEffect(() => {
    axios.get('http://localhost:4000/api/customers')
    .then(res => {
      console.log(res)
      setItems(res.data)
      })
  })


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

 
function clicMe(item){
    setEdit(!edit);  
    setName(item.name); 
    setFname(item.fname);

}
 


function popUp(data){
  setPopup(true)
}

useEffect(() => {
    const handleEsc = (event) => {
       if (event.keyCode == 32) {
        console.log('dfdsafdsfdsfdf')
        setPopup(false)
      }
    } 
  },[]);

  
onSubmit: function(e){
  e.preventDefault();
  console.log(refs.name);
}

    return (
      <div className="">
        
      <br />
      <Link to="/Second"> <button type="button" class="btn btn-info">Back</button></Link>
      <button class="btn btn-danger" onClick={popUp.bind(data)}>PopUP</button>
      {id}

      
 

      {popup ?  
        <div className="popup"> 
          <h4>Bangladesh</h4>
          <input type="text" name=""/>
        </div> 

        : ''}
       

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
      {items.map((item, index) => (
            <tr key={index}>
              <td>{index+1}</td>
              <td><ContentEditable html={item.name}/></td>
              <td><ContentEditable html={item.fname}/></td>
              <td>{item.age}</td>
              <td><button class="btn btn-danger" onClick={() => sayHello(item.id)}>Delete</button>&nbsp;
                <button class="btn btn-info" onClick={clicMe.bind(this,item)}>Edit</button></td> 
            </tr>

      ))}
  </tbody>
</table> 

      : 
                   <form onSubmit={onSubmit}>
                    <div className="">
                    <div className="form-group">
                        <label>Add User Name</label>
                        <input type="text" value={name} ref="name" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Add User Email</label>
                        <input type="text" value={fname} ref="fname" className="form-control" />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Update User" className="btn btn-success btn-block" />
                    </div>
                    </form>
                    </div>
}
 
 
        
  </div>
  )
}




export default Other