import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddUser from "./users/AddUser";
import EditUser from "./users/EditUser";
import ViewUser from "./users/ViewUser";
import Logout from "./users/Logout";
import ViewTickets from "./tickets/ViewTickets";
import NewTickets from "./tickets/NewTickets";
import ViewRequest from "./leaveapplication/ViewRequest";
import PostRequest from "./leaveapplication/PostRequest";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route exact path="/leaverequests/postrequest" element={<PostRequest/>} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/leaverequests" element={<ViewRequest />} />
          <Route exact path="/adduser" element={<AddUser />} />
          <Route exact path="/tickets" element={<ViewTickets />} />
          <Route exact path="/logoutuser/:id" element={<Logout />} />
          <Route exact path="/newticket" element={<NewTickets />} />
          <Route exact path="/edituser/:id" element={<EditUser />} />
          <Route exact path="/viewuser/:id" element={<ViewUser />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
