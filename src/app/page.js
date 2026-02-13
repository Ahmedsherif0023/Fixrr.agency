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
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MdMenu, MdClose } from "react-icons/md";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [active, setActive] = useState(null);
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const handleSubmit = async () => {
    if (!email || isLoading) return;

    setIsLoading(true);
    setSubmitStatus(null);

    try {
      // Create a form data object
      const formData = new URLSearchParams();
      formData.append("email", email);
      formData.append("source", "Website Form");

      // Create the URL with parameters
      const url = `https://script.google.com/macros/s/AKfycbyCi_3HZ0VCqDDMlS3kq8kuT7SlsGTUidL4J2y67yKkX8ljwTlCX3Zaevi1lFIE30lE/exec?${formData.toString()}`;

      // Create a script element
      const script = document.createElement("script");
      script.src = url;

      // Create a promise to handle the response
      const submitPromise = new Promise((resolve, reject) => {
        // Define callback function
        window.handleGoogleResponse = (response) => {
          if (response.status === "success") {
            resolve(response);
          } else {
            reject(new Error(response.message || "Submission failed"));
          }
          // Clean up
          delete window.handleGoogleResponse;
          document.body.removeChild(script);
        };

        // Add error handling
        script.onerror = () => {
          reject(new Error("Failed to submit form"));
          delete window.handleGoogleResponse;
          document.body.removeChild(script);
        };
      });

      // Add script to document
      document.body.appendChild(script);

      // Wait for response
      await submitPromise;

      // If we get here, submission was successful
      setSubmitStatus("success");
      setEmail("");
    } catch (err) {
      console.error("Submission error:", err);
      setSubmitStatus("error");
    } finally {
      setIsLoading(false);
    }
  };

  // Testimonial carousel state
  const testimonials = [
    {
      img: "https://cdn.prod.website-files.com/68fbf3ba4c59bf6b6664b8c9/68fbf3bb4c59bf6b6664b963_testimony-image-1.avif",
      text: '"Working with FIXRR was an absolute game-changer for our business. Their team brought creativity, professionalism, and innovation to every step of the project. Our brand has never looked better!"',
      name: "Michael S.",
      title: "CEO of DynaMotion",
    },
    {
      img: "/client2.png",
      text: '"FIXRR exceeded our expectations. The process was smooth, and the results were outstanding. Highly recommended!"',
      name: "Rebecca P.",
      title: "Founder of TechNova",
    },
    {
      img: "/client3.png",
      text: '"Professional, creative, and always on time. FIXRR is our go-to agency for all things digital."',
      name: "John M.",
      title: "Marketing Lead at BrightEdge",
    },
  ];

  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const services = [
    {
      title: "Brand Design",
      number: "01",
      text: "We craft unique brand identities — from logos, colors, and typography to complete visual systems. Our agency helps businesses stand out with cohesive, modern, and memorable designs.",
      img: "https://cdn.prod.website-files.com/68fbf3ba4c59bf6b6664b8c9/68fbf3bb4c59bf6b6664b96b_home-services-image-01.webp",
    },
    {
      title: "UI/UX Design",
      number: "02",
      text: "We design clean, intuitive, and user-focused interfaces that elevate digital experiences. From wireframes to polished visuals, we turn ideas into seamless, engaging products.",
      img: "https://cdn.prod.website-files.com/68fbf3ba4c59bf6b6664b8c9/68fbf3bb4c59bf6b6664b956_home-services-image-1.avif",
    },
    {
      title: "Web Development",
      number: "03",
      text: "We build fast, responsive, and scalable websites tailored to your brand and goals. From landing pages to full web apps, we turn designs into functional, user-friendly digital products.",
      img: "https://cdn.prod.website-files.com/68fbf3ba4c59bf6b6664b8c9/68fbf3bb4c59bf6b6664b966_home-services-image-02.webp",
    },
    {
      title: "Strategy",
      number: "04",
      text: "We create smart brand and marketing strategies that drive growth and impact. From audience research to positioning, we turn insights into actionable plans for success.",
      img: "https://cdn.prod.website-files.com/68fbf3ba4c59bf6b6664b8c9/68fbf3bb4c59bf6b6664b96c_home-services-image-03.webp",
    },
  ];

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
    gsap.utils.toArray(".fade-div").forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%", // start fade when element is near bottom of viewport
            toggleActions: "play none none none", // play once
          },
        }
      );
    });
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      className="flex min-h-screen items-center justify-between flex-col  w-full static"
      id="home"
    >
      <nav className="absolute top-0 inset-x-0 z-50 w-full p-6 text-white">
        <div className="flex items-center justify-between w-[80%] mx-auto">
          {/* Logo */}
          <div className="flex items-center gap-5">
            <img
              src="/icon.webp"
              alt="FIXRR agency logo"
              width={40}
              height={40}
              priority={true}
            />
            <h1 className="text-4xl font-semibold">FIXRR</h1>
          </div>

          {/* Desktop Links */}
          <ul className="hidden md:flex gap-7 text-lg">
            <li className="cursor-pointer">
              <a href="#home">Home</a>
            </li>
            <li className="cursor-pointer">
              <a href="#about">About Us</a>
            </li>
            <li className="cursor-pointer">
              <a href="#projects">Projects</a>
            </li>
            <li className="cursor-pointer">
              <a href="#services">Services</a>
            </li>
            {/* <li className="cursor-pointer">
              <a href="#testmonials">Testimonials</a>
            </li> */}
          </ul>

          {/* Desktop Button */}
          <div className="hidden md:flex">
            <a
              href="https://calendly.com/fixrragency"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white rounded-full px-6 py-2 flex items-center gap-3 transition duration-300 hover:bg-white hover:text-black"
            >
              Book a Free call <MdOutlineArrowRightAlt />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <MdClose size={28} /> : <MdMenu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 w-[80%] mx-auto bg-black bg-opacity-90 rounded-lg p-6 flex flex-col gap-5 text-lg">
            <a href="#home" onClick={() => setIsOpen(false)}>
              Home
            </a>
            <a href="#about" onClick={() => setIsOpen(false)}>
              About Us
            </a>
            <a href="#projects" onClick={() => setIsOpen(false)}>
              Projects
            </a>
            <a href="#services" onClick={() => setIsOpen(false)}>
              Services
            </a>
            <a href="#testmonials" onClick={() => setIsOpen(false)}>
              Testimonials
            </a>
            <a
              href="https://calendly.com/fixrragency"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white rounded-full px-6 py-2 flex items-center gap-3 transition duration-300 hover:bg-white hover:text-black text-center"
            >
              Book a Free call <MdOutlineArrowRightAlt />
            </a>
          </div>
        )}
      </nav>

      <div
        className="main relative top-20 w-[80%] mx-auto text-white text-center md:text-left"
        id="home"
      >
        {/* Background Image */}
        <img
          src="https://cdn.prod.website-files.com/68fbf3ba4c59bf6b6664b8c9/68fbf3bb4c59bf6b6664b964_spring.png"
          alt="spring"
          className="absolute inset-0 object-cover left-1/2 transform -translate-x-1/2 -z-10 w-full max-w-[600px]"
          quality={100}
          priority
        />
        {/* Overlay Color */}
        <div className="absolute inset-0 -z-20 bg-color-left"></div>{" "}
        {/* semi-transparent overlay */}
        {/* Text Content */}
        <div className="relative z-10 w-full md:w-[70%] mx-auto md:mx-0 top-20 md:top-36">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold">
            Emotion-Driven Design: Building Brand Loyalty
          </h1>
        </div>
      </div>

      <div className="w-full px-6 md:px-20 flex flex-col md:flex-row items-center justify-between gap-10 mt-40 mb-40 relative top-48">
        {/* Images - left on large screens */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start mb-10 md:mb-0">
          <div className="fade-div flex flex-row md:flex-col items-center justify-center gap-5 md:gap-10">
            <div className="relative w-32 h-32 flex items-center justify-center">
              <img
                src="https://cdn.prod.website-files.com/68fbf3ba4c59bf6b6664b8c9/68fbf3bb4c59bf6b6664b952_Scroll%20Button.png"
                loading="lazy"
                className="spin-slow absolute inset-0 w-full h-full object-cover"
              />
              <img
                src="https://cdn.prod.website-files.com/68fbf3ba4c59bf6b6664b8c9/68fbf3bb4c59bf6b6664b954_arrow.svg"
                className="hero_rotating-badge_arrow absolute w-10 h-10 object-contain"
              />
            </div>
          </div>
        </div>

        {/* Text - right on large screens */}
        <div className="w-full md:w-1/2 flex flex-col gap-7 text-center md:text-left">
          <h1 className="font-semibold heading text-lg sm:text-xl md:text-2xl lg:text-3xl max-w-md">
            Passionate Egyptian Team: Crafting Digital Solutions to Meet Your
            Needs. Empower Your Brand with Innovation.
          </h1>
          <div className="flex items-center gap-4 mt-5 justify-center md:justify-start">
            <a
              href="https://calendly.com/fixrragency"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white rounded-full px-6 py-2 flex flex-row items-center justify-center gap-3 transition duration-300 hover:bg-white hover:text-black"
            >
              Book a Free call <MdOutlineArrowRightAlt />
            </a>
          </div>
        </div>
      </div>

      <div className="fade-div w-full flex flex-wrap md:flex-row items-center justify-center gap-6 md:gap-12 text-white relative top-36 mb-20">
        <FaFigma className="text-[40px] sm:text-[45px] md:text-[55px]" />
        <RiJavascriptFill className="text-[40px] sm:text-[45px] md:text-[55px]" />
        <FaReact className="text-[40px] sm:text-[45px] md:text-[55px]" />
        <FaNodeJs className="text-[40px] sm:text-[45px] md:text-[55px]" />
        <IoLogoVercel className="text-[40px] sm:text-[45px] md:text-[55px]" />
      </div>

      <div
        className="fade-div flex flex-col items-center justify-between inset-x-0 relative top-48 gap-30 w-[80%]"
        id="about"
      >
        <div
          className="fade-div flex flex-col md:flex-row items-center justify-between inset-x-0 relative top-0 gap-10 w-[80%] mx-auto"
          id="about"
        >
          <h1 className="text-2xl  text-center sm:text-3xl md:text-5xl lg:text-6xl font-semibold heading w-full md:w-[60%] max-w-full md:max-w-[45%] md:text-left md:my-10">
            We make your business stand out
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-normal w-full md:w-[40%] max-w-full md:max-w-[40%] text-left">
            At Fixrr, we are the architects of distinctive and memorable
            creative experiences. That align with but surpass the continually
            evolving standards of the creative landscape.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between w-[95%] mx-auto gap-10">
          {/* Hero Image */}
          <img
            src="https://cdn.prod.website-files.com/68fbf3ba4c59bf6b6664b8c9/68fbf3bb4c59bf6b6664b965_round_tube.png"
            alt="hero image"
            className="w-full max-w-[500px] h-auto"
            priority
          />

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-10 md:gap-28 w-full">
            <div className="text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                329+
              </h1>
              <p className="text-sm sm:text-base md:text-lg">
                Project Completed
              </p>
            </div>
            <div className="text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                99%
              </h1>
              <p className="text-sm sm:text-base md:text-lg">
                Satisfied Clients
              </p>
            </div>
            <div className="text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                6240+
              </h1>
              <p className="text-sm sm:text-base md:text-lg">Hours of work</p>
            </div>
            <div className="text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                05+
              </h1>
              <p className="text-sm sm:text-base md:text-lg">
                Years Experience
              </p>
            </div>
          </div>
        </div>

        <div className="bg-color-right -z-50"></div>
      </div>

      <div
        className="fade-div flex flex-col items-center justify-center gap-10 mb-20 relative top-56 mt-20 inset-x-0 w-[80%]"
        id="projects"
      >
        <div className="flex flex-col md:flex-row inset-x-0 justify-between items-start w-full gap-10 md:gap-0">
          {/* Heading */}
          <div className="flex flex-col justify-start items-start w-full md:w-[60%]">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-semibold heading w-full md:max-w-[75%] text-left">
              Impact We Created
            </h1>
          </div>

          {/* Paragraph + Button */}
          <div className="flex flex-col justify-start items-start w-full md:w-[40%]">
            <p className="text-sm sm:text-base md:text-base font-normal max-w-full md:max-w-[85%] text-left mt-5">
              At FIXRR, we specialize in offering a full range of creative
              branding, strategy, design and development services tailored to
              bring your ideas to life.
            </p>
            <div className="flex items-center gap-4 mt-5">
              <a
                href="https://calendly.com/fixrragency"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white rounded-full px-6 py-2 flex flex-row items-center justify-center gap-3 transition duration-300 hover:bg-white hover:text-black"
              >
                Book a Free call <MdOutlineArrowRightAlt />
              </a>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16">
          <Services
            link="https://cdn.prod.website-files.com/68fbf3ba4c59bf6b6664b8c9/68fbf3bb4c59bf6b6664b96f_home-work-image-1.avif"
            service="UI/UX Design"
            serviceName="Custom App Designing"
            className="text-sm sm:text-base md:text-lg"
            serviceLink="https://www.figma.com/proto/EtpGIhuhL54mqVgcgo8398/Pharmacy-Store---Ecommerce-Medicinal-Store--Community-?node-id=16-386&t=j6frROhMTF5zTdmz-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1"
          />
          <Services
            link="https://cdn.prod.website-files.com/68fbf3ba4c59bf6b6664b8c9/68fbf3bb4c59bf6b6664b970_work-image-%20(3).avif"
            service="Branding & Logo"
            serviceName="Visual Identity"
            className="text-sm sm:text-base md:text-lg"
            serviceLink="https://calendly.com/fixrragency"
          />
          <Services
            link="https://cdn.prod.website-files.com/68fbf3ba4c59bf6b6664b8c9/68fbf3bb4c59bf6b6664b971_work-image-%20(2).avif"
            service="Digital Marketing"
            serviceName="Social Media Marketing"
            className="text-sm sm:text-base md:text-lg"
            serviceLink="https://calendly.com/fixrragency"
          />
          <Services
            link="https://cdn.prod.website-files.com/68fbf3ba4c59bf6b6664b8c9/68fbf3bb4c59bf6b6664b974_work-image-%20(1).avif"
            service="Custom Software Development"
            serviceName="Elevate Your App"
            className="text-sm sm:text-base md:text-lg"
            serviceLink="https://www.figma.com/proto/nJe1D4czQvef0rhicPwpn3/Future-Pharmacy-Mobile-App-UI-Design-By-Project-Manager-Rakib-Hasan-Community?node-id=0-1&p=f&t=e8swY3wU2j3VMPt5-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1"
          />
        </div>
      </div>

      <div
        className="offer-div fade-div flex flex-col items-center justify-center gap-6 mb-16 relative top-20 mt-28 inset-x-0 w-[90%] text-white"
        id="services"
      >
        <h1 className="offer-head text-xl sm:text-2xl md:text-5xl text-center leading-snug md:leading-tight">
          We Offer Expertise in
        </h1>
        <ul className="offer-list w-full flex flex-col gap-4 relative">
          {services.map((s, i) => (
            <div
              key={i}
              className={`offer-item relative ${
                active === i ? "active" : ""
              } w-full`}
              onClick={() => setActive(active === i ? null : i)}
            >
              <li className="fade-div flex flex-col md:flex-row items-start gap-2 md:gap-6 relative">
                <div className="offers flex flex-col gap-1 z-10">
                  <h2 className="text-sm sm:text-base md:text-xl font-bold">
                    {s.number}
                  </h2>
                  <h1 className="text-sm sm:text-base md:text-2xl font-semibold">
                    {s.title}
                  </h1>
                </div>

                {/* Image & arrow hidden on small screens, positioned absolutely on large screens */}
                <div className="hidden md:flex flex-row items-center gap-3 absolute right-0 top-0 md:top-1/2 md:translate-y-[-50%] z-20">
                  <img
                    src={s.img}
                    className="w-32  absolute  rounded-3xl"
                    alt={s.title}
                  />
                  <MdOutlineArrowOutward size={40} />
                </div>
              </li>
              <p className="text-xs sm:text-sm md:text-base mt-1">{s.text}</p>
              {i < services.length - 1 && (
                <hr className="mt-3 border-white/30" />
              )}
            </div>
          ))}
        </ul>
      </div>



      <div className="fade-div flex flex-col inset-x-0 items-center justify-between text-center w-[80%] mb-20 relative top-52 gap-10">
        <div className="flex flex-row justify-between items-center inset-x-0 w-full gap-4 md:gap-0">
          <h1 className="text-lg sm:text-3xl md:text-5xl font-bold w-full sm:w-4/5 md:w-[40%] text-left">
            Lets Collaborate with us
          </h1>
          <a
            href="https://calendly.com/fixrragency"
            target="_blank"
            rel="noopener noreferrer"
            className="border-white rounded-full flex flex-row items-center justify-center gap-3 transition duration-300 hover:bg-white hover:text-black"
          >
            <MdOutlineArrowOutward
              size={50}
              className="sm:size-[60] md:size-[70]"
            />
          </a>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center inset-x-0 w-full mb-10 gap-10 md:gap-0">
          {/* Column 1 */}
          <div className="flex flex-col items-start gap-3 w-full md:w-[25%]">
            <div className="logo flex flex-row gap-3 items-center">
              <img
                src="/icon.webp"
                alt="FIXRR agency logo"
                width={40}
                height={40}
                priority
              />
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                FIXRR
              </h1>
            </div>
            <p className="text-sm sm:text-base md:text-base text-left">
              We help startup companies grow, with exceptional user experiences
              to stand out in the market.
            </p>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col items-start gap-3 w-full md:w-[25%]">
            <h1 className="text-lg sm:text-xl md:text-2xl font-semibold">
              Links
            </h1>
            <ul className="flex flex-col gap-3">
              <li className="text-sm sm:text-base font-bold">
                <a href="https://instagram.com/ishefo0">
                  Founder Insta profile
                </a>
              </li>
              <li className="text-sm sm:text-base font-bold">
                <a href="https://instagram.com/fixrr.agency">
                  Agency Insta profile
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col items-start gap-2 w-full md:w-[25%]">
            <h1 className="text-sm sm:text-base md:text-base">EGYPT | TANTA</h1>
            <h1 className="text-sm sm:text-base md:text-base">
              Egypt Standard Time (EGY)
            </h1>
            <a
              href="mailto:info.mail@gmail.com?subject=Hello"
              className="text-sm sm:text-base md:text-base"
            >
              fixrr@fixrr.agency
            </a>
          </div>

          {/* Column 4 */}
          <div className="flex flex-col items-start gap-3 w-full md:w-[25%]">
            <h1 className="text-lg sm:text-xl md:text-2xl font-semibold">
              Contact Links
            </h1>
            <ul className="flex flex-row gap-4 md:gap-6">
              <li>
                <a href="#">
                  <FaLinkedin size={25} />
                </a>
              </li>
              <li>
                <a href="https://instagram.com/fixrr.agency">
                  <FaInstagram size={25} />
                </a>
              </li>
              <li>
                <a href="https://wa.me/+201274375560">
                  <FaWhatsapp size={25} />
                </a>
              </li>
            </ul>

            {/* Newsletter */}
            <div className="w-full max-w-md flex flex-col mt-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-2 mb-3 rounded-lg bg-transparent border-2 border-white text-white placeholder-gray-300 focus:outline-none focus:border-white text-sm sm:text-base"
              />
              <button
                onClick={handleSubmit}
                disabled={isLoading || !email}
                className={`w-full border-2 border-white rounded-lg px-4 py-2 flex items-center justify-center gap-2 cursor-pointer transition duration-300 text-sm sm:text-base 
        ${
          isLoading
            ? "opacity-50 cursor-not-allowed"
            : "hover:bg-white hover:text-black"
        }`}
              >
                {isLoading ? "Submitting..." : "Get in Touch"}{" "}
                <MdOutlineArrowRightAlt size={20} className="sm:size-[24]" />
              </button>
              {submitStatus === "success" && (
                <span className="block mt-2 text-green-400 text-sm sm:text-base">
                  Thank you! We'll be in touch soon.
                </span>
              )}
              {submitStatus === "error" && (
                <span className="block mt-2 text-red-400 text-sm sm:text-base">
                  Something went wrong. Please try again.
                </span>
              )}
            </div>
          </div>
        </div>
        <hr className="border w-full" />

        <p className="w-full sm:w-[60%] md:w-[40%] text-xs sm:text-sm md:text-base mb-2">
          @2025 FIXRR, Inc All rights reserved. Made by Ahmed Sherif
        </p>
      </div>
    </div>
  );
}
