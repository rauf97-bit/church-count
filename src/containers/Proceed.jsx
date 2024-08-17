import React from "react";

const Proceed = ({ text, width }) => {
  return (
    <input
      value={text}
      type="submit"
      className={`px-10 cursor-pointer py-2 text-base ${width} bg-primaryPurple rounded-md text-center text-white`}
    />
  );
};

export default Proceed;