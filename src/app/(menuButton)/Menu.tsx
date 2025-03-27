"use client";
import React from "react";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import Link from "next/link";

import { useState } from "react";
const Menu = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <menu className="md:hidden border-1 md:border-none h-8 w-8 text-center  border-slate-200  transition-all duration-300 flex flex-col relative">
        <button aria-label="close" className="flex md:hidden  justify-center">
          {open ? (
            <CloseOutlinedIcon
              fontSize="large"
              onClick={() => setOpen(false)}
            />
          ) : (
            <MenuOutlinedIcon fontSize="large" onClick={() => setOpen(true)} />
          )}
        </button>

        <ul
          className={`flex flex-col justify-center absolute top-8 -left-14 bg-slate-50 px-2 py-1 rounded-md text-xl z-10 transition-all duration-700 ease-in-out transform ${
            open ? "opacity-100 " : "opacity-0 "
          }`}
          style={{ transitionProperty: "opacity, transform" }}
        >
          <Link href="/" className="mt-1 cursor-pointer  hover:text-lime-500 ">
            Home
          </Link>
          <Link
            href="/development"
            className="mt-1 cursor-pointer  hover:text-lime-500"
          >
            Development
          </Link>
        </ul>
      </menu>
      <menu className="hidden md:flex w-full justify-end px-4 py-2 text-2xl mt-8">
        <ul className="flex flex-row gap-10 ">
          <Link
            href="/development"
            className="relative cursor-pointer mx-2 group hover:text-lime-500"
          >
            Development
            <span className="bg-lime-500 absolute block -left-4   group-hover:w-40 w-0 h-1 mx-2 mt-2 transition-all duration-1000"></span>
          </Link>
          <Link
            href="/"
            className="relative cursor-pointer mx-2  group hover:text-lime-500"
          >
            Home
            <span className="bg-lime-500 absolute  block -left-4  w-0 group-hover:w-[80px]  h-1 mx-2 mt-2 transition-all duration-1000 "></span>
          </Link>
        </ul>
      </menu>
    </>
  );
};

export default Menu;
