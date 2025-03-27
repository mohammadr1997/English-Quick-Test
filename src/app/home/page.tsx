"use client";
import React from "react";
import ImageFirstPage from "../ImageFirstpage.tsx";
import "./globals.css";
import Button from "../Button.tsx";

const Home = () => {
  const navigate = () => {
    window.location.href = "/form";
  };
  return (
    <section className="flex flex-col md:flex-row w-full overflow-hidden px-4 justify-center md:justify-between bg-sky-50   ">
      <div className="   flex flex-col gap-6 w-full md:w-1/3 justify-center md:-mt-14  ">
        <span className=" font-playfair text-2xl md:text-6xl text-center mt-2">
          English <span className="text-lime-400">Quick</span> Test
        </span>
        <span className="text-lg md:text-2xl font-serif text-center mt-2">
          online English Proficiency exam for organization and individuals
        </span>
        <Button onClick={navigate}>Start English Test</Button>
      </div>
      <div className="w-full mt-2 md:w-2/3 md:-mt-10 ">
        <ImageFirstPage />
      </div>
    </section>
  );
};

export default Home;
