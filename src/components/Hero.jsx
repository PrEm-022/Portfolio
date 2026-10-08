import React from "react";
import heroImage from "./img/hero-profile.jpeg";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="w-full bg-white dark:bg-[#030712] py-16 md:py-20 2xl:py-24 transition-colors duration-300">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 md:gap-12 md:px-8">
        <div className="flex flex-col gap-12 md:flex-row">
          
          {/* Right Image Side (Moves to top on mobile) */}
          <div className="flex items-center justify-center md:order-last md:flex-grow md:justify-end">
            <div className="relative h-[300px] w-[280px] md:h-[360px] md:w-[320px]">
              
              <img 
                alt="Headshot of Prem" 
                loading="lazy" 
                className="absolute z-10 h-[280px] w-[240px] border-8 border-white dark:border-[#030712] shadow-xl max-md:left-5 md:left-0 md:top-0 md:h-[320px] md:w-[280px] object-cover transition-colors duration-300"
                src={heroImage}
              />
              
              <div className="absolute h-[280px] w-[240px] md:h-[320px] md:w-[280px] border-8 border-transparent bg-gray-200 dark:bg-gray-800 max-md:top-5 max-md:left-10 md:bottom-0 md:right-0 transition-colors duration-300"></div>
            
            </div>
          </div>

          {/* Left Text Side */}
          <div className="flex max-w-3xl flex-grow flex-col justify-center gap-8 md:order-first md:items-start md:justify-center 2xl:gap-12">
            <div className="flex flex-col gap-2">
              <h1 className="text-4xl font-semibold md:font-bold md:text-5xl md:tracking-tight lg:text-6xl lg:leading-[72px] text-gray-900 dark:text-gray-50 transition-colors duration-300">
                Hi, I'm Prem
                <span className="inline-block animate-waving-hand ml-3">👋</span>
              </h1>
              
              <p className="text-normal text-base text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
                I'm a Full-Stack(MERN Developer) specializing in React.js, Next.js, Node.js, Express.js, and MongoDB. I'm passionate about building fast, accessible, visually appealing, and responsive web applications. I enjoy turning complex ideas into clean, maintainable, and scalable full-stack web applications.
              </p>
            </div>

            <div className="flex flex-col gap-2 text-gray-600 dark:text-gray-300">
              {/* Location */}
              <div className="flex gap-3 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="stroke-gray-600 dark:stroke-gray-400">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <p className="text-base">Ahmedabad, India</p>
              </div>

              {/* Status Indicator */}
              <div className="flex items-center gap-3">
                <div className="flex h-6 w-6 items-center justify-center">
                  <span className="relative flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500"></span>
                  </span>
                </div>
                <p className="text-base">Available for new projects</p>
              </div>
            </div>

            {/* Social icons */}
            <div className="flex gap-2">
              <a 
                href="https://github.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative flex justify-center items-center hover:bg-gray-100 dark:hover:bg-gray-800 active:bg-gray-200 dark:active:bg-gray-700 rounded-lg p-2 transition-colors duration-200 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
              >
                <FaGithub size={24} />
              </a>
              <a 
                href="https://twitter.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative flex justify-center items-center hover:bg-gray-100 dark:hover:bg-gray-800 active:bg-gray-200 dark:active:bg-gray-700 rounded-lg p-2 transition-colors duration-200 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
              >
                <FaTwitter size={24} />
              </a>
              <a 
                href="https://linkedin.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative flex justify-center items-center hover:bg-gray-100 dark:hover:bg-gray-800 active:bg-gray-200 dark:active:bg-gray-700 rounded-lg p-2 transition-colors duration-200 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
              >
                <FaLinkedin size={24} />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}