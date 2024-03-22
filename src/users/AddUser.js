import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddUser() {
  let navigate = useNavigate();
  const url = "https://employee-check.onrender.com/";
  const [user, setUser] = useState({
    id:"",
    name: "",
    date:"",
    inTime: "",
    logOut:"",
    email: "",
  });
  
  let { id ,name, email } = user;
  

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value  });
    // setUser(inTime = currtime());
  };
  function currtime(){
    let d = new Date();
    return d.toLocaleTimeString('it-IT');
  }
  function currdate(){
    let d = new Date();
    var dd = String(d.getDate()).padStart(2, '0');
  var mm = String(d.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = d.getFullYear();

d = mm + '/' + dd + '/' + yyyy;
return d; 
  }

  const onSubmit = async (e) => {
    
    
    e.preventDefault();
    setUser(user.date = currdate())
    setUser(user.inTime= currtime())
    await axios.post(`${url}user`, user);
    navigate("/");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Register User</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Id
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your id"
                name="id"
                value={id}
                onChange={(e) => onInputChange(e)}
              />
               <label htmlFor="Name" className="form-label">
                Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your name"
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            {/* <div className="mb-3">
              <label htmlFor="Username" className="form-label">
                Intime
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your LoginTime"
                name="inTime"
                value={inTime}
                value={date}
                onChange={(e) => onInputChange(e)}
              />
            </div> */}
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                E-mail
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your e-mail address"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
