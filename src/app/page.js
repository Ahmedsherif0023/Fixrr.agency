import { MdOutlineArrowRightAlt } from "react-icons/md";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-between  w-full">
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 flex flex-row items-center justify-between gap-15 w-[80%] my-auto">
     <div className="logo flex flex-row gap-5 items-center justify-center">
       <img
         src="/icon.webp"
         alt="FIXRR agency logo"
         width={50}
         height={50}
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
  
  <div className="main text-center justify-center items-center text-white relative w-[80%]">
<img
      src="https://cdn.prod.website-files.com/68fbf3ba4c59bf6b6664b8c9/68fbf3bb4c59bf6b6664b964_spring.png"
      alt="spring"
      fill
      className="absolute inset-0 image-default -z-100 -top-20 left-80"
      quality={100}
      priority
      width={700}
    />

    <div className="relative z-10 text-white w-[80%] text-left justify-start  left-20">
      <h1 className="text-7xl font-semibold heading max-w-2xl text-left relative -top-20 left-20">
        Emotion-Driven Design: Building Brand Loyalty
      </h1>
    </div>
  </div>
  <div className="static justify-end items-end text-white  w-full h-full">

    <div className=" z-10 text-white w-[80%] text-left justify-end align-bottom ">
     <div className="absolute text-base bottom-5 right-10 gap-7">
       <h1 className="font-semibold heading  text-left max-w-sm ">
         Passionate Egyptian  Team: Crafting Digital Solutions to Meet Your Needs. Empower Your Brand with Innovation.
       </h1>
       <button className="border-2 border-white rounded-full  px-6 py-2 flex flex-row items-center justify-center gap-3 cursor-pointer hover:bg-white hover:text-black transition duration-300 mt-5">
         Book a Free call <MdOutlineArrowRightAlt />
       </button>
     </div>
    </div>
  </div>

    </div>
  );
}
