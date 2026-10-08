import React, { useState } from "react";
import { Mail, Phone, Copy, Check } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text).then(() => {
      if (type === "email") {
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 1500);
      } else if (type === "phone") {
        setCopiedPhone(true);
        setTimeout(() => setCopiedPhone(false), 1500);
      }
    });
  };

  return (
    <section className="w-full bg-white dark:bg-[#030712] py-16 md:py-20 2xl:py-24 transition-colors duration-300">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 md:gap-12 md:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center gap-4">
          <div className="self-center">
            <div className="flex items-center justify-center rounded-xl bg-gray-200 dark:bg-gray-800 px-5 py-1 transition-colors duration-300">
              <p className="text-normal text-sm font-medium text-gray-900 dark:text-gray-200">
                Get in touch
              </p>
            </div>
          </div>
          <p className="text-normal text-lg md:text-xl max-w-xl text-center text-gray-600 dark:text-gray-300 leading-relaxed">
            What’s next? Feel free to reach out to me if you are looking for a developer, have a query, or simply want to connect.
          </p>
        </div>

        {/* Contact Details */}
        <div className="flex flex-col items-center gap-6 md:gap-12 mt-8">
          
          <div className="flex flex-col items-center gap-4 md:gap-6">
            
            {/* Email Contact Card */}
            <div className="flex items-center gap-3 md:gap-5">
              <Mail className="h-6 w-6 md:h-8 md:w-8 text-gray-600 dark:text-gray-400" />
              <h2 className="text-lg md:text-4xl font-semibold tracking-tight text-gray-900 dark:text-gray-50 transition-colors">
                premgehlot002@gmail.com
              </h2>
              
              <button
                onClick={() => copyToClipboard("premgehlot002@gmail.com", "email")}
                className="relative p-2 rounded-lg hover:bg-gray-150 dark:hover:bg-gray-800 text-gray-500 hover:text-gray-900 dark:hover:text-gray-100 transition-all active:scale-95 cursor-pointer flex items-center justify-center"
                title="Copy Email"
              >
                {copiedEmail ? (
                  <>
                    <Check className="h-6 w-6 md:h-7 md:w-7 text-emerald-500" />
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded shadow-md pointer-events-none">Copied!</span>
                  </>
                ) : (
                  <Copy className="h-6 w-6 md:h-7 md:w-7" />
                )}
              </button>
            </div>

            {/* Phone Contact Card */}
            <div className="flex items-center gap-3 md:gap-5">
              <Phone className="h-6 w-6 md:h-8 md:w-8 text-gray-600 dark:text-gray-400" />
              <h2 className="text-lg md:text-4xl font-semibold tracking-tight text-gray-900 dark:text-gray-50 transition-colors">
                +91 9587023159
              </h2>
              
              <button
                onClick={() => copyToClipboard("+91 9587023159", "phone")}
                className="relative p-2 rounded-lg hover:bg-gray-150 dark:hover:bg-gray-800 text-gray-500 hover:text-gray-900 dark:hover:text-gray-100 transition-all active:scale-95 cursor-pointer flex items-center justify-center"
                title="Copy Phone Number"
              >
                {copiedPhone ? (
                  <>
                    <Check className="h-6 w-6 md:h-7 md:w-7 text-emerald-500" />
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded shadow-md pointer-events-none">Copied!</span>
                  </>
                ) : (
                  <Copy className="h-6 w-6 md:h-7 md:w-7" />
                )}
              </button>
            </div>

          </div>

          {/* Social Platforms Links */}
          <div className="flex flex-col items-center gap-3">
            <p className="text-base text-gray-600 dark:text-gray-300">
              You may also find me on these platforms!
            </p>
            <div className="flex gap-2">
              <a 
                href="https://github.com/PrEm-022" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
              >
                <FaGithub size={24} />
              </a>
              <a 
                href="https://linkedin.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
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