"use client";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { useEffect } from "react";
import { gsap } from "gsap";
import { FaFigma } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";

export default function Home() {
  useEffect(() => {
    // Animate elements with fade + upward movement
    gsap.fromTo(
      ".fade-div",
      { opacity: 0, y: 50 }, // start lower and invisible
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power3.out",
        delay: 0.2,
      }
    );
  }, []);
  return (
    <div className="flex min-h-screen items-center justify-between flex-col  w-full static">
      <nav className="absolute  top-0 inset-x-0 z-50 flex flex-row items-center justify-between gap-15 m-auto p-6  text-white w-[80%]">
        <div className="logo flex flex-row gap-5 items-center justify-center">
          <img
            src="/icon.webp"
            alt="FIXRR agency logo"
            width={40}
            height={40}
            priority
          />
          <h1 className="text-4xl font-semibold">FIXRR</h1>
        </div>
        <ul className="flex flex-row gap-7 text-lg ">
          <li className=" cursor-pointer">Home</li>
          <li className=" cursor-pointer">About Us</li>
          <li className=" cursor-pointer">Projects</li>
          <li className=" cursor-pointer">Services</li>
          <li className=" cursor-pointer">Testimonial</li>
        </ul>
        <button className="border-2 border-white rounded-full  px-6 py-2 flex flex-row items-center justify-center gap-3 cursor-pointer hover:bg-white hover:text-black transition duration-300 mt-5">
          Book a Free call <MdOutlineArrowRightAlt />
        </button>
      </nav>

      <div className="main text-center justify-center items-center text-white w-[80%] relative top-20">
        <img
          src="https://cdn.prod.website-files.com/68fbf3ba4c59bf6b6664b8c9/68fbf3bb4c59bf6b6664b964_spring.png"
          alt="spring"
          fill
          className="absolute inset-0 image-default -z-100 -top-20 left-80"
          quality={100}
          priority
          width={700}
        />

        <div className="fade-div relative z-10 text-white w-[80%] text-left justify-start  ">
          <h1 className="text-6xl font-semibold heading w-[60%] text-left relative top-36 ">
            Emotion-Driven Design: Building Brand Loyalty
          </h1>
        </div>
      </div>






      <div className="static justify-end items-end text-white  w-[80%] h-full">
        <div className=" z-100 text-white inset-x-0 gap-20 items-center justify-between flex flex-row">
          <div className="fade-div  flex flex-row items-center justify-center">
            <div className="relative w-48 h-48 flex items-center justify-center z-100">
              <img
                src="https://cdn.prod.website-files.com/68fbf3ba4c59bf6b6664b8c9/68fbf3bb4c59bf6b6664b952_Scroll%20Button.png"
                loading="lazy"
                className="spin-slow absolute inset-0 w-full h-full object-fit"
              ></img>
              <img
                src="https://cdn.prod.website-files.com/68fbf3ba4c59bf6b6664b8c9/68fbf3bb4c59bf6b6664b954_arrow.svg"
                className="hero_rotating-badge_arrow absolute w-20 h-20 object-contain"
              ></img>
            </div>
          </div>
          <div className="fade-div  text-base  gap-7">
            <h1 className="font-semibold heading  text-left max-w-sm ">
              Passionate Egyptian Team: Crafting Digital Solutions to Meet Your
              Needs. Empower Your Brand with Innovation.
            </h1>
            <button className="border-2 border-white rounded-full  px-6 py-2 flex flex-row items-center justify-center gap-3 cursor-pointer hover:bg-white hover:text-black transition duration-300 mt-5">
              Book a Free call <MdOutlineArrowRightAlt />
            </button>
          </div>
        </div>
        <div className="bg-color-left"></div>
      </div>








      
    </div>
  );
}
