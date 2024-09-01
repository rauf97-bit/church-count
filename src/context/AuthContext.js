// src/AuthContext.js
import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

// Create AuthContext
const UserContext = createContext();

// AuthProvider component
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
    // const login = async (email, password) => {
    try {
      // const response = await axios.post(
      //   `${API_BASE_URL}/api/v1/auth/Login/Worker`,
      //   { Email: email, Password: password }
      // );
      // const userData = response.data;

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

      // Check if the response is okay (status in the range 200-299)
      // if (!response.ok) {
      //   throw new Error(`HTTP error! status: ${response.status}`);
      // }

      const userData = await response.json();

      if (userData.worker && typeof userData.worker === "object") {
        setUser(userData.worker);
        setLoading(false)
        localStorage.setItem("user", JSON.stringify(userData.worker));
      } else {
        console.error("Unexpected response format:", userData.worker);
      }
    } 
    catch (error) {
      console.error("Error during login:", error);
      throw error;
    }
  };

  // Logout function
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };
  //!loading &&
  return (
    <UserContext.Provider value={{ user, loading, signUp, login, logout }}>
      {children}  
    </UserContext.Provider>
  );
};

// Custom hook to use the UserContext
export const UserAuth = () => useContext(UserContext);

// // src/AuthContext.js
// import React, { createContext, useState, useContext, useEffect } from "react";
// import axios from "axios";
// // import dotenv from "dotenv"

// // Create AuthContext
// const UserContext = createContext();

// // AuthProvider component
// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // Mock API URLs

//   const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
//   //"https://church-count.onrender.com"; // Replace with your backend API URL

//   // Load user from localStorage on initial load
//   useEffect(() => {
//     const storedUser = JSON.parse(localStorage.getItem("user"));
//     if (storedUser) {
//       setUser(storedUser);
//     }
//     setLoading(false);
//   }, []);

//   // Sign up function
//   const signUp = async (
//     email,
//     fname,
//     lname,
//     unit,
//     phonenumber,
//     password,
//     confirmPassword
//   ) => {
//     try {
//       const response = await axios.post(
//         `${API_BASE_URL}/api/v1/auth/Register/Worker`,
//         {
//           Email: email,
//           FirstName: fname,
//           LastName: lname,
//           Unit: unit,
//           PhoneNumber: phonenumber,
//           Password: password,
//           ConfirmPassword: confirmPassword,
//         }
//       );
//       const userData = response.data;
//       setUser(userData);
//       localStorage.setItem("user", JSON.stringify(userData));
//     } catch (error) {
//       //console.error("Error during sign up:", error);
//       throw error;
//     }
//   };

//   // Login function
//   const login = async (email, password) => {
//     try {
//       //const response = await axios.post(`${API_BASE_URL}/api/v1/auth/Login/Worker`, { email, password });
//       //   console.log(process.env);
//       const response = await axios.post(
//         `${API_BASE_URL}/api/v1/auth/Login/Worker`,
//         { Email: email, Password: password }
//       );
//       const userData = response.data;
//       setUser(userData && userData);
//       localStorage.setItem("user", JSON.stringify(userData && userData));
//     } catch (error) {
//       //   console.log(process.env);

//       //console.error("Error during login:", error);
//       throw error;
//     }
//   };

//   // Logout function
//   const logout = () => {
//     setUser(null);
//     localStorage.removeItem("user");
//   };

//   return (
//     <UserContext.Provider value={{ user, loading, signUp, login, logout }}>
//       {!loading && children}
//     </UserContext.Provider>
//   );
// };

//   // Custom hook to use the UserContext
//   export const UserAuth = () => useContext(UserContext);
