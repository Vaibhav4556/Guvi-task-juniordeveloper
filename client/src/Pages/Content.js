import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import DragPage from "./DragPage";
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import DragAPIcode from "./DragAPIcode";
function Content() {
  const [data, setData] = useState({
    email: "",
    phone: "",
    profession: "",
    userName: "",
  });

  const [showAddtask, setShowAddtask] = useState(false)
  const handleCloseAddtask=()=>{
    setShowAddtask(false)
  }

  const handleShowAddtask=()=>{
    setShowAddtask(true)
  }
  const Token = localStorage.getItem("token");

  useEffect(() => {
    axios

      .get("http://localhost:3003/content", {
        headers: {
          Token,
        },
      })
      .then((response) => {
        // setData(...data, setData({userName : response.data.message.userName ,email : response.data.message.email,phone:response.data.message.phone, profession : response.data.message.profession }))

        setData({
          ...data,
          email: response.data.message.email,
          phone: response.data.message.phone,
          profession: response.data.message.profession,
          userName: response.data.message.userName,
        });

        console.log(response.data.message.userName);

        // setData({email : response.data.message.email })
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div
      className="container shadow-lg p-3 mb-5 bg-body rounded"
      style={{ maxwidth: "60%", marginTop: "5%" }}
    >
      {/* <form method="GET">
        <div className="row">
          <div className="col-md-4">
          <img  src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" width="200px" alt="userprofile"/>
          </div>
          <div className="col-md-6" style={{marginTop:"10%"}}>
            <div className="profile-head">
                <h5>Vaibhav Burde</h5>
                <h6>Web Developer</h6>
            </div>
          </div>

          <div className="col-md-2" style={{marginTop:"5%"}}>
            <input  type="submit" className="profile-edit-btn" value="Edit Profile"/>
          </div>

        </div>
       
       <div className="row" style={{marginLeft:"33%"}}>
        <div className="col-md-6" >
        <label > User Name</label>
        
        </div>
        <div className="col-md-6">
        <p>{data.userName}
        </p>
        </div>

       </div>
       <div className="row" style={{marginLeft:"33%"}}>
        <div className="col-md-6">
        <label > Email Id</label>
        
        </div>
        <div className="col-md-6">
        <p>{data.email}</p>
        </div>

       </div>
       <div className="row" style={{marginLeft:"33%"}}>
        <div className="col-md-6">
        <label >Phone Number</label>
        
        </div>
        <div className="col-md-6">
        <p>{data.phone}</p>
        </div>
        <div className="row">
        <div className="col-md-6">
        <label >Profession</label>
        
        </div>
        <div className="col-md-6">
        <p>{data.profession}</p>
        </div>

       </div>

       </div>
      </form> */}
      <button type="button" className="btn btn-primary" style={{marginBottom:"10px"}} onClick={handleShowAddtask} >
        {/* <NavLink style={{ color: "white", textDecoration: "none" }} to="./"> */}
          Add Task
        {/* </NavLink> */}
      </button>
      <Dialog
        open={showAddtask}
        onClose={handleCloseAddtask}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth
      >
        <div style={{padding:"20px 20px"}}>
        <DialogTitle id="alert-dialog-title">
          Fill the task details
        </DialogTitle>
        <div style={{padding:"10px" ,display:"flex", flexDirection:"column",gap:"20px"}}>
        <TextField id="outlined-basic" label="Title" variant="outlined" />
        <TextField id="outlined-basic" label="Description" variant="outlined" />
        </div>
        </div>
        <Button variant="contained" style={{margin:"30px",textTransform:"none"}}>Add Task</Button>
      </Dialog>
      <div>
        {/* <DragPage/> */}
        <DragAPIcode/>
      </div>
    </div>
  );
}

export default Content;
