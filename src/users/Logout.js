import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useState,useEffect } from 'react';
import axios from 'axios';
function Logout() {
    const navigate = useNavigate();

    const [user, setUser] = useState({
        name: "",
        inTime: "",
        logOut:"",
        workdone:"",
        email: "",
      });
      const { workdone} = user;
      const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
      };
      async function handlesubmit(){
        setFilled(true);
        await axios.put(`https://employee-tracker-backend-production-b1a1.up.railway.app/user/${id}`, user);
        //navigate("/");
        
      }
    const {id} = useParams();
    async function handlelogout(id){
        user.logOut = currtime();
        await axios.put(`https://employee-tracker-backend-production-b1a1.up.railway.app/user/${id}`, user);
        navigate("/");
    }
    function currtime(){
        let d = new Date()
        return d.toLocaleTimeString('it-IT'); 
    }

      useEffect(() => {
        loadUser();
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);
      const loadUser = async () => {
        const result = await axios.get(`https://employee-tracker-backend-production-b1a1.up.railway.app/user/${id}`);
        setUser(result.data);
      };
      const [filled,setFilled] = useState(false);
  return (
    <>
    <label>Fill the work done by you today Before you logout</label>

    <div className="input-group frm">
  <div className="input-group-prepend">
    <span className="input-group-text"></span>
  </div>
  <textarea  name="workdone"
                value={workdone}
                onChange={(e) => onInputChange(e)}class="form-control" aria-label="With textarea"></textarea>
  <button onClick={handlesubmit} className='btn btn-primary'>Submit</button>
</div>
    { filled &&
    <>
     <label >Do you wish to logout </label>
     <br></br>
     <button className='btn btn-primary my-2' onClick={()=>handlelogout(id)}>Yes</button>
     <Link to="/">
     <button className='btn btn-outline-danger mx-2' >No</button>
     </Link>
     </>
    }
   
   
    
    </>
  )
}

export default Logout