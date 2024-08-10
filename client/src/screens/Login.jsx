import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import church from "../assets/images/church.png"
import {useAuth, user} from "../context/AuthContext.js"
import axios from "axios"
const Login = () => {
  //const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const {login} = useAuth()
  const [userData, setUserData] = useState({
    email: "",
    password:""
  });

  const navigate = useNavigate();
  const userHandler = (e) => {
    const { name, value } = e.target;
    // console.log(name + "::::" + value);
    setUserData((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
  };
  // const { dispatch } = useContext(AddUserContext);
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const loggedUser = await login(userData.email, userData.password)
      // console.log(userData.email, userData.password);
      navigate("/landing")
      // console.log(loggedUser);
    } catch (error) {
      throw error
      // console.log("Login failed, please try again after a while");
    }
    
  };

  
  return (
    <div>
      <section className="h-screen overflow-scroll overflow-x-hidden">
        <div className="px-2 h-full text-gray-800">
          <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
            
            <div className="mx-auto sm:mt-3 w-11/12 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-4 md:mb-0">
              <form onSubmit={handleSubmit}>
                {error && (
                  <p className="bg-red-500 p-3 my-2 text-base ">{error}</p>
                )}
                <p className="text-[24px] text-primaryTextColor text-center font-semibold my-10 sm:my-6 ">
                  Sign in
                </p>
                
                <div className="mb-[6px]">
                <label className="text-[14px] text-primaryTextColor">Email</label>
                  <input
                    type="text"
                    className="form-control block w-full px-4 text-[14px] font-normal text-secondaryTextColor bg-tertiaryTextColor2 py-2 bg-clip-padding  border-0 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-tertiaryTextColor2 focus:border focus:outline-none"
                    id="exampleFormControlInput1"
                    placeholder="Email address"
                    name="email"
                    value={userData.email}
                    onChange={userHandler}
                  />
                </div>
                

                <div className="mb-[6px]">
                <label className="text-[14px] text-primaryTextColor">Password</label>
                <input
                    type="password"
                    className="form-control block w-full px-4 text-[14px] font-normal text-secondaryTextColor bg-tertiaryTextColor2 py-2 bg-clip-padding  border-0 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-tertiaryTextColor2 focus:border focus:outline-none"
                    id="exampleFormControlInput2"
                    placeholder="Password"
                    name="password"
                    value={userData.password}
                    onChange={userHandler}
                  />

                  
                </div>

                <p className="text-base text-right mb-5 md:mb-0 text-tertiaryTextColor">
                <Link to={"/forgot-password"} className="underline text-primaryTextColor"> Forgot Password</Link>
                </p>
                <div>

                <div className="w-full flex justify-between items-center md:mt-3 my-2">
                  <div className="w-full text-center lg:text-left">
                    <button
                      type="submit"
                      className="inline-block w-full px-12 py-3 bg-primaryColor text-white font-medium text-sm leading-snug rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    >
                      Sign in
                    </button>
                  </div>
                </div>
                <p className="text-base mb-5 md:mb-0 text-tertiaryTextColor">
                  Don't have an account?  <Link to={"/register"} className="underline text-primaryTextColor"> Register</Link>
                </p>
                
                </div>
              </form>
            </div>

            <div className="grow-0 hidden lg:block shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
              <img
                //src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                src={church}
                className="w-full h-[100vh]"
                alt="Sample"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;










/*
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("")
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault()
    navigate("/landing")
  };
  return (
    <div>
      <section className="h-screen overflow-hidden">
        <div className="px-6 h-full text-gray-800">
          <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
            <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="w-full"
                alt="Sample"
              />
            </div>
            <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
              <form onSubmit={handleSubmit}>
                {error && (
                  <p className="bg-red-500 p-3 my-2 text-xl ">{error}</p>
                )}
                <p className="text-4xl text-firstBlue text-center font-semibold my-4 sm:mb-6">
                  Welcome Back
                </p>
                <div className="mb-6">
                  <input
                    type="text"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleFormControlInput1"
                    placeholder="Email address"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                
                {/* <div className="mb-6">
                  <input
                    type="password"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleFormControlInput2"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div> 

                <div className="flex justify-between items-center mb-6">
                  <div className="text-center lg:text-left">
                    <button
                      type="submit"
                      className="inline-block px-12 py-3 bg-firstBlue text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    >
                      Login
                    </button>
                  </div>
                  <p className="text-firstBlue">Don't have an account? <Link className="text-lg font-bold text-firstBlue underline">      Sign Up </Link></p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login; */