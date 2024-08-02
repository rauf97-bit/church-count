import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import church from "../assets/images/church.png"

const Register = () => {
  const [error, setError] = useState("");
  // const [DOB, setDOB] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState({
    email: "",
    fname: "",
    lname: "",
    unit: "",
    phonenumber: "",
    password: "",
    confirmPassword: "",
  });

  const userHandler = (e) => {
    const { name, value } = e.target;
    console.log(name + "::::" + value);
    setUserData((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
  };
  // const { dispatch } = useContext(AddUserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const {
        email,
        fname,
        lname,
        unit,
        phonenumber,
        password,
        confirmPassword,
      } = userData;
      if (
        fname === "" ||
        lname === "" ||
        unit === "" ||
        email === "" ||
        phonenumber === "" ||
        password === "" ||
        confirmPassword === ""
      ) {
        setInterval(() => {
          setError("");
        }, 4000);
        return setError("Please fill the required fields");
      } else if (password !== confirmPassword) {
        setInterval(() => {
          setError("");
        }, 4000);
        return setError("Passwords do not match");
      } else {
        navigate("/user/home");
        //   currentUser &&
        //   setUserData({
        //     Fullname: "",
        //     email: "",
        //     tel: "",
        //     password: "",
        //     confirmPassword: "",
        //   });
        //   setLoading(true);
      }
      // dispatch({ type: "NEW_USERNAME", payload: username });
      // dispatch({ type: "NEW_USER_CONTACT", payload: contact });
    } catch (err) {
      console.log(err.message);
    }
    setLoading(false);
  };

  return (
    <div>
      <section className="h-screen overflow-scroll overflow-x-hidden">
        <div className="px-2 h-full text-gray-800">
          <div className="flex xl:justify-center lg:justify-between justify-center items-cente flex-wrap h-full g-6">
            
            <div className="mx-auto sm:mt-3 w-11/12 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-4 md:mb-0">
              <form onSubmit={handleSubmit}>
                {error && (
                  <p className="bg-red-500 p-3 my-2 text-xl ">{error}</p>
                )}
                <p className="text-[24px] text-firstBlue text-center font-semibold my-4 sm:mb-6">
                  Sign up
                </p>
                <div className="mb-[6px]">
                  <label className="text-[14px] text-primaryTextColor">First Name</label>
                  <input
                    type="text"
                    className="form-control block w-full px-4 text-[14px] font-normal text-secondaryTextColor bg-tertiaryTextColor2 py-2 bg-clip-padding  border-0 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-tertiaryTextColor2 focus:border focus:outline-none"
                    id="exampleFormControlInput1"
                    placeholder="First Name"
                    name="fname"
                    value={userData.fname}
                    onChange={userHandler}
                  />
                </div>
                <div className="mb-[6px]">
                <label className="text-[14px] text-primaryTextColor">Last Name</label>
                  
                  <input
                    type="text"
                    className="form-control block w-full px-4 text-[14px] font-normal text-secondaryTextColor bg-tertiaryTextColor2 py-2 bg-clip-padding  border-0 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-tertiaryTextColor2 focus:border focus:outline-none"
                    id="exampleFormControlInput1"
                    placeholder="Last Name"
                    name="lname"
                    value={userData.lname}
                    onChange={userHandler}
                  />
                </div>
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
                <label className="text-[14px] text-primaryTextColor">Phonenumber </label>
                <input
                    type="text"
                    className="form-control block w-full px-4 text-[14px] font-normal text-secondaryTextColor bg-tertiaryTextColor2 py-2 bg-clip-padding  border-0 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-tertiaryTextColor2 focus:border focus:outline-none"
                    id="exampleFormControlInput1"
                    placeholder="Phonenumber"
                    name="phonenumber"
                    value={userData.phonenumber}
                    onChange={userHandler}
                  />
                </div>
                <div className="mb-[6px]">
                <label className="text-[14px] text-primaryTextColor">Unit</label>
                <input
                    type="text"
                    className="form-control block w-full px-4 text-[14px] font-normal text-secondaryTextColor bg-tertiaryTextColor2 py-2 bg-clip-padding  border-0 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-tertiaryTextColor2 focus:border focus:outline-none"
                    id="exampleFormControlInput1"
                    placeholder="Unit"
                    name="unit"
                    value={userData.unit}
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

                <div className="mb-[6px]">
                <label className="text-[14px] text-primaryTextColor">Confirm Password</label>
                <input
                    type="password"
                    className="form-control block w-full px-4 text-[14px] font-normal text-secondaryTextColor bg-tertiaryTextColor2 py-2 bg-clip-padding  border-0 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-tertiaryTextColor2 focus:border focus:outline-none"
                    id="exampleFormControlInput2"
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    value={userData.confirmPassword}
                    onChange={userHandler}
                  />
                </div>
                <div>

                <div className="w-full flex justify-between items-center md:mt-3 my-2">
                  <div className="w-full text-center lg:text-left">
                    <button
                      type="submit"
                      className="inline-block w-full px-12 py-3 bg-primaryColor text-white font-medium text-sm leading-snug rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    >
                      Register
                    </button>
                  </div>
                </div>
                <p className="text-base mb-5 md:mb-0 text-tertiaryTextColor">
                  Already have an account?  <Link to={"/"} className="underline text-primaryTextColor"> Sign in</Link>
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

export default Register;
