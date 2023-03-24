import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { API } from "../global.js";
import "./mix.css";
const Register = () => {
  const [passshow, setpassshow] = useState(false);
  const [confirmpassshow, setconfirmpassshow] = useState(false);

  const [inpval, setinpval] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  //   console.log(inpval);
  const setVal = (e) => {
    // console.log(e.target.value);
    const { name, value } = e.target;
    setinpval(() => {
      return {
        ...inpval,
        [name]: value,
      };
    });
  };

  const addUserdata = async (e) => {
    e.preventDefault();
    const { name, email, password, confirmpassword } = inpval;
    if (name === "") {
      alert("Please enter your name");
    } else if (email === "") {
      alert("Please enter your email");
    } else if (!email.includes("@")) {
      alert("Please enter valid email address");
    } else if (password === "") {
      alert("Please enter password");
    } else if (password.length < 6) {
      alert("password should be atleast 6 charecters");
    } else if (confirmpassword === "") {
      alert("Please enter confirm password");
    } else if (confirmpassword.length < 6) {
      alert("confirm password should be atleast 6 charecters");
    } else if (password !== confirmpassword) {
      alert("Password and Confirm Password must be same");
    } else {
      // console.log("user registration done successfully!", `${API}/register`);
      const data = await fetch(`${API}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password, confirmpassword }),
      });
      const res = await data.json();
      console.log(res);
      if (res.status == 201) {
        alert("user registration done");
        setinpval({
          ...inpval,
          name: "",
          email: "",
          password: "",
          confirmpassword: "",
        });
      }
    }
  };

  return (
    <section>
      <div className="form_data">
        <div className="form_heading">
          <h1>Sign Up</h1>
          <p style={{ textAlign: "center" }}>
            We are glad that you will be using this cloud for your task. <br />
            we hope that you will like it
          </p>
        </div>
        <form>
          <div className="form_input">
            <label htmlFor="email">Name:</label>
            <input
              type="name"
              onChange={setVal}
              value={inpval.name}
              name="name"
              id="name"
              placeholder="Enter Your Name"
            ></input>
          </div>
          <div className="form_input">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              onChange={setVal}
              value={inpval.email}
              name="email"
              id="email"
              placeholder="Enter Your Email Address"
            ></input>
          </div>
          <div className="form_input">
            <label htmlFor="password">Password:</label>
            <div className="two">
              <input
                type={!passshow ? "password" : "text"}
                onChange={setVal}
                value={inpval.password}
                name="password"
                id="password"
                placeholder="Enter Your Password"
              ></input>
              <div className="showpass" onClick={() => setpassshow(!passshow)}>
                {" "}
                {!passshow ? "Show" : "Hide"}
              </div>
            </div>
          </div>
          <div className="form_input">
            <label htmlFor="confirmpassword">confirm password:</label>
            <div className="two">
              <input
                type={!confirmpassshow ? "password" : "text"}
                onChange={setVal}
                value={inpval.confirmpassword}
                name="confirmpassword"
                id="confirmpassword"
                placeholder="Enter Your confirm password"
              ></input>
              <div
                className="showpass"
                onClick={() => setconfirmpassshow(!confirmpassshow)}
              >
                {" "}
                {!confirmpassshow ? "Show" : "Hide"}
              </div>
            </div>
          </div>
          <button className="btn" onClick={addUserdata}>
            Sign Up
          </button>
          <p>
            Already Have an Account? <NavLink to="/">Login</NavLink>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Register;
