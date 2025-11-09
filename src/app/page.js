"use client";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { FaFigma } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
import { Services } from "./components/Services.jsx";
import { MdOutlineArrowOutward } from "react-icons/md";
import { IoArrowForwardSharp } from "react-icons/io5";
import { IoArrowBackOutline } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";


export default function Home() {
  const [active, setActive] = useState(null);
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async () => {
    if (!email || isLoading) return;
    
    setIsLoading(true);
    setSubmitStatus(null);
    
    try {
      // Create a form data object
      const formData = new URLSearchParams();
      formData.append('email', email);
      formData.append('source', 'Website Form');
      
      // Create the URL with parameters
      const url = `https://script.google.com/macros/s/AKfycbyCi_3HZ0VCqDDMlS3kq8kuT7SlsGTUidL4J2y67yKkX8ljwTlCX3Zaevi1lFIE30lE/exec?${formData.toString()}`;
      
      // Create a script element
      const script = document.createElement('script');
      script.src = url;
      
      // Create a promise to handle the response
      const submitPromise = new Promise((resolve, reject) => {
        // Define callback function
        window.handleGoogleResponse = (response) => {
          if (response.status === 'success') {
            resolve(response);
          } else {
            reject(new Error(response.message || 'Submission failed'));
          }
          // Clean up
          delete window.handleGoogleResponse;
          document.body.removeChild(script);
        };
        
        // Add error handling
        script.onerror = () => {
          reject(new Error('Failed to submit form'));
          delete window.handleGoogleResponse;
          document.body.removeChild(script);
        };
      });
      
      // Add script to document
      document.body.appendChild(script);
      
      // Wait for response
      await submitPromise;
      
      // If we get here, submission was successful
      setSubmitStatus('success');
      setEmail('');
      
    } catch (err) {
      console.error('Submission error:', err);
      setSubmitStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  // Testimonial carousel state
  const testimonials = [
    {
      img: "https://cdn.prod.website-files.com/68fbf3ba4c59bf6b6664b8c9/68fbf3bb4c59bf6b6664b963_testimony-image-1.avif",
      text: '"Working with FIXRR was an absolute game-changer for our business. Their team brought creativity, professionalism, and innovation to every step of the project. Our brand has never looked better!"',
      name: "Rebecca P.",
      title: "CEO of DynaMotion",
    },
    {
      img: "/client2.png",
      text: '"FIXRR exceeded our expectations. The process was smooth, and the results were outstanding. Highly recommended!"',
      name: "Michael S.",
      title: "Founder of TechNova",
    },
    {
      img: "/client3.png",
      text: '"Professional, creative, and always on time. FIXRR is our go-to agency for all things digital."',
      name: "Sara L.",
      title: "Marketing Lead at BrightEdge",
    },
  ];
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const handlePrevTestimonial = () => {
    setTestimonialIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };
  const handleNextTestimonial = () => {
    setTestimonialIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };
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
            priority="true"
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
        <div className="flex flex-col items-end gap-2">
          <div className="flex items-center gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="px-4 py-2 rounded-full bg-transparent border-2 border-white text-white placeholder-gray-300 focus:outline-none focus:border-white"
              disabled={isLoading}
            />
            <button 
              onClick={handleSubmit}
              disabled={isLoading || !email}
              className={`border-2 border-white rounded-full px-6 py-2 flex flex-row items-center justify-center gap-3 cursor-pointer transition duration-300 
                ${isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white hover:text-black'}`}
            >
              {isLoading ? 'Submitting...' : 'Book a Free call'} <MdOutlineArrowRightAlt />
            </button>
          </div>
          {submitStatus === 'success' && (
            <span className="text-green-400 text-sm">Thanks! We'll get back to you soon.</span>
          )}
          {submitStatus === 'error' && (
            <span className="text-red-400 text-sm">Something went wrong. Please try again.</span>
          )}
        </div>
      </nav>

      <div className="main text-center justify-center items-center text-white w-[80%] relative top-20">
        <img
          src="https://cdn.prod.website-files.com/68fbf3ba4c59bf6b6664b8c9/68fbf3bb4c59bf6b6664b964_spring.png"
          alt="spring"
          style={{objectFit: 'fill'}}
          className="absolute inset-0 image-default -z-100 left-80"
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
            <h1 className="text-6xl font-semibold heading w-[60%] max-w-[75%] text-left ">
              Impact We Created
            </h1>
          </div>
          <div className="flex flex-col justify-between items-start">
            <p className=" text-base font-normal max-w-[85%] text-left mt-5">
              At FIXRR, we specialize in offering a full range of creative
              branding, strategy, design and development services tailored to
              bring your ideas to life.
            </p>
            <button className="border-2 border-white rounded-full  px-6 py-2 flex flex-row items-center justify-center gap-3 cursor-pointer hover:bg-white hover:text-black transition duration-300 mt-5">
              Book a Free call <MdOutlineArrowRightAlt />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-16">
          <Services
            link={
              "https://cdn.prod.website-files.com/68fbf3ba4c59bf6b6664b8c9/68fbf3bb4c59bf6b6664b96f_home-work-image-1.avif"
            }
            service={"UI/UX Design"}
            serviceName={"Wayflyer Dashboard"}
          />
          <Services
            link={
              "https://cdn.prod.website-files.com/68fbf3ba4c59bf6b6664b8c9/68fbf3bb4c59bf6b6664b970_work-image-%20(3).avif"
            }
            service={"Branding & Logo"}
            serviceName={"Visual Identity"}
          />
          <Services
            link={
              "https://cdn.prod.website-files.com/68fbf3ba4c59bf6b6664b8c9/68fbf3bb4c59bf6b6664b971_work-image-%20(2).avif"
            }
            service={"Digital Marketing"}
            serviceName={"Social Media Marketing"}
          />
          <Services
            link={
              "https://cdn.prod.website-files.com/68fbf3ba4c59bf6b6664b8c9/68fbf3bb4c59bf6b6664b974_work-image-%20(1).avif"
            }
            service={"custom software development"}
            serviceName={"Elevate Your App"}
          />
        </div>
      </div>

      <div className="offer-div fade-div  flex flex-col items-center justify-center gap-10 mb-20 relative top-56 mt-20 inset-x-0 w-[80%] text-white">
        <h1 className="offer-head">We Offer Expertise in</h1>
        <ul className="offer-list">
          <div
            className={"offer-item " + (active === 0 ? "active" : "")}
            onClick={() => setActive(active === 0 ? null : 0)}
          >
            <li>
              <div className="offers">
                <h2>01</h2>
                <h1>Brand Design</h1>
              </div>
              <img src="https://cdn.prod.website-files.com/68fbf3ba4c59bf6b6664b8c9/68fbf3bb4c59bf6b6664b96b_home-services-image-01.webp" />
              <MdOutlineArrowOutward size={70} />
            </li>
            <p>
              We craft unique brand identities — from logos, colors, and
              typography to complete visual systems. Our agency helps businesses
              stand out with cohesive, modern, and memorable designs.
            </p>
          </div>
          <hr />
          <div
            className={"offer-item " + (active === 1 ? "active" : "")}
            onClick={() => setActive(active === 1 ? null : 1)}
          >
            <li>
              <div className="offers">
                <h2>02</h2>
                <h1>UI/Ux Design</h1>
              </div>
              <img src="https://cdn.prod.website-files.com/68fbf3ba4c59bf6b6664b8c9/68fbf3bb4c59bf6b6664b956_home-services-image-1.avif" />
              <MdOutlineArrowOutward size={70} />
            </li>
            <p>
              We design clean, intuitive, and user-focused interfaces that
              elevate digital experiences. From wireframes to polished visuals,
              we turn ideas into seamless, engaging products.
            </p>
          </div>
          <hr />
          <div
            className={"offer-item " + (active === 2 ? "active" : "")}
            onClick={() => setActive(active === 2 ? null : 2)}
          >
            <li>
              <div className="offers">
                <h2>03</h2>
                <h1>Web development</h1>
              </div>
              <img src="https://cdn.prod.website-files.com/68fbf3ba4c59bf6b6664b8c9/68fbf3bb4c59bf6b6664b966_home-services-image-02.webp" />
              <MdOutlineArrowOutward size={70} />
            </li>
            <p>
              We build fast, responsive, and scalable websites tailored to your
              brand and goals. From landing pages to full web apps, we turn
              designs into functional, user-friendly digital products.
            </p>
          </div>
          <hr />
          <div
            className={"offer-item " + (active === 3 ? "active" : "")}
            onClick={() => setActive(active === 3 ? null : 3)}
          >
            <li>
              <div className="offers">
                <h2>04</h2>
                <h1>Strategy</h1>
              </div>
              <img src="https://cdn.prod.website-files.com/68fbf3ba4c59bf6b6664b8c9/68fbf3bb4c59bf6b6664b96c_home-services-image-03.webp" />
              <MdOutlineArrowOutward size={70} />
            </li>
            <p>
              We create smart brand and marketing strategies that drive growth
              and impact. From audience research to positioning, we turn
              insights into actionable plans for success.
            </p>
          </div>
          <hr />
        </ul>
      </div>

      <div className="flex flex-col inset-x-0 justify-between items-center text-center mb-20 relative top-52 gap-10 w-[80%]">
        
        
        <h1 className="text-6xl w-[60%] font-bold mt-20">
          Worldwide Trust Built on Excellence
        </h1>
        <div className="flex flex-row justify-between items-center testmonial-card">
          <img
            src={testimonials[testimonialIndex].img}
            width={500}
            className="rounded-3xl"
            alt={testimonials[testimonialIndex].name}
          />
          <div className="flex flex-col justify-center items-center gap-24">
            <p className="text-2xl text-left font-bold w-[70%]">
              {testimonials[testimonialIndex].text}
            </p>
            <div className="flex flex-row justify-between items-center w-[70%] inset-x-0">
              <div className="flex flex-col justify-start items-start">
                <h1 className="font-bold text-[25px]">
                  {testimonials[testimonialIndex].name}
                </h1>
                <p className="font-normal text-lg">
                  {testimonials[testimonialIndex].title}
                </p>
              </div>
              <div className="flex flex-row gap-6">
                <div className="arrows rounded-full left-arrow">
                  <IoArrowBackOutline
                    size={40}
                    className="cursor-pointer border rounded-full"
                    onClick={handlePrevTestimonial}
                  />
                </div>
                <div className="arrows rounded-full right-arrow">
                  <IoArrowForwardSharp
                    size={40}
                    className="cursor-pointer  border rounded-full"
                    onClick={handleNextTestimonial}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fade-div flex flex-col inset-x-0 items-center justify-between text-center w-[80%] mb-20 relative top-52 gap-10">
        <div className="flex flex-row justify-between items-center inset-x-0 w-full">
          <h1 className="text-5xl font-bold w-[40%] text-left">
            Lets Collaborate with us
          </h1>
          <MdOutlineArrowOutward size={70} />
        </div>

        <div className=" flex flex-row justify-between items-center inset-x-0 w-full mb-10">
          <div className="flex flex-col items-center justify-between gap-5 w-[25%]">
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
            <p className="text-base  text-left ">
              We helps startup companies grow, with exceptional user experiences
              to stand out in the market.
            </p>
          </div>
          <div className="flex flex-col justify-between items-center gap-10 w-[25%]">
            <h1 className="text-2xl">Links</h1>
            <ul className="flex flex-col justify-between items-center gap-10">
              <li className ="text-xl font-bold"><a href="https://instagram.com/ishefo0">Founder Instagram profile</a></li>
              <li className ="text-xl font-bold"><a href="https://instagram.com/fixrr.agency">Agency Instagram profile</a></li>
            </ul>
          </div>
          <div className="flex flex-col justify-between items-center gap-5 w-[25%]">
            <h1>EGYPT | TANTA</h1>
            <h1>Egypt Standard Time (EGY)</h1>
            <a href="mailto:info.mail@gmail.com?subject=Hello"><div>fixrr@fixrr.agency</div></a>
          </div>
          <div className="flex flex-col justify-between items-center gap-5">
            <h1>Links</h1>
            <ul className="flex flex-row  items-center gap-10">
              <li><a href=" ">
                <FaLinkedin size={30}/>
              </a></li>
              <li><a href="https://instagram.com/fixrr.agency">
                <FaInstagram size={30}/>
              </a></li>
              <li><a href="https://wa.me/+201274375560">
                <FaWhatsapp size={30}/>
              </a></li>
            </ul>
            <div className="w-full max-w-md flex flex-col">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full px-6 py-3 mb-4 rounded-lg bg-transparent border-2 border-white text-white placeholder-gray-300 focus:outline-none focus:border-white"
          />
          <button 
            onClick={handleSubmit}
            disabled={isLoading || !email}
            className={`w-full border-2 border-white rounded-lg px-6 py-3 flex items-center justify-center gap-3 cursor-pointer transition duration-300 
              ${isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white hover:text-black'}`}
          >
            {isLoading ? 'Submitting...' : 'Get in Touch'} <MdOutlineArrowRightAlt />
          </button>
          {submitStatus === 'success' && (
            <span className="block mt-3 text-green-400">Thank you! We'll be in touch soon.</span>
          )}
          {submitStatus === 'error' && (
            <span className="block mt-3 text-red-400">Something went wrong. Please try again.</span>
          )}
        </div>

          </div>
        </div>
        <hr className="border w-full"/>

        <p className="w-[40%]">@2025 FIXRR, Inc All rights reserved Made by Ahmed Sherif

This is some text inside of a div block.</p>
      </div>
    </div>
  );
}
