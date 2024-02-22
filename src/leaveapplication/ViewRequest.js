import React, { useEffect, useState } from "react";
import "./cardd.css";
import axios from "axios";
import { Link } from "react-router-dom";
function ViewRequest() {
  const [leaves, setLeaves] = useState([]);
  useEffect(() => {
    getdata();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  async function handleapprove(i){
    let ans = prompt("Enter Your Hd id :")
    if(ans==="12"){
      const val = await axios.get(`https://employee-tracker-backend-production-b1a1.up.railway.app/leave/${i}`);
      const res = val.data;
      res.status = true
      await axios.put(`https://employee-tracker-backend-production-b1a1.up.railway.app/leave/${i}`,res)
      getdata()
    }else{
      alert("Invalid hr Id")
    }
  }
  async function handlereject(i){
    let ans = prompt("Enter Your Hd id :")
    if(ans==="12"){
      const val = await axios.get(`https://employee-tracker-backend-production-b1a1.up.railway.app/leave/${i}`);
      const res = val.data;
      res.status = false
      await axios.put(`https://employee-tracker-backend-production-b1a1.up.railway.app/leave/${i}`,res)
      getdata()
    }else{
      alert("Invalid hr Id")
    }
  }
  async function getdata() {
    const res = await axios.get("https://employee-tracker-backend-production-b1a1.up.railway.app/leaves");
    setLeaves(res.data);
  }
  async function handledel(i){
      await axios.delete(`https://employee-tracker-backend-production-b1a1.up.railway.app/leave/${i}`)
      getdata()
  }
  
  return (
    <>
      <div className="pos">
        <div className="btnpos">
          <Link to="postrequest">
            <button className="btn  btn-lg btn-outline-primary">
              Request Leave
            </button>
          </Link>
        </div>
        {leaves.map((index, id) => (
          <div
            className="card con "
            style={{
              borderStyle: "solid",
              borderWidth: "3px",
              borderColor:index.status ? "green" : "red"
            }}
            key={id}
          >
            <div className="card-body">
              <h5 className="card-title">Name : {index.name}</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                Date : {index.date}
              </h6>
              <p className="card-text" style={{fontWeight:"bold"}}>
                Status : {index.status ? "Approved" : "Not Approved"}
              </p>
              <p className="card-text">Reason : {index.details}</p>
              <button onClick={()=>handleapprove(index.id)} className="btn btn-primary card-link">Approve</button>
              <button onClick={()=>handlereject(index.id)} className="card-link btn btn-primary">Reject</button>
              <button onClick={()=>{handledel(index.id)}} className="btn btn-danger card-link">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ViewRequest;
