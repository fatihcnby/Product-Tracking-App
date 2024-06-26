import React from "react";

const Button = ({ onClick, btnText }) => {
  return (
    <button
      className="w-full h-10 bg-teal-600 text-white flex items-center justify-center mt-4 rounded-md border-transparent hover:bg-teal-800"
      onClick={onClick}
    >
      {btnText}
    </button>
  );
};

export default Button;
