import type { Route } from "./+types/home";
import React from "react";
import Silk from "../components/Silk"; // adjust the path based on where you put the file
import { SiOpenjsfoundation } from "react-icons/si";
import {
  IoLogoJavascript,
  IoLogoReact,
  IoLogoNodejs,
  IoLogoVercel,
} from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandThreejs } from "react-icons/tb";
import me from "../../public/imagee.webp";
import { FaRegArrowAltCircleDown } from "react-icons/fa";
import p1 from "../../public/project1.webp";
import p2 from "../../public/project2.webp";
import p3 from "../../public/project3.webp";
import p4 from "../../public/project4.webp";
import pl from "../../public/planning.webp";
import { BsFillLightningChargeFill } from "react-icons/bs";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Fixrr Agency" },
    { name: "description", content: "We Fix your online presence" },
  ];
}

export default function Home() {
  return (
    <div className="relative w-full h-screen scroll-smooth">
      {/* Silk background */}
      <div className="absolute inset-0 -z-10">
        <Silk
          speed={5}
          scale={1}
          color="#15ff00" // you can use Fixrr’s accent color here
          noiseIntensity={1.2}
          rotation={0.2}
        />
      </div>

      <nav className="fixed top-0 left-1/2 transform -translate-x-1/2 w-1/2 bg-white/10 z-100 backdrop-blur-md text-white flex justify-between items-center py-4 px-6 rounded-full shadow-lg">
        <div className="flex flex-row items-center justify-center gap-5">
          <img src="./favicon.ico" alt="FIXRR Logo" className="w-10"></img>
          <h1 className="text-xl font-bold">Fixrr</h1>
        </div>
        <ul className="flex gap-6">
          <li>
            <a href="#home-section" className="font-bold">
              Home
            </a>
          </li>
          <li>
            <a href="#about-section" className="font-bold">
              About
            </a>
          </li>
          <li>
            <a href="#" className="font-bold">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#" className="font-bold">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      {/* Your content */}

      <div
        className="flex items-center justify-center h-full flex-col gap-10 scroll-smooth"
        id="home-section"
      >
        <div className="about-founder bg-white/10 backdrop-blur-md text-white flex justify-center items-center py-4 px-6 rounded-full shadow-lg font-bold gap-2">
          {" "}
          <SiOpenjsfoundation /> Crafting Unique Brand Identities
        </div>

        <h1 className="text-[110px] text-white font-[400] w-260 text-center justify-center leading-[100px]">
          Branding that you need Indeed
        </h1>
        <h3 className="text-xl text-white/75 font-medium w-200 text-center justify-center mt-10 ">
          Elevate your brand with custom identity and package design. Showcase
          your story through bold visuals and strategic design solutions
        </h3>
        <div className="flex flex-row gap-5 mt-10">
          <a
            href="#"
            className="get-started bg-white text-black flex justify-center items-center py-3 px-4 rounded-[12px] shadow-lg font-bold"
          >
            Get Started Now
          </a>
          <a
            href="#"
            className="learn-more bg-white/10 backdrop-blur-md text-white flex justify-center items-center py-3 px-4 rounded-[12px] shadow-lg font-bold"
          >
            See Projects
          </a>
        </div>
      </div>
      <hr style={{ borderColor: "grey", borderWidth: "1px" }} />
      <div className="relative w-full overflow-hidden py-3 mt-10 bg-white/10">
        <ul className="flex animate-marquee whitespace-nowrap">
          <li className="text-white font-medium flex items-center gap-3 mx-10">
            <IoLogoJavascript className="text-2xl" /> Javascript
          </li>
          <li className="text-white font-medium flex items-center gap-3 mx-10">
            <IoLogoReact className="text-2xl" /> React.Js
          </li>
          <li className="text-white font-medium flex items-center gap-3 mx-10">
            <RiTailwindCssFill className="text-2xl" /> Tailwindcss
          </li>
          <li className="text-white font-medium flex items-center gap-3 mx-10">
            <IoLogoNodejs className="text-2xl" /> Node.Js
          </li>
          <li className="text-white font-medium flex items-center gap-3 mx-10">
            <TbBrandThreejs className="text-2xl" /> Three.Js
          </li>
          <li className="text-white font-medium flex items-center gap-3 mx-10">
            <IoLogoVercel className="text-2xl" /> Vercel
          </li>

          {/* duplicate to create infinite loop */}
          <li className="text-white font-medium flex items-center gap-3 mx-10">
            <IoLogoJavascript className="text-2xl" /> Javascript
          </li>
          <li className="text-white font-medium flex items-center gap-3 mx-10">
            <IoLogoReact className="text-2xl" /> React.Js
          </li>
          <li className="text-white font-medium flex items-center gap-3 mx-10">
            <RiTailwindCssFill className="text-2xl" /> Tailwindcss
          </li>
          <li className="text-white font-medium flex items-center gap-3 mx-10">
            <IoLogoNodejs className="text-2xl" /> Node.Js
          </li>
          <li className="text-white font-medium flex items-center gap-3 mx-10">
            <TbBrandThreejs className="text-2xl" /> Three.Js
          </li>
          <li className="text-white font-medium flex items-center gap-3 mx-10">
            <IoLogoVercel className="text-2xl" /> Vercel
          </li>
        </ul>
      </div>

      <div
        className="flex items-center justify-center h-full flex-row w-[90%] m-auto scroll-smooth"
        id="about-section"
      >
        <div>
          <div className="bg-white/10 z-100 backdrop-blur-md text-white w-[70%] p-15 rounded-xl">
            <h1 className="font-bold text-4xl">Meet The founder</h1>
            <p className="text-medium text-2xl text-white/85">
              I'm Ahmed Sherif, a passionate software engineer based in EGYPT. I
              specialize in crafting bold visual identities and great user
              experience, also passionate about making a wonderful brand
              identity and creative strategies to elevate brands.
              <hr className="mt-10" />
              <div className="flex flex-col gap-4 mt-10 font-semibold">
                {/* First row: 2 items (each takes 1/2 width) */}
                <ul className="grid grid-cols-2 gap-4">
                  <li className="bg-white/20 backdrop-blur-md text-white rounded-xl p-2 text-center">
                    Front-end
                  </li>
                  <li className="bg-white/20 backdrop-blur-md text-white rounded-xl p-2 text-center">
                    Brand identity
                  </li>
                </ul>

                {/* Rest of the rows: 3 items each */}
                <ul className="grid grid-cols-3 gap-4">
                  <li className="bg-white/20 backdrop-blur-md text-white rounded-xl p-2 text-center">
                    UI/UX design
                  </li>
                  <li className="bg-white/20 backdrop-blur-md text-white rounded-xl p-2 text-center">
                    Branding
                  </li>
                  <li className="bg-white/20 backdrop-blur-md text-white rounded-xl p-2 text-center">
                    Figma
                  </li>
                </ul>
                <ul className="grid grid-cols-2 gap-4">
                  <li className="bg-white/20 backdrop-blur-md text-white rounded-xl p-2 text-center">
                    Illustrator
                  </li>
                  <li className="bg-white/20 backdrop-blur-md text-white rounded-xl p-2 text-center">
                    Framer
                  </li>
                </ul>
              </div>
            </p>
          </div>
        </div>
        <div>
          <img
            src={me}
            alt="my image"
            className="bg-white/20 w-300 rounded-2xl p-10 pb-0"
          />
        </div>
      </div>
      <hr style={{ borderColor: "grey", borderWidth: "1px" }} />
      <div className="bg-white/80 backdrop-blur-md text-black rounded-xl p-1 text-center mt-[-18px] w-50 justify-center items-center align-center flex m-auto font-bold gap-1 cursor-pointer">
        Recent Works <FaRegArrowAltCircleDown />
      </div>

      <ul className="grid grid-cols-4">
        <li className="bg-white/25 backdrop-blur-md p-5 m-10 align-center justify-center  rounded-2xl proj-img relative overflow-hidden group cursor-pointer">
          <img
            src={p1}
            alt="project 1"
            className="w-65 h-100 rounded-2xl object-cover transition-transform duration-500 group-hover:scale-110 m-auto"
          />
          <div className="absolute inset-0 bg-white/10 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
            <p className="text-white text-lg font-semibold drop-shadow">
              View More
            </p>
          </div>
        </li>
        <li className="bg-white/25 backdrop-blur-md p-5 m-10 align-center justify-center  rounded-2xl proj-img relative overflow-hidden group cursor-pointer">
          <img
            src={p2}
            alt="project 2"
            className="w-65 h-100 rounded-2xl object-cover transition-transform duration-500 group-hover:scale-110 m-auto"
          />
          <div className="absolute inset-0 bg-white/10 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
            <p className="text-white text-lg font-semibold drop-shadow">
              View More
            </p>
          </div>
        </li>
        <li className="bg-white/25 backdrop-blur-md p-5 m-10 align-center justify-center  rounded-2xl proj-img relative overflow-hidden group cursor-pointer">
          <img
            src={p3}
            alt="project 3"
            className="w-65 h-100 rounded-2xl object-cover transition-transform duration-500 group-hover:scale-110 m-auto"
          />
          <div className="absolute inset-0 bg-white/10 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
            <p className="text-white text-lg font-semibold drop-shadow">
              View More
            </p>
          </div>
        </li>
        <li className="bg-white/25 backdrop-blur-md p-5 m-10 align-center justify-center  rounded-2xl proj-img relative overflow-hidden group cursor-pointer">
          <img
            src={p4}
            alt="project 4"
            className="w-65 h-100 rounded-2xl object-cover transition-transform duration-300 group-hover:scale-110 m-auto"
          />
          <div className="absolute inset-0 bg-white/10 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
            <p className="text-white text-lg font-semibold drop-shadow">
              View More
            </p>
          </div>
        </li>
      </ul>
      <hr style={{ borderColor: "grey", borderWidth: "1px" }} />

      <div className="Process-sec flex items-center justify-center h-full flex-row w-[90%] m-auto scroll-smooth my-10 gap-20">
        <div className="process-img w-50% ">
          <img
            src={pl}
            alt="planning image"
            className="w-200 mt-55 h-250 rounded-2xl"
          />
        </div>
        <div className="process-details flex flex-col gap-5 w-50%">
          <div className="Branding-process bg-white/10 backdrop-blur-md text-white text-sm flex justify-center items-center py-2 px-3 rounded-full shadow-lg font-semibold gap-2 w-45 mb-5">
            <BsFillLightningChargeFill /> Branding Process
          </div>
          <div className="process-steps bg-white/10 z-100 backdrop-blur-md text-white w-70% p-15 rounded-xl ">
            <h1 className="font-bold text-4xl mb-5">Our Process</h1>
            <h2 className="font-semibold text-xl text-white/75">
              crafting bold visuals that inspire and elevate brands with thought
              process.
            </h2>
            <div className="flex flex-row gap-25 mt-10 justify-center align-center text-center mb-10">
              <a
                href="#"
                className="get-started bg-white text-black flex justify-center items-center py-3 px-4 rounded-[12px] shadow-lg font-bold"
              >
                Book a Free Call
              </a>
              <a
                href="#"
                className="learn-more bg-white/10 backdrop-blur-md text-white flex justify-center items-center py-3 px-4 rounded-[12px] shadow-lg font-bold"
              >
                See our Projects
              </a>
            </div>
            <hr style={{ borderColor: "grey", borderWidth: "1px" }} />
          </div>
        </div>
      </div>
    </div>
  );
}
