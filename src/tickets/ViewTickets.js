import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
function ViewTickets() {
  const url = "https://employee-check.onrender.com/"
  const [ticket, setTicket] = useState([]);
  useEffect(() => {
    gettickets();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  async function gettickets() {
    const tic = await axios.get(`${url}ticket`);
    setTicket(tic.data);
  }
  async function deleteTicket(id) {
    await axios.delete(`${url}tickets/${id}`);
    gettickets();
  }
  return (
    <>
      <Link to="/newticket">
        <button className="btn btn-lg btn-outline-primary d-flex flex-row-reverse my-3 mx-3">
          Post Ticket
        </button>
      </Link>
      {ticket.map((ticket, id) => (
        <div className="d-flex justify-content-center ">
          <div
            className="card border-success mb-3 "
            style={{ maxWidth: "18rem" }}
            key={id}
          >
            <div className="card-header bg-transparent border-success">
              From : {ticket.name}
            </div>
            <div className="card-body ">
              {/* <h5 class="card-title">{ticket.ticketype}</h5> */}
              <p className="card-text">Details : {ticket.details}</p>
            </div>
            <div className="card-footer bg-transparent border-success">
              Department : {ticket.department}
            </div>
            <button
              onClick={() => deleteTicket(ticket.id)}
              className="btn btn-outline-danger my-3"
            >
              Rectified
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

export default ViewTickets;
