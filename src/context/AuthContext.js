// src/AuthContext.js
import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";
// import dotenv from "dotenv"

// Create AuthContext
const AuthContext = createContext();

// Custom hook to use the AuthContext
export const useAuth = () => useContext(AuthContext);

// AuthProvider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Mock API URLs

  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
  //"https://church-count.onrender.com"; // Replace with your backend API URL

  // Load user from localStorage on initial load
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
    setLoading(false);
  }, []);

  // Sign up function
  const signUp = async (
    email,
    fname,
    lname,
    unit,
    phonenumber,
    password,
    confirmPassword
  ) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/api/v1/auth/Register/Worker`, {
        Email:email,
        FirstName :fname,
        LastName :lname,
        Unit:unit,
        PhoneNumber:phonenumber,
        Password:password,
        ConfirmPassword:confirmPassword,
      });
      const userData = response.data;
      setUser(userData);
      localStorage.setItem("user", JSON.stringify(userData));
    } catch (error) {
      //console.error("Error during sign up:", error);
      throw error;
    }
  };

  // Login function
  const login = async (email, password) => {
    try {
      //const response = await axios.post(`${API_BASE_URL}/api/v1/auth/Login/Worker`, { email, password });
    //   console.log(process.env);
      const response = await axios.post(
        `${API_BASE_URL}/api/v1/auth/Login/Worker`,
        { Email: email, Password: password }
      );
      const userData = response.data;
      setUser(userData);
      localStorage.setItem("user", JSON.stringify(userData));
    } catch (error) {
    //   console.log(process.env);

      //console.error("Error during login:", error);
      throw error;
    }
  };

  // Logout function
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, loading, signUp, login, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
