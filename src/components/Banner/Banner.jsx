import React from "react";
import Button from "../shared/Button";

const Banner = ({ data }) => {
  return (
    <div className=" container min-h-[550px] flex justify-center items-center mt-6 py-12">
      <div
        className={` container grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-white rounded-3xl ${data.bgColor}`}
      >
        {/* first col */}
        <div className="p-6 sm:p-8">
          <p data-aos="slide-right" className="text-sm">
            {data.discount}
          </p>
          <h2
            data-aos="slide-right"
            className="uppercase text-4xl lg:text-7xl font-bold"
          >
            {data.title}
          </h2>
          <p data-aos="fade-up" className="text-sm ">
            {data.data}
          </p>
        </div>

        {/* second */}
        <div data-aos="zoom-in" className="h-full flex items-center">
          <img
            src={data.image}
            alt="img"
            className="scale-125 w-[250px] md:w-[340px] mx-auto
              object-cover drop-shadow-[-8px_4px_6px_rgba(0,0,0,.6)]"
          />
        </div>

        {/* third col  */}
        <div className="flex flex-col justify-center gap-4 p-6 sm:p-8">
          <p data-aos="zoom-out" className="font-bold text-xl">
            {data.title2}
          </p>
          <p data-aos="fade-up" className="font-bold text-3xl sm:text-5xl">
            {data.title3}
          </p>
          <p data-aos="fade-up" className="text-sm tracking-wide leading-5 ">
            {data.title4}
          </p>
          <div data-aos="fade-up" data-aos-offset="0">
            <Button
              text="Shop Now"
              bgColor="bg-white"
              textColor={data.buttouColor}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
