import React, { useState } from "react";
import "./tickets.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function NewTickets() {
  const navigate = useNavigate();
  const [ticket, setTicket] = useState({
    id: "",
    name: "",
    ticketype: "",
    department: "",
    details: "",
  });
  let { id, name, ticketype, department, details } = ticket;

  const onInputChange = (e) => {
    setTicket({ ...ticket, [e.target.name]: e.target.value });
  };
  const onsubmit = async (e) => {
    console.log(ticket);
    e.preventDefault();
    await axios.post("https://employee-check.onrender.com/ticket", ticket);
    navigate("/tickets");
  };

  return (
    // <label>Enter the details of the ticket  to be raised</label>
    <div className="container contact-form">
      <div className="contact-image">
        <img
          src="https://image.ibb.co/kUagtU/rocket_contact.png"
          alt="rocket_contact"
        />
      </div>
      <form onSubmit={(e) => onsubmit(e)}>
        <h3>Drop the issue details you are facing</h3>
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
                name="ticketype"
                value={ticketype}
                className="form-control"
                placeholder="Ticket Type *"
              />
            </div>
            <div className="form-group my-3">
              <input
                type="text"
                onChange={(e) => onInputChange(e)}
                name="department"
                value={department}
                className="my-3 form-control"
                placeholder="Department *"
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
                placeholder="Issue Details *"
              ></textarea>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewTickets;
