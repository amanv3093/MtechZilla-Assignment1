import React from "react";
import "./App.css";
import Login from "./component/Login/Login";
import Timer from "./component/Timer/Timer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/timer" element={<Timer />} />
      </Routes>
    </Router>
  );
}

export default App;
