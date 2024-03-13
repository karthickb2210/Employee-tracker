import React from 'react'
import axios from 'axios';
import {useNavigate } from 'react-router-dom';
import { useState } from 'react';
function PostRequest() {
    const navigate = useNavigate();
    const [leave, setLeave] = useState({
      id: "",
      name: "",
      date: "",
      status: "",
      details: "",
    });
    let { id, name, date , details } = leave;
  
    const onInputChange = (e) => {
        setLeave(leave.status=false)
      setLeave({ ...leave, [e.target.name]: e.target.value });
    };
    const onsubmit = async (e) => {
      console.log(leave);
      e.preventDefault();
      await axios.post("https://employee-check.onrender.com/leave", leave);
      navigate("/");
    };
  



  return (
    <>
     <div className="container contact-form">
      <div className="contact-image">
        <img
          src="https://image.ibb.co/kUagtU/rocket_contact.png"
          alt="rocket_contact"
        />
      </div>
      <form onSubmit={(e) => onsubmit(e)}>
        <h3>Drop the leave request details</h3>
        <div className="row">
          <div className="col-md-6 my-8">
            <div className="form-group my-3">
              <input
                type="text"
                onChange={(e) => onInputChange(e)}
                name="id"
                value={id}
                className="form-control"
                placeholder="Employee id *"
              />
            </div>
            <div className="form-group my-3">
              <input
                type="text"
                onChange={(e) => onInputChange(e)}
                name="name"
                value={name}
                className="form-control"
                placeholder="Your Name *"
              />
            </div>
            <div className="form-group my-3">
              <input
                type="text"
                onChange={(e) => onInputChange(e)}
                name="date"
                value={date}
                className="form-control"
                placeholder="Date of leave *"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <textarea
                name="details"
                value={details}
                onChange={(e) => onInputChange(e)}
                className="form-control my-3"
                placeholder="Reason for leave *"
              ></textarea>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
    </>
  )
}

export default PostRequest