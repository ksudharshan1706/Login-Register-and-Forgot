import logo from "./logo.svg";
import Header from "./componants/Header";
import Login from "./componants/Login";
import Register from "./componants/Register";
import { Routes, Route } from "react-router-dom";
// import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
