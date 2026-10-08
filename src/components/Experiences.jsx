import React from "react";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Web Design Intern - IT Universe Techsol Pvt. Ltd.",
    bullets: [
      "Assisted in developing responsive web pages using HTML, CSS, and JavaScript",
      "Worked on UI enhancements and Website maintenance tasks.",
      "Collaborated with developers and designers to implement project requirements",
    ],
    duration: "Aug 2022 - Nov 2022",
  },
  {
    role: "MERN Stack Developer Trainee",
    bullets: [
      "Completed MERN Stack training, specializing in full-stack web application development.",
      "Developed responsive, high-performance web applications using React.js, Next.js, Node.js, and Express.js.",
      "Built robust RESTful APIs and managed MongoDB database schemas and data integration.",
      "Implemented secure user authentication and authorization workflows using JWT and bcrypt.",
      "Designed reusable, component-based user interfaces adhering to modern frontend best practices.",
      "Managed project repositories, full-stack deployments, and version control using Git and GitHub."
    ],
    duration: "2026 - Present"
  },
  
];

export default function Experiences() {
  return (
    <section className="w-full py-16 md:py-20 2xl:py-24 bg-gray-100/50 dark:bg-[#0b0f19] transition-colors duration-300">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 md:gap-12 md:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center gap-4">
          <div className="self-center">
            <div className="flex items-center justify-center rounded-xl bg-gray-200 dark:bg-gray-800 px-5 py-1 transition-colors duration-300">
              <p className="text-normal text-sm font-medium text-gray-900 dark:text-gray-200">
                Work Experience
              </p>
            </div>
          </div>
          <p className="text-normal text-lg md:text-xl max-w-xl text-center text-gray-600 dark:text-gray-300 leading-relaxed">
            Here is a quick summary of my most recent experiences:
          </p>
        </div>

        {/* Experience Cards */}
        <div className="flex flex-col gap-8 mt-8 items-center w-full">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="rounded-xl bg-white dark:bg-[#111827] shadow-md dark:shadow-2xl border border-gray-100 dark:border-gray-800/80 mx-auto flex w-full max-w-4xl flex-col justify-between gap-4 p-8 md:flex-row md:gap-8 transition-colors duration-300"
            >
              
              {/* Left Column: Logo/Icon */}
              <div className="max-md:order-1 md:w-1/4 flex items-start">
                <div className="flex items-center gap-2 text-emerald-500 font-semibold">
                  <div className="p-2 bg-emerald-50 dark:bg-emerald-950/30 rounded-lg">
                    <Briefcase className="h-6 w-6 text-emerald-500" />
                  </div>
                  <span className="md:hidden text-lg text-gray-900 dark:text-gray-100">
                    {exp.role}  
                  </span>
                </div>
              </div>

              {/* Middle Column: Details */}
              <div className="flex flex-col gap-4 max-md:order-3 md:w-2/4">
                <p className="text-lg md:text-xl font-semibold text-gray-900 dark:text-gray-50 hidden md:block transition-colors">
                  {exp.role}
                </p>
                <ul className="flex list-disc pl-5 flex-col gap-2 text-gray-600 dark:text-gray-300 text-normal text-base leading-relaxed">
                  {exp.bullets.map((bullet, idx) => (
                    <li key={idx}>{bullet}</li>
                  ))}
                </ul>
              </div>

              {/* Right Column: Duration */}
              <div className="max-md:order-2 md:w-1/4">
                <p className="text-base text-gray-500 dark:text-gray-400 md:text-right font-medium">
                  {exp.duration}
                </p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
