import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";



export default function AddUser() {

        let navigate = useNavigate();

        const [user,setUser] = useState({
                name: "",
                username : "",
                email:""
        })

        const {name,username,email} = user;

        const onInputChange = (e) => {
                setUser({ ...user, [e.target.name]: e.target.value });
              };
            
              const onSubmit = async (e) => {
                e.preventDefault();
                await axios.post("http://localhost:8080/user", user);
                navigate("/");
              };  return (
    <div>
        <div className="conatiner">
                <div className="row">
                        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                                <h1 className='text-center'>Register User</h1>
                                <form onSubmit={(e) => onSubmit(e)}>
                                <div className="mb-3">
                                        <label htmlFor="" className="form-label"><strong>Name:</strong></label><br></br>
                                        <input type={"text"} className='form-control' placeholder='Enter your name' value={name} name='name'  onChange={(e) => onInputChange(e)} />
                                </div>
                                <div className="mb-3">
                                        <label htmlFor="" className="form-label"><strong>username:</strong></label><br></br>
                                        <input type={"text"} className='form-control' placeholder="Enter your username" value={username} name="username"  onChange={(e) => onInputChange(e)} />
                                </div>
                                <div className="mb-3">
                                        <label htmlFor="" className="form-label"><strong>Email:</strong></label><br></br>
                                        <input type={"text"} className='form-control'  placeholder="Enter your e-mail address" value={email} name="email"  onChange={(e) => onInputChange(e)} />
                                </div>
                                <button type="submit" className="btn btn-outline-primary">
                                  Done
                                </button>
                               
                                <Link className="btn btn-outline-danger mx-2" to="/">
                                Cancel
                                </Link>
                                </form>
                        </div>
                </div>
        </div>
    </div>
  );
}
