import React from "react";

const Button = ({ text, bgColor, textColor, handlePopup = () => {} }) => {
  return (
    <button
      onClick={handlePopup}
      className={`${bgColor} ${textColor} cursor-pointer hover:scale-105 duration-300 py-2 px-7 rounded-full relative z-10`}
    >
      {text}
    </button>
  );
};

export default Button;
