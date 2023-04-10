import React, { useEffect } from "react";
import { API } from "../global";

const Dashboard = () => {
  const DashBoardValid = async () => {
    let token = localStorage.getItem("usersdatatoken");
    const res = fetch(`${API}/validuser`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-auth": token,
      },
    });
    const data = await res.json();
    console.log(data);
  };
  useEffect(() => {
    DashBoardValid();
  }, []);
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          src="https://static.vecteezy.com/system/resources/previews/003/773/576/original/business-man-icon-free-vector.jpg"
          alt="dashlogo"
          style={{ width: "500px", height: "300px", marginTop: 20 }}
        />
        <h1>User email: Sudharshan@gmail.com</h1>
      </div>
    </>
  );
};

export default Dashboard;
