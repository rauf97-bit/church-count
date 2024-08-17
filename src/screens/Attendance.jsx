import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import SearchHeader from "../containers/SearchHeader";
import Proceed from "../containers/Proceed";

const Attendance = () => {
  const [userData, setUserData] = useState({
    fname: "",
    lname: "",
    unit: "",
    date: "",
    event: "",
  });
  const userHandler = (e) => {
    const { name, value } = e.target;
    setUserData((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
  };

  return (
    <div className=" h-full w-full overflow-x-hidden  bg-tertiaryTextColor2 flex">
      <Sidebar />
      <div className="flex flex-col bg-hero-pattern">
        <div className="h-[20vh] gap-2 justify-around flex flex-col px-4 pb-0 pt-3">
          <SearchHeader navIcon={true} title={"Home"} currentPage={"Mark Attendance"} />
          <p></p>
        </div>
        <div className="h-[80vh] pl-20  px-4 pb-0">
          <div className="relative w-5/6 h-7/8 p-6 overflow-hidden shadow-lg bg-white">
            <form action="" className="">
              <h2 className="text-center my-4 mb-10 text-primaryTextColor text-2xl">
                Mark Attendance
              </h2>
              <div className="grid grid-cols-2 gap-3 justify-between items-center">
                <div className="mb-3 col-span-1">
                  <label className="text-base text-primaryTextColor">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="form-control block w-full px-4 text-base font-normal text-secondaryTextColor bg-tertiaryTextColor2 py-2 bg-clip-padding  border-0 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-tertiaryTextColor2 focus:border focus:outline-none"
                    id="exampleFormControlInput1"
                    placeholder="First Name"
                    name="fname"
                    value={userData.fname}
                    onChange={userHandler}
                  />
                </div>
                <div className="mb-3 col-span-1">
                  <label className="text-base text-primaryTextColor">
                    Last Name
                  </label>

                  <input
                    type="text"
                    className="form-control block w-full px-4 text-base font-normal text-secondaryTextColor bg-tertiaryTextColor2 py-2 bg-clip-padding  border-0 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-tertiaryTextColor2 focus:border focus:outline-none"
                    id="exampleFormControlInput1"
                    placeholder="Last Name"
                    name="lname"
                    value={userData.lname}
                    onChange={userHandler}
                  />
                </div>
                <div className="mb-3 col-span-1">
                  <label className="text-base text-primaryTextColor">
                    Date
                  </label>
                  <input
                    type="date"
                    className="form-control block w-full px-4 text-base font-normal text-secondaryTextColor bg-tertiaryTextColor2 py-2 bg-clip-padding  border-0 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-tertiaryTextColor2 focus:border focus:outline-none"
                    id="exampleFormControlInput1"
                    placeholder="Date"
                    name="date"
                    value={userData.date}
                    onChange={userHandler}
                  />
                </div>
                <div className="mb-3 col-span-1">
                  <label className="text-base text-primaryTextColor">
                    Unit
                  </label>
                  <input
                    type="text"
                    className="form-control block w-full px-4 text-base font-normal text-secondaryTextColor bg-tertiaryTextColor2 py-2 bg-clip-padding  border-0 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-tertiaryTextColor2 focus:border focus:outline-none"
                    id="exampleFormControlInput1"
                    placeholder="Unit"
                    name="unit"
                    value={userData.unit}
                    onChange={userHandler}
                  />
                </div>
                <div className="mb-3 col-span-2">
                  <label className="text-base text-primaryTextColor">
                    Event
                  </label>
                  <input
                    type="text"
                    className="form-control block w-full px-4 text-base font-normal text-secondaryTextColor bg-tertiaryTextColor2 py-2 bg-clip-padding  border-0 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-tertiaryTextColor2 focus:border focus:outline-none"
                    id="exampleFormControlInput1"
                    placeholder="Event"
                    name="event"
                    value={userData.event}
                    onChange={userHandler}
                  />
                </div>
              </div>
              <div className="flex justify-end items-end">
                <Proceed text={"Proceed"} width={"w-[25%] my-4"} />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Attendance;
