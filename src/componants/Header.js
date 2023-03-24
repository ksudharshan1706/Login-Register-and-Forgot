//rafce
import React from "react";
import "./header.css";
import Avatar from "@mui/material/Avatar";

const Header = () => {
  return (
    <header>
      <nav>
        <h1>Login Task</h1>
        <div className="avtar">
          <Avatar style={{ backgroundColor: "#2a4365" }}>H</Avatar>
        </div>
      </nav>
    </header>
  );
};

export default Header;
