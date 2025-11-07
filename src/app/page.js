"use client";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { useEffect } from "react";
import { gsap } from "gsap";
import { FaFigma } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
import { Services } from "./components/Services.jsx";

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
        <button className="border-2 border-white rounded-full  px-6 py-2 flex flex-row items-center justify-center gap-3 cursor-pointer hover:bg-white hover:text-black transition duration-300 ">
          Book a Free call <MdOutlineArrowRightAlt />
        </button>
      </nav>

      <div className="main text-center justify-center items-center text-white w-[80%] relative top-20">
        <img
          src="https://cdn.prod.website-files.com/68fbf3ba4c59bf6b6664b8c9/68fbf3bb4c59bf6b6664b964_spring.png"
          alt="spring"
          fill
          className="absolute inset-0 image-default -z-100  left-80"
          quality={100}
          priority
          width={600}
        />

        <div className="fade-div relative z-10 text-white w-[80%] text-left justify-start  ">
          <h1 className="text-7xl font-semibold heading w-[70%] text-left relative top-36 ">
            Emotion-Driven Design: Building Brand Loyalty
          </h1>
        </div>
        <div className="bg-color-left -z-50"></div>
      </div>

      <div className="w-full flex flex-row items-center justify-center gap-10 mt-40 mb-40 relative top-48">
        <div className="static justify-end items-end text-white  w-[80%] h-full">
          <div className=" z-100 text-white inset-x-0 gap-20 items-center justify-between flex flex-row">
            <div className="fade-div  flex flex-row items-center justify-center">
              <div className="relative w-32 h-32 flex items-center justify-center z-100">
                <img
                  src="https://cdn.prod.website-files.com/68fbf3ba4c59bf6b6664b8c9/68fbf3bb4c59bf6b6664b952_Scroll%20Button.png"
                  loading="lazy"
                  className="spin-slow absolute inset-0 w-full h-full object-fit"
                ></img>
                <img
                  src="https://cdn.prod.website-files.com/68fbf3ba4c59bf6b6664b8c9/68fbf3bb4c59bf6b6664b954_arrow.svg"
                  className="hero_rotating-badge_arrow absolute w-10 h-10 object-contain"
                ></img>
              </div>
            </div>
            <div className="fade-div  text-base  gap-7">
              <h1 className="font-semibold heading  text-left max-w-sm ">
                Passionate Egyptian Team: Crafting Digital Solutions to Meet
                Your Needs. Empower Your Brand with Innovation.
              </h1>
              <button className="border-2 border-white rounded-full  px-6 py-2 flex flex-row items-center justify-center gap-3 cursor-pointer hover:bg-white hover:text-black transition duration-300 mt-5">
                Book a Free call <MdOutlineArrowRightAlt />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="fade-div  w-full flex flex-row items-center justify-center gap-12 text-white relative top-36 mb-20">
        <FaFigma size={55} />
        <RiJavascriptFill size={55} />
        <FaReact size={55} />
        <FaNodeJs size={55} />
        <IoLogoVercel size={55} />
      </div>
      

      <div className="fade-div flex flex-col items-center justify-between inset-x-0 relative top-48 gap-20 w-[80%]">
        <div className="flex flex-row items-center justify-between ">
          <h1 className="text-6xl font-semibold heading w-[60%] max-w-[45%] text-left">
            We make your business stand out
          </h1>
          <p className="text-xl font-normal max-w-[40%] text-left">
            At Fixrr, we are the architects of distinctive and memorable
            creative experiences. That align with but surpass the continually
            evolving standards of the creative landscape.
          </p>
        </div>
        <div className="flex flex-row items-center justify-between w-[95%]">
          <img
            src="https://cdn.prod.website-files.com/68fbf3ba4c59bf6b6664b8c9/68fbf3bb4c59bf6b6664b965_round_tube.png"
            alt="hero image"
            width={500}
            height={500}
            priority
          />
          <div className="grid grid-cols-2 gap-28">
            <div className="text-left">
              <h1 className="text-5xl font-bold">329+</h1>
              <p className="text-lg">Project Completed</p>
            </div>
            <div className="text-left">
              <h1 className="text-5xl font-bold">99%</h1>
              <p className="text-lg">Satisfied Clients</p>
            </div>
            <div className="text-left ">
              <h1 className="text-5xl font-bold">6240+</h1>
              <p className="text-lg">Hours of work</p>
            </div>
            <div className="text-left ">
              <h1 className="text-5xl font-bold">05+</h1>
              <p className="text-lg">Years Experience</p>
            </div>
          </div>
        </div>
        
        <div className="bg-color-right -z-50"></div>
      </div>



      <div className="flex flex-col items-center justify-center gap-10 mb-20 relative top-56 mt-20 inset-x-0 w-[80%]">
        <div className="flex flex-row inset-x-0 justify-between items-center w-full">
          <div className="flex flex-col justify-start items-start w-full">
            <h1 className="text-6xl font-semibold heading w-[60%] max-w-[75%] text-left ">Impact We Created</h1>
          </div>
          <div className="flex flex-col justify-between items-start">
            <p className=" text-base font-normal max-w-[85%] text-left mt-5">
              At FIXRR, we specialize in offering a full range of creative branding, strategy, design and development services tailored to bring your ideas to life.
            </p>
             <button className="border-2 border-white rounded-full  px-6 py-2 flex flex-row items-center justify-center gap-3 cursor-pointer hover:bg-white hover:text-black transition duration-300 mt-5">
                Book a Free call <MdOutlineArrowRightAlt />
              </button>
          </div>

        </div>
        <div className="grid grid-cols-2 gap-16">
          <Services link={"https://cdn.prod.website-files.com/68fbf3ba4c59bf6b6664b8c9/68fbf3bb4c59bf6b6664b96f_home-work-image-1.avif"} service={"UI/UX Design"} serviceName={"Wayflyer Dashboard"}/>
          <Services link={"https://cdn.prod.website-files.com/68fbf3ba4c59bf6b6664b8c9/68fbf3bb4c59bf6b6664b970_work-image-%20(3).avif"} service={"Branding & Logo"} serviceName={"Visual Identity"}/>
          <Services link={"https://cdn.prod.website-files.com/68fbf3ba4c59bf6b6664b8c9/68fbf3bb4c59bf6b6664b971_work-image-%20(2).avif"} service={"Digital Marketing"} serviceName={"Social Media Marketing"}/>
          <Services link={"https://cdn.prod.website-files.com/68fbf3ba4c59bf6b6664b8c9/68fbf3bb4c59bf6b6664b974_work-image-%20(1).avif"} service={"custom software development"} serviceName={"Elevate Your App"}/>
        </div>
      </div>
      
    </div>
  );
}
