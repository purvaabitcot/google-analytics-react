import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "./firebase";

const Login = () => {
    const defaultForm = {
        email : "",
        password : ""
    }

    const [form,setForm] = useState(defaultForm);

    const handleChange = (e) =>{
        const {name,value} = e.target;
        setForm({...form,[name] : value})
    }

    const loginUser = async (e) => {
      e.preventDefault();
      await signInWithEmailAndPassword(auth,form.email,form.password);
      console.log("user logged in successfully");
  };
  
  return (
    <div>
      <form onSubmit={loginUser}>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={handleChange}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={form.password}
            className="form-control"
            id="exampleInputPassword1"
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <span>If you have not registered so please <Link to={"/register"}>click here</Link></span>
    </div>
  );
};

export default Login;
