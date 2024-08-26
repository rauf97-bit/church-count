// src/AuthProvider.js
import { useState, useEffect } from "react";
import axios from "axios";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // API Base URL
  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

  // Load user from localStorage on initial load
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
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
      const response = await axios.post(
        `${API_BASE_URL}/api/v1/auth/Register/Worker`,
        {
          Email: email,
          FirstName: fname,
          LastName: lname,
          Unit: unit,
          PhoneNumber: phonenumber,
          Password: password,
          ConfirmPassword: confirmPassword,
        }
      );
      const userData = response.data;
      setUser(userData);
      localStorage.setItem("user", JSON.stringify(userData));
    } catch (error) {
      console.error("Error during sign up:", error);
      throw error;
    }
  };

  // Login function
  const login = async (email, password) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/v1/auth/Login/Worker`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Email: email,
          Password: password,
        }),
      });

      const userData = await response.json();
      console.log(userData.worker);
      
      if (userData.worker && typeof userData.worker === "object") {
        setUser(userData.worker);
        console.log(userData.worker);
        
        localStorage.setItem("user", JSON.stringify(userData.worker));
      } else {
        console.error("Unexpected response format:", userData.worker);
      }
    } catch (error) {
      console.error("Error during login:", error);
      throw error;
    }
  };

  // Logout function
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    !loading &&
    children({
      user,
      signUp,
      login,
      logout,
    })
  );
};
