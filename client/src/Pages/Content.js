import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";


function Content() {
  const [data, setData] = useState({email : '', phone: '',profession: '',userName : '' });
  const Token = localStorage.getItem("token");

  
  useEffect(() => {

  

    axios

      .get("http://localhost:3003/content",{headers :{
Token
      } } )
      .then(response =>{
        // setData(...data, setData({userName : response.data.message.userName ,email : response.data.message.email,phone:response.data.message.phone, profession : response.data.message.profession }))
        
    setData({ ...data, email:response.data.message.email,phone : response.data.message.phone,profession : response.data.message.profession,userName : response.data.message.userName })

    console.log(response.data.message.userName);
      
        // setData({email : response.data.message.email })
      
      } ).catch(err => console.log(err))
     
    
  },[]);



  return (
    // <div className="container-fluid" style={{display:'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr', height:"1vh",width:"100%",marginTop:"2rem"}}>
      
     
    //     {data.map((data, key) => {
    //     return (
          
    //   <div className="m-1 p-1 shadow bg-white rounded card">
    //     <img src={data.image} className="card-img-top" alt="products"  style={{height:"12rem"}} />
    //     <div className="card-body">
    //       <h6 className="card-title " style={{maxHeight:"10rem", marginBottom:"2px"}} >{data.title} </h6>
    //       <p className="p-1 m-1"  style={{fontWeight:"bold"}}>{data.category}</p>
    //       <p className="card-text " style={{height:"8rem",overflow:"auto"}}>
    //       {data.description}
    //       </p>
    //       <h5 className="p-1 m-1" >${data.price} <button type="button" class="btn btn-warning">Add to Cart</button></h5>
        
    //      </div>
    //     </div>
      
    //     )})}
    // </div>
    <div className="container shadow-lg p-3 mb-5 bg-body rounded" style={{maxwidth:"60%", marginTop:"5%"}}>
      <form method="GET">
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
      </form>
     
    </div>
  );
}

export default Content;
