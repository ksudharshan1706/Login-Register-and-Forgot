import React, { useState } from "react";
import "./mix.css";
import { NavLink } from "react-router-dom";
import Register from "./Register";
import { API } from "../global";
const Login = () => {
  const [passshow, setpassshow] = useState(false);
  const [inpval, setinpval] = useState({
    email: "",
    password: "",
  });
  //   console.log(inpval);

  const setVal = (e) => {
    const { name, value } = e.target;
    setinpval(() => {
      return {
        ...inpval,
        [name]: value,
      };
    });
  };

  const loginUser = async (e) => {
    e.preventDefault();
    const { email, password } = inpval;
    if (email === "") {
      alert("Please enter your email");
    } else if (!email.includes("@")) {
      alert("Please enter valid email address");
    } else if (password === "") {
      alert("Please enter password");
    } else if (password.length < 6) {
      alert("password should be atleast 6 charecters");
    } else {
      // console.log("User Login done successfully!");
      const data = await fetch(`${API}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const res = await data.json();
      console.log(res);
      if (res.status == 201) {
        // alert("user login done");
        localStorage.setItem("usersdatatoken", res.result.tokens);
        setinpval({
          ...inpval,
          email: "",
          password: "",
        });
      } else if (res.status == 400) {
        alert("invalid Credentials");
        setinpval({
          ...inpval,
          email: "",
          password: "",
        });
      }
    }
  };
  return (
    <section>
      <div className="form_data">
        <div className="form_heading">
          <h1>Welcome Back, Log In</h1>
          <p>Hi, we are glad you are back. Please login.</p>
        </div>
        <form>
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
                name="password"
                onChange={setVal}
                value={inpval.password}
                id="password"
                placeholder="Enter Your Password"
              ></input>
              <div className="showpass" onClick={() => setpassshow(!passshow)}>
                {" "}
                {!passshow ? "Show" : "Hide"}
              </div>
            </div>
          </div>
          <button className="btn" onClick={loginUser}>
            Login
          </button>
          <p>
            Don't have an Account? <NavLink to="/register">Sign up</NavLink>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;
