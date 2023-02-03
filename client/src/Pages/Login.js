import React, { useState,useEffect } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";

function Login() {
  const [data,setData]=useState()
  const navigate = useNavigate()
  const [user, setUser] = useState({
    email: "",
    password: "",
 
  });

  const handleSubmit = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const register = () => {
    const { email, password} = user;
  
    if (email && password) {
      
        console.log(user);

        axios
        .get("http://localhost:3003/content" )
        .then(response => console.log(response.data))

        axios
            .post("http://localhost:3003/login", user)
            .then(res => {
                setData(res.data.message)
                if(res.data.token)
               localStorage.setItem('token', res.data.token)
              
              });
            
              // !localStorage.getItem("token") ? navigate("/registration"):navigate("/")
            
    } else {
      alert({data});
      
    }
    
  };

  const Token = localStorage.getItem("token");

  //token availbale in storage redirect to localstorage
  useEffect(() => {
    Token?
    navigate("/content", { replace: true }):<></>
  }, [Token]);


  return (
    <>
      <div
        className="shadow-lg p-3 mb-5 bg-body rounded "
        style={{ width: "500px", margin: "auto", marginTop: "100px" }}
      >
        <h3>Login Page</h3>
        <div className="mb-3 row mt-4">
          <label htmlFor="email" className="col-sm-2 col-htmlForm-label">
            Email
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="htmlForm-control"
              name="email"
              id="email"
              value={user.email}
              onChange={handleSubmit}
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="password" className="col-sm-2 col-htmlForm-label">
            Password
          </label>
          <div className="col-sm-10">
            <input
              type="password"
              className="htmlForm-control"
              id="password"
              name="password"
              value={user.password}
              onChange={handleSubmit}
            />
          </div>
        </div>

       
        <button
          onClick={register}
          type="button"
          className="btn btn-primary"
          style={{ marginLeft: "380px" }}
        >
          Login
        </button>
        <h5 style={{color:"red"}}>{data}</h5>
      
      </div>
    </>
  );
}

export default Login;
