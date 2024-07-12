import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./screens/Login";
import Register from "./screens/Register";
import { LandingPage } from "./screens/LandingPage";
import ForgotPassword from "./screens/ForgotPassword";
    

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route index element={<Login />}></Route>
          <Route path="register" element={<Register />}></Route>
          <Route path="landing" element={<LandingPage />}></Route>
          <Route path="forgot-password" element={<ForgotPassword />}></Route>
          
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
