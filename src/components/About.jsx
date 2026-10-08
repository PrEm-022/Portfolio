import React from "react";
import developerPhoto from "./img/WhatsApp Image 2026-08-31 at 1.46.14 AM.jpeg";

export default function About() {
  return (
    <section className="w-full py-16 md:py-20 2xl:py-24 bg-gray-100/50 dark:bg-[#0b0f19] transition-colors duration-300">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 md:gap-12 md:px-8">
        
        {/* Section Badge */}
        <div className="self-center">
          <div className="flex items-center justify-center rounded-xl bg-gray-200 dark:bg-gray-800 px-5 py-1 transition-colors duration-300">
            <p className="text-normal text-sm font-medium text-gray-900 dark:text-gray-200">
              About me
            </p>
          </div>
        </div>

        {/* Section Grid */}
        <div className="flex w-full flex-col justify-between gap-12 md:flex-row">
          
          {/* Left/Right Image with backdrop offset */}
          <div className="flex justify-center md:order-first md:justify-end flex-shrink-0">
            <div className="relative h-[380px] w-[320px] md:h-[460px] md:w-[380px] lg:h-[520px] lg:w-[440px]">
              
              <img 
                alt="Fullpose of Developer" 
                loading="lazy" 
                className="absolute z-10 h-[360px] w-[280px] border-8 border-gray-100 dark:border-[#0b0f19] max-md:left-5 md:right-0 md:top-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px] object-cover transition-colors duration-300 shadow-xl"
                src={developerPhoto}
              />
              
              <div className="absolute h-[360px] w-[280px] md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px] border-8 border-transparent dark:bg-gray-800 max-md:top-5 max-md:left-10 md:bottom-0 md:left-0 transition-colors duration-300"></div>
            
            </div>
          </div>

          {/* Text Description Content */}
          <div className="flex max-w-xl flex-col gap-6 justify-center">
            <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900 dark:text-gray-50 transition-colors duration-300">
              Curious about me? Here you have it:
            </h3>
            
            <p className="text-normal text-base text-gray-600 dark:text-gray-300 leading-relaxed">
              I’m a Full-Stack MERN Developer passionate about building modern, responsive, and robust web applications across frontend and backend technologies.
            </p>
            
            <p className="text-normal text-base text-gray-600 dark:text-gray-300 leading-relaxed">
              My journey in web development began in 2024, and since then I’ve built full-stack applications with the MERN ecosystem. I work with MongoDB, Express.js, React.js, Node.js, Next.js, Tailwind CSS, JavaScript, HTML, and CSS to deliver end-to-end web applications.
            </p>
            
            <p className="text-normal text-base text-gray-600 dark:text-gray-300 leading-relaxed">
              Beyond development, I spend time exploring design trends,
              startups, indie products, and emerging technologies. I also build and share projects on{" "}
              <a
                href="https://github.com/PrEm-022"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:text-black dark:hover:text-white transition-colors"
              >
                GitHub,
              </a>{" "}
              constantly improving my technical skills while expanding my understanding of full-stack development and creating better user experiences.
            </p>
            
            <p>A few quick things about me:</p>

            <div className="flex flex-col md:flex-row gap-2 md:gap-8">
              <ul className="list-disc list-inside space-y-2">
                <li>B.Tech in Computer Science Engineering</li>
                <li>Full-Stack MERN Developer</li>
              </ul>

              <ul className="list-disc list-inside space-y-2">
                <li>Avid learner</li>
                <li>Exploring indie projects and startups</li>
              </ul>
            </div>
            
            <p className="text-normal text-base text-gray-600 dark:text-gray-300 leading-relaxed">
              Open to full-stack & frontend opportunities and collaborations—feel free to reach out and say hello!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}