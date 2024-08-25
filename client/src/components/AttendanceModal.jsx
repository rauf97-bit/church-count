import React from 'react';
import Proceed from '../containers/Proceed';
import { Link } from "react-router-dom";

const AttendanceModal = () => {
  return (
    <div className="congrats">
        <div className="flex flex-col h-[87vh] justify-around items-center">
          <div className="text-content text-center">
            <div className="text-xl font-semibold">Congratulation!</div>
            <div className="text-xl">
              Verification Successful, kindly check your mail for login details
            </div>
          </div>
          {/* <img src={congrats} alt="congrats" /> */}
          <Link to={"/login"}>
            <Proceed text={"Go Back"} />
          </Link>
        </div>
      </div>
  )
}

export default AttendanceModal