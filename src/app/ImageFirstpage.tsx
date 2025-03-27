import React from "react";

const ImageTop = () => {
  return (
    <section className="flex  justify-center align-middle md:justify-end w-screen h-screen  relative overflow-hidden  ">
      <div className="  flex flex-col gap-8    align-middle  sm:hidden w-11/12   p-10  h-full  rounded-full  mt-0 mx-auto">
        <div className="w-1/3 mx-auto skew-y-[30deg] mt-10  ">
          <div className="w-[12rem]  h-14 bg-red-600  relative rounded-full">
            <span className="w-6 h-6 rounded-full bg-red-600 absolute bottom-0 -left-[44px] top-3  -skew-y-[30deg]"></span>
          </div>
        </div>
        <div className="w-2/3  mx-auto skew-y-[30deg]">
          <div className="w-[24rem]  h-52  flex flex-row justify-start rounded-l-full rounded-r-full   bg-amber-300 relative  ">
            <img
              className=" -rotate-[10deg] skew-x-[0deg] -skew-y-[10deg]  absolute -left-8 top-0  object-cover  h-52 w-52 rounded-full   "
              src="./myImage.jpg"
              alt="picTest"
            />
            <span className="w-6 h-6 rounded-full bg-amber-300 absolute bottom-0 -skew-y-[30deg] -left-[41px] top-16 z-10 "></span>
          </div>
        </div>
        <div className="w-1/3  mx-auto skew-y-[30deg]">
          {" "}
          <div className="w-[12rem] h-14 bg-lime-500 relative  rounded-full mt-1 -ml-18">
            <span className="-skew-y-[30deg] w-6 h-6 rounded-full bg-lime-500 absolute bottom-0 -left-10 top-1.5"></span>
          </div>
        </div>
      </div>
      <div className="hidden relative sm:flex sm:flex-col sm:gap-8 w-full h-full justify-center rounded-full  mt-0    sm:align-middle md:hidden">
        <div className="w-1/3 mx-auto skew-y-[30deg] mt-10 absolute right-44 top-12  ">
          <div className="w-full  h-8 bg-red-600  relative rounded-full">
            <span className="w-6 h-6 rounded-full bg-red-600 absolute bottom-0 -left-[44px] top-3  -skew-y-[30deg]"></span>
          </div>
        </div>
        <div className="w-2/3  mx-auto skew-y-[30deg] absolute top-44 right-6">
          <div className="w-80  h-48  flex flex-row justify-start rounded-l-full   bg-amber-300 relative  ">
            <img
              className=" -rotate-[12deg]  absolute -left-8 top-0  object-cover  h-48 w-48 rounded-full   "
              src="./myImage.jpg"
              alt="picTest"
            />
            <span className="w-6 h-6 rounded-full bg-amber-300 absolute bottom-0 -skew-y-[30deg] -left-[41px] top-16 z-10 "></span>
          </div>
        </div>
        <div className="w-1/3  mx-auto skew-y-[30deg] absolute bottom-24 right-52">
          {" "}
          <div className="w-full h-8 bg-lime-500 relative  rounded-full mt-4 -ml-18">
            <span className="-skew-y-[30deg] w-6 h-6 rounded-full bg-lime-500 absolute bottom-0 -left-10 top-1.5"></span>
          </div>
        </div>
      </div>
      <div className="hidden  md:flex md:flex-col md:justify-center     w-full h-3/4 mt-10 relative overflow-hidden ">
        <div className="w-1/3 mx-auto  absolute top-[11rem] right-[14rem] skew-y-[30deg] ">
          {" "}
          <div className="w-1/2 h-18 bg-red-600   rounded-full">
            <span className="w-8 h-8 -skew-y-[30deg] rounded-full bg-red-600 absolute bottom-0 -left-[80px] top-5 "></span>
          </div>
        </div>
        <div className="w-1/3 absolute top-[6.5rem] right-[35rem]  mx-auto  ">
          <div className="w-[580px] skew-y-[30deg]  h-96 flex flex-row  rounded-l-full relative   bg-amber-300   ">
            <img
              className="  absolute -left-8 -rotate-[20deg]  -skew-x-[14deg] object-cover  w-96 h-96 rounded-full   "
              src="./myImage.jpg"
              alt="picTest"
            />
            <span className="w-12 h-12 -skew-y-[30deg] rounded-full bg-amber-300 absolute bottom-0 -left-[41px] top-44 z-10 "></span>
          </div>
        </div>
        <div className="w-1/3 mx-auto absolute -bottom-[6rem] right-[28rem] skew-y-[30deg]">
          <div className="w-80 h-20  bg-lime-500   rounded-full">
            <span className="w-8 h-8 -skew-y-[30deg] rounded-full bg-lime-500 absolute bottom-0 -left-20 top-3"></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageTop;
