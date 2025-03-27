import React from "react";

type buttonTypes = {
  children?: React.ReactNode;
  onClick?: () => void;
};
const Button = ({ children, onClick }: buttonTypes) => {
  return (
    <>
      <button
        onClick={onClick}
        className=" text-base bg-slate-800 text-slate-300 rounded-md px-4 py-2 md:w-64 md:mx-auto md:text-2xl   relative       cursor-pointer overflow-hidden z-10 "
      >
        {children}
        <div className="bg-stone-300 opacity-20 w-36 h-28 rounded-lg  absolute top-[-10px] right-[-145px] animation animation-all  transition-all  "></div>
      </button>
    </>
  );
};

export default Button;
