import React from "react";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    name: "FreshVeg Direct",
    description: "A dynamic, mobile-friendly landing page for ordering organic vegetables directly from local farmers, featuring interactive product filtering, a persistent local-storage-backed shopping cart drawer, and keyboard accessibility.",
    tags: [
      "HTML5", "CSS3", "JavaScript", "Local Storage"
    ],
    link: "https://freshvegis.netlify.app/",
    image: "/images/project-freshveg.png"
  },
  {
    name: "ChatApp",
    description: "A highly responsive, serverless real-time chat application featuring room-based anonymous messaging. Powered by Firebase Firestore for persistent room history, Zustand for unified state management, and a custom heartbeat-supported session validation system that prevents duplicate usernames while allowing seamless session recovery upon browser reloads.",
    tags: [
      "Next.js 16", "React 19", "JavaScript", "Tailwind CSS", "Zustand", "Firebase Firestore", "Radix UI", "Zod"
    ],
    link: "https://chatwithany.netlify.app/",
    image: "/images/project-chat.png"
  },
  {
    name: "AnimeHUD",
    description: "A premium and responsive anime discovery and tracking dashboard. Integrates the AniList GraphQL API to serve real-time listings, trending/seasonal categories, and multi-filter search. Implements Firebase Auth with custom Jose-signed JWT session cookies for secure server-side route protection, watchlist management, and client-side Firestore syncing with local storage fallbacks.",
    tags: [
      "Next.js 16", "React 19", "Tailwind CSS", "Firebase Auth", "Firebase Firestore", "GraphQL", "AniList API", "Jose JWT"
    ],
    link: "https://animehub-kappa.vercel.app/home",
    image: "/images/project-animehud.png"
  },
    {
    name: "Eleganz",
    description: "A full-stack responsive MERN e-commerce storefront for fashion and clothing. Features custom JWT authentication, MongoDB Atlas database integration, dynamic multi-category product filtering, shopping cart management, Razorpay payment gateway with COD fallback, order tracking timeline, and a dedicated admin dashboard to manage inventory and update customer order statuses.",
    tags: [
      "React 18", "Node.js", "Express.js", "MongoDB Atlas", "JWT Auth", "Razorpay API", "Vite", "REST API", "CSS3"
    ],
    link: "https://eleganz-full-stack.vercel.app/",
    image: "/images/project-eleganz.png"
  },


];

export default function Work() {
  return (
    <section className="w-full bg-white dark:bg-[#030712] py-16 md:py-20 2xl:py-24 transition-colors duration-300">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 md:gap-12 md:px-8">

        {/* Header */}
        <div className="flex flex-col items-center gap-4">
          <div className="self-center">
            <div className="flex items-center justify-center rounded-xl bg-gray-200 dark:bg-gray-800 px-5 py-1 transition-colors duration-300">
              <p className="text-normal text-sm font-medium text-gray-900 dark:text-gray-200">Projects</p>
            </div>
          </div>
          <p className="text-normal text-lg md:text-xl max-w-xl text-center text-gray-600 dark:text-gray-300 leading-relaxed">
            Some of the noteworthy projects I have built:
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="flex flex-col gap-12 mt-8">
          {projects.map((proj, index) => {
            const isOdd = index % 2 === 1;
            return (
              <div
                key={index}
                className="rounded-xl bg-gray-50 dark:bg-[#111827] shadow-md dark:shadow-2xl border border-gray-100 dark:border-gray-800/80 mx-auto flex w-full max-w-6xl flex-col md:flex-row transition-colors duration-300"
              >

                {/* Image Section */}
                <div className={`flex items-center justify-center border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900 p-8 max-md:rounded-t-xl md:w-1/2 lg:p-12 ${isOdd ? 'md:order-last md:rounded-r-xl md:border-l' : 'md:rounded-l-xl md:border-r'}`}>
                  <a href={proj.link} target="_blank" rel="noopener noreferrer" className="block w-full">
                    <img
                      alt={`${proj.name} preview`}
                      loading="lazy"
                      className="rounded-xl shadow-lg transition-transform duration-500 hover:scale-105 w-full object-cover max-h-[300px]"
                      src={proj.image}
                    />
                  </a>
                </div>

                {/* Info Content Section */}
                <div className={`flex flex-col gap-6 p-8 md:w-1/2 lg:p-12 justify-center ${isOdd ? 'md:order-first' : ''}`}>
                  <p className="text-lg md:text-xl font-semibold text-gray-900 dark:text-gray-50">
                    {proj.name}
                  </p>
                  <p className="text-normal text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                    {proj.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2">
                    {proj.tags.map((tag, tIdx) => (
                      <div key={tIdx} className="flex items-center justify-center rounded-xl bg-gray-200 dark:bg-gray-800 px-3 py-1 transition-colors duration-300">
                        <p className="text-normal text-xs font-medium text-gray-700 dark:text-gray-300">{tag}</p>
                      </div>
                    ))}
                  </div>

                  {/* External Link */}
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="self-start rounded-lg p-1.5 hover:bg-gray-200 dark:hover:bg-gray-800 text-gray-500 hover:text-gray-900 dark:hover:text-gray-200 transition-colors"
                  >
                    <ExternalLink size={24} />
                  </a>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
