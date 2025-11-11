import React from "react";
import { MdOutlineArrowOutward  } from "react-icons/md";

export const Services = ({link , service ,serviceName}) => {
  return (
    <div className="service-holder">
      <div className="img-wrapper">
        <img
          src={link}
          loading="lazy"
          sizes="(max-width: 1110px) 100vw, 1110px"
          alt="home-work-image-1"
          className="image-default-cover w-full object-cover"
        ></img>
      </div>
      <div className="flex flex-col justify-between items-start mt-4 text-div">
        <h3>{service}</h3>
        <div className=" flex flex-row items-center justify-between w-full">
          <h1 className=" text-4xl font-semibold heading ">
            {serviceName}
          </h1>
         <div className="arrow-div">
           <a href="https://calendly.com/fixrragency" target="_blank" rel="noopener noreferrer">
            <MdOutlineArrowOutward  size={70} />
           </a>
         </div>
        </div>
      </div>
    </div>
  );
};
