import React from "react";
import arrow from "../assets/icons/Frame 4.svg"
import profile_img from "../assets/images/Rectangle 2.jpg"

const SearchHeader = ({ title, navIcon, currentPage }) => {
  return (
    <div className=" w-[77vw] ">

    <div className="my-2 mt-3 w-full flex items-center justify-between">

      <p className={ navIcon ? " flex items-center justify-between text-md font-semibold text-tertiaryTextColor" : " flex items-center justify-between text-md font-semibold"}>
        
        {title}
        <span className={navIcon ? "px-2" : "hidden"}>
          <img
            className={navIcon ? "h-auto w-auto" : "hidden"}
            src={arrow}
            alt="navIcon"
          />
        </span>
        <span className="text-primaryTextColor">
        {navIcon ? currentPage : ""}
        </span>
      </p>
      <p></p>
      <div className="relative flex justify-center items-center">
        <input
          type="search"
          className="form-control block w-64 sm:w-96 px-4 text-[14px] font-normal text-secondaryTextColor bg-white rounded-md py-2 bg-clip-padding  border-0  transition ease-in-out m-0 focus:text-white focus:bg-tertiaryTextColor focus:border-tertiaryTextColor2 focus:border focus:outline-none"
          id="exampleFormControlInput1"
          placeholder="Search"
          name="search"
        />
        <div className="absolute right-3 top-3">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.9767 11.4716H12.1867L11.9067 11.2016C13.1067 9.80157 13.7267 7.89157 13.3867 5.86157C12.9167 3.08157 10.5967 0.861573 7.7967 0.521573C3.5667 0.00157288 0.00669983 3.56157 0.5267 7.79157C0.8667 10.5916 3.0867 12.9116 5.8667 13.3816C7.8967 13.7216 9.8067 13.1016 11.2067 11.9016L11.4767 12.1816V12.9716L15.7267 17.2216C16.1367 17.6316 16.8067 17.6316 17.2167 17.2216C17.6267 16.8116 17.6267 16.1416 17.2167 15.7316L12.9767 11.4716ZM6.9767 11.4716C4.4867 11.4716 2.4767 9.46157 2.4767 6.97157C2.4767 4.48157 4.4867 2.47157 6.9767 2.47157C9.4667 2.47157 11.4767 4.48157 11.4767 6.97157C11.4767 9.46157 9.4667 11.4716 6.9767 11.4716Z"
              fill="black"
            />
          </svg>
        </div>
      </div>
      
        <div className="flex items-center justify-between gap-2">

      <div className="flex items-center justify-center bg-white rounded-lg w-12 h-12">
        <svg
          width="19"
          height="24"
          viewBox="0 0 19 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.3372 24C10.691 24 11.7987 22.8923 11.7987 21.5385H6.87566C6.87566 22.8923 7.97105 24 9.3372 24ZM16.7218 16.6154V10.4615C16.7218 6.68308 14.7034 3.52 11.1834 2.68308V1.84615C11.1834 0.824615 10.3587 0 9.3372 0C8.31566 0 7.49105 0.824615 7.49105 1.84615V2.68308C3.95874 3.52 1.95259 6.67077 1.95259 10.4615V16.6154L0.364895 18.2031C-0.41049 18.9785 0.131049 20.3077 1.22643 20.3077H17.4357C18.531 20.3077 19.0849 18.9785 18.3095 18.2031L16.7218 16.6154Z"
            fill="black"
          />
        </svg>
      </div>
      <div className="flex items-center justify-center bg-white rounded-lg w-12 h-12">
        <img className="rounded-lg" src={profile_img} alt="profile_img" />
      </div>
        </div>      

    </div>
    </div>
  );
};

export default SearchHeader;
