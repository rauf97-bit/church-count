import React from "react";

const Proceed = ({ text, width }) => {
  return (
    <input
      value={text}
      type="submit"
      className={`px-10 my-2 cursor-pointer py-4 text-2xl ${width} bg-primary rounded-2xl text-center text-white`}
    />
  );
};

export default Proceed;