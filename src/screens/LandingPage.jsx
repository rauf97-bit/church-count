import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import SearchHeader from "../containers/SearchHeader";
import LandingCards from "../containers/LandingCards";
 import big_Event from "../assets/icons/big_Event.svg";
 import sm_Event from "../assets/icons/sm_Event.svg";
 import big_Course from "../assets/icons/big_Course.svg";
 import sm_Course from "../assets/icons/sm_Course.svg";
 import big_Attendance from "../assets/icons/big_Attendance.svg";
 import sm_Attendance from "../assets/icons/sm_Attendance.svg";
 import Wave from "../assets/icons/Wave.svg";
 import {useAuth} from "../context/AuthContext.js"



// import AttendanceModal from "../components/AttendanceModal";
// import Itadori from "../assets/images/Itadori.jpg";
// import Modal from "../containers/Modal";
export const LandingPage = () => {
  const {user} = useAuth()
  console.table(user);
  console.log(user.worker.FirstName);
  // const [showModal, setshowModal] = useState(false);
  // const [DisableBtn, setDisableBtn] = useState("false");
  // useState

  return (
    <div className=" h-full w-full overflow-hidden bg-tertiaryTextColor2 flex gap-3">
      <Sidebar />
      <div className="flex flex-col">
        <div className="h-[58vh] gap-2 justify-around flex flex-col px-4 pb-0 pt-3">
          <SearchHeader navIcon={false} title={"Home"} />
          <p className="text-xl">Welcome, {user.worker.FirstName} <img src={Wave} className="d inline" alt="Hi"/></p>
          <p className="text-2xl">What would you love to do?</p>
          <div className="flex justify-between items-center gap-6">

          <LandingCards actionText={"Mark Attendance"} desc={"Clock in to indicate you are present in today’s service."} icon={sm_Attendance} bgImage={big_Attendance} navPage={"/landing"}/>
          <LandingCards actionText={"Register for Event"} desc={"Checkout upcoming and ongoing events."} icon={sm_Event} bgImage={big_Event} navPage={"/landing"}/>
          <LandingCards actionText={"Take Courses"} desc={"Leadership courses to build your spiritual life."} icon={sm_Course} bgImage={big_Course} navPage={"/landing"}/>
          </div>
        </div>
        <div className="h-[40vh]  px-4 pb-0">
      <div className="relative w-full h-full p-6 rounded-2xl overflow-hidden shadow-lg bg-white">
</div>
        </div>
      </div>
      {/* <Modal open={showModal} onClose={() => setshowModal(false)}>
        <div className="text-center w-72">
          {/* <Trash size={56} className="mx-auto text-red-500" />}
          <div className="mx-auto my-4 w-56">
            <h5 className="text-md font-black text-gray-800 py-2">
              Are you within the Church's viccinity ?
            </h5>
          </div>
          <div className="flex gap-4">
            <button
              className="btn btn-danger w-full"
              onClick={() => {
                setshowModal(false);
                setDisableBtn("true");
              }}
            >
              Confirm
            </button>
            <button
              className="btn btn-light w-full"
              onClick={() => setshowModal(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      </Modal> */}

      {/* <AttendanceModal /> */}
    </div>
  );
};
