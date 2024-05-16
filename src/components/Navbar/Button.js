import React from "react";

const Button = (props) => {
  return (
    <button className="bg-white text-orange-400 font-bold font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-orange-500 hover:text-bold hover:font-bold hover:text-white duration-500">
      {props.children}
    </button>
  );
};

export default Button;
