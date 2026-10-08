import { 
  FaReact, FaGitAlt, FaFigma, FaHtml5, FaCss3Alt, FaGithub, FaNodeJs 
} from "react-icons/fa";
import { 
  SiTailwindcss, SiNextdotjs, SiJavascript, SiPostman, SiBootstrap, SiExpress, SiMongodb 
} from "react-icons/si";

const skills = [
  {
    name: "HTML",
    icon: <FaHtml5 size={56} />,
    colorClass: "text-[#E34F26]",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    name: "CSS",
    icon: <FaCss3Alt size={56} />,
    colorClass: "text-[#1572B6]",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    name: "Javascript",
    icon: <SiJavascript size={56} />,
    colorClass: "text-[#F7DF1E]",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "React",
    icon: <FaReact size={56} />,
    colorClass: "text-[#61DAFB]",
    link: "https://react.dev/",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs size={56} />,
    colorClass: "text-black dark:text-white",
    link: "https://nextjs.org/",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs size={56} />,
    colorClass: "text-[#339933]",
    link: "https://nodejs.org/",
  },
  {
    name: "Express",
    icon: <SiExpress size={56} />,
    colorClass: "text-black dark:text-white",
    link: "https://expressjs.com/",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb size={56} />,
    colorClass: "text-[#47A248]",
    link: "https://www.mongodb.com/",
  },
  {
    name: "Tailwindcss",
    icon: <SiTailwindcss size={56} />,
    colorClass: "text-[#06B6D4]",
    link: "https://tailwindcss.com/",
  },
  {
    name: "Bootstrap",
    icon: <SiBootstrap size={56} />,
    colorClass: "text-[#7952B3]",
    link: "https://getbootstrap.com/",
  },
  {
    name: "Figma",
    icon: <FaFigma size={56} />,
    colorClass: "text-[#F24E1E]",
    link: "https://www.figma.com/",
  },
  {
    name: "Git",
    icon: <FaGitAlt size={56} />,
    colorClass: "text-[#F05032]",
    link: "https://git-scm.com/",
  },
  {
    name: "GitHub",
    icon: <FaGithub size={56} />,
    colorClass: "text-black dark:text-white",
    link: "https://github.com/PrEm-022",
  },
  {
    name: "Postman",
    icon: <SiPostman size={56} />,
    colorClass: "text-[#FF6C37]",
    link: "https://www.postman.com/",
  },
];

export default function Skill() {
  return (
    <section className="w-full py-16 md:py-20 2xl:py-24 bg-white dark:bg-[#030712] transition-colors duration-300">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 md:gap-12 md:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center gap-4">
          <div className="self-center">
            <div className="flex items-center justify-center rounded-xl bg-gray-200 dark:bg-gray-800 px-5 py-1 transition-colors duration-300">
              <p className="text-normal text-sm font-medium text-gray-900 dark:text-gray-200">Skills</p>
            </div>
          </div>
          <p className="text-normal text-lg md:text-xl max-w-xl text-center text-gray-600 dark:text-gray-300 leading-relaxed">
            The skills, tools and technologies I am really good at:
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-y-8 gap-x-4 mt-8">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center gap-2">
              <a 
                target="_blank" 
                rel="noopener noreferrer"
                href={skill.link}
                className="flex flex-col items-center gap-3 hover:scale-110 transition-all duration-300 group"
              >
                <div className={`flex items-center justify-center transition-transform duration-300 ${skill.colorClass}`}>
                  {skill.icon}
                </div>
                <p className="text-normal text-base md:text-lg text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-gray-150 transition-colors duration-300">
                  {skill.name}
                </p>
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}