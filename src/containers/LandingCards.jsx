import React from "react";
import { useNavigate } from "react-router-dom";

const LandingCards = ({ bgImage, icon, actionText, desc, navPage }) => {
    const navigate = useNavigate()

    const handleNav = e =>{
        // navigate(`/${navPage}`)
        navigate(navPage)

    }
  return (
    <div onClick={e => handleNav()} className="cursor-pointer text-white">
      <div className="relative w-64 sm:w-72 h-36 p-6 rounded-2xl overflow-hidden shadow-lg bg-gradient-to-tr from-[#060DD9] to-[#6BAAFC] flex flex-col justify-between">
        <img src={icon} className="h-12 w-8" alt="icon" />
        <p className="text-lg font-medium">{actionText}</p>
        <p className="text-sm">{desc}</p>
        <img className="absolute bottom-0 right-[-10px] h-[80%] w-[60%] opacity-15" src={bgImage} alt="bg-Image" />
      </div>
    </div>
  );
};

export default LandingCards;
