import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./screens/Login";
import Register from "./screens/Register";
import { LandingPage } from "./screens/LandingPage";
import ForgotPassword from "./screens/ForgotPassword";
import Attendance from "./screens/Attendance";
import { AuthProvider } from "./context/AuthProvider";
    

function App() {
  
  return (
    <AuthProvider>
    {({ user, signUp, login, logout }) => (

    <Router>
      <Routes>
        <Route path="/">
          <Route index element={<Login login={login} />}></Route>
          <Route path="register" element={<Register signup={signUp} />}></Route>
          <Route path="landing" element={<LandingPage loggedUser={user} logout={logout}/>}></Route>
          <Route path="attendance" element={<Attendance />}></Route>
          <Route path="forgot-password" element={<ForgotPassword />}></Route>
          
        </Route>
      </Routes>
    </Router>
    )}
    </AuthProvider>
  );
}

export default App;
