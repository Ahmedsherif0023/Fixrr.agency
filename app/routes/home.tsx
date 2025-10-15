import type { Route } from "./+types/home";
import React from "react";
import Silk from "../components/Silk"; // adjust the path based on where you put the file
import { SiOpenjsfoundation } from "react-icons/si";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Fixrr Agency" },
    { name: "description", content: "We Fix your online presence" },
  ];
}

export default function Home() {
  return (
    <div className="relative w-full h-screen">
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
      <nav className="fixed top-0 left-1/2 transform -translate-x-1/2 w-1/2 bg-white/10 backdrop-blur-md text-white flex justify-between items-center py-4 px-6 rounded-full shadow-lg">
        <div className="flex flex-row items-center justify-center gap-5">
          <img
            src="./favicon.ico"
            alt="FIXRR Logo"
            className="w-10"
          ></img>
          <h1 className="text-xl font-bold">Fixrr</h1>
        </div>
        <ul className="flex gap-6">
          <li>
            <a href="#" className="font-bold">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="font-bold">
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


      <div className="flex items-center justify-center h-full flex-col">
        <a href="#" className="about-founder bg-white/10 backdrop-blur-md text-white flex justify-center items-center py-4 px-6 rounded-full shadow-lg font-bold gap-2"> <SiOpenjsfoundation /> About Us</a>

        <h1 className="text-6xl text-white font-bold">Welcome to Fixrr</h1>
        <h3 className="text-3xl text-white font-bold">
          We Fix your digital presence
        </h3>
       <div className="flex flex-row gap-5 mt-10">
        <a href="#" className="get-started bg-white text-black flex justify-center items-center py-4 px-6 rounded-full shadow-lg font-bold">Get Started</a>
        <a href="#" className="learn-more bg-white/10 backdrop-blur-md text-white flex justify-center items-center py-4 px-6 rounded-full shadow-lg font-bold">Learn More</a>

       </div>

      </div>





    </div>
  );
}