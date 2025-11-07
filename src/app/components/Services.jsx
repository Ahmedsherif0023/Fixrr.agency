import React from "react";
import { MdArrowOutward } from "react-icons/md";

export const Services = ({link , service ,serviceName}) => {
  return (
    <div className="service-holder">
      <img
        src={link}
        loading="lazy"
        sizes="(max-width: 1110px) 100vw, 1110px"
        srcset={link}
        alt="home-work-image-1"
        className="image-default-cover w-full object-cover"
      ></img>
      <div className="flex flex-col justify-between items-start mt-4">
        <h3>{service}</h3>
        <div className=" flex flex-row items-center justify-between w-full">
          <h1 className=" text-4xl font-semibold heading ">
            {serviceName}
          </h1>
          <MdArrowOutward size={44} />
        </div>
      </div>
    </div>
  );
};
