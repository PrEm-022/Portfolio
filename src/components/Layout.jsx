import React, { useState, useEffect } from 'react'
import { Link, Outlet } from 'react-router'
import { Sun, Moon, Menu, X } from 'lucide-react'

export default function Layout() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark" ||
    (!localStorage.getItem("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches)
  )
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
      document.documentElement.style.colorScheme = 'dark'
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      document.documentElement.style.colorScheme = 'light'
      localStorage.setItem("theme", "light")
    }
  }, [darkMode])

  // Close mobile menu on clicking a link
  const handleLinkClick = () => {
    setMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-600 dark:bg-[#030712] dark:text-gray-300 transition-colors duration-300 antialiased font-sans">

      {/* Header */}
      <header className="sticky top-0 z-30 w-full border-b border-transparent bg-gray-50/80 dark:bg-[#030712]/80 backdrop-blur-md max-md:border-gray-100 dark:max-md:border-gray-800 transition-all">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between p-4 md:px-8">

          {/* Logo */}
          <a href="#hero" className="inline-block">
            <h3 className="text-2xl md:text-3xl tracking-tight text-gray-900 dark:text-gray-50 font-bold hover:opacity-80 transition-opacity">
              &lt;PG /&gt;
            </h3>
          </a>

          {/* Desktop Menu */}
          <div className="hidden items-center gap-6 md:flex">
            <ul className="flex list-none items-center gap-6">
              <li>
                <a className="text-base font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="text-base font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors" href="#experiences">
                  Experience
                </a>
              </li>
              <li>
                <a className="text-base font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors" href="#work">
                  Work
                </a>
              </li>
              <li>
                <a className="text-base font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
            <div className="h-6 w-px bg-gray-200 dark:bg-gray-800"></div>
            <div className="flex items-center gap-4">

              {/* Theme Toggle Button */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="relative flex justify-center items-center hover:bg-gray-100 active:bg-gray-200 dark:hover:bg-gray-800 dark:active:bg-gray-700 rounded-lg p-1.5 transition-colors duration-200 cursor-pointer text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
              >
                {darkMode ? <Sun size={24} /> : <Moon size={24} />}
              </button>

              <button className="inline-flex items-center justify-center rounded-xl bg-gray-900 px-4 py-1.5 font-medium text-gray-50 transition-colors duration-200 hover:bg-gray-700 active:bg-gray-800 dark:bg-gray-50 dark:text-gray-950 dark:hover:bg-gray-200 cursor-pointer">
                Download CV
              </button>
            </div>
          </div>

          {/* Mobile Hamburguer Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="relative flex justify-center items-center hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg p-1.5 transition-colors duration-200 md:hidden text-gray-600 dark:text-gray-400 cursor-pointer"
            type="button"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Mobile Drawer Slide-in Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex md:hidden">

          {/* Overlay Backdrop */}
          <div
            className="fixed inset-0 bg-gray-900/50 dark:bg-black/60 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          ></div>

          {/* Drawer Content */}
          <div className="relative ml-auto flex h-full w-[280px] max-w-sm flex-col bg-white dark:bg-[#030712] p-6 shadow-xl transition-all duration-300">
            <div className="flex items-center justify-between mb-8">
              <a href="#hero" onClick={handleLinkClick}>
                <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
                  &lt;PG /&gt;
                </h3>
              </a>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg p-1 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer"
              >
                <X size={24} />
              </button>
            </div>

            <ul className="flex flex-col gap-4 list-none mb-6">
              <li>
                <a
                  className="block text-lg font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 py-1 transition-colors"
                  href="#about"
                  onClick={handleLinkClick}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className="block text-lg font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 py-1 transition-colors"
                  href="#experiences"
                  onClick={handleLinkClick}
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  className="block text-lg font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 py-1 transition-colors"
                  href="#work"
                  onClick={handleLinkClick}
                >
                  Work
                </a>
              </li>
              <li>
                <a
                  className="block text-lg font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 py-1 transition-colors"
                  href="#contact"
                  onClick={handleLinkClick}
                >
                  Contact
                </a>
              </li>
            </ul>

            <div className="h-px bg-gray-200 dark:bg-gray-800 my-4"></div>

            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="text-base text-gray-500">Switch Theme</span>
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="flex justify-center items-center hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg p-1.5 transition-colors cursor-pointer text-gray-600 dark:text-gray-400"
                >
                  {darkMode ? <Sun size={24} /> : <Moon size={24} />}
                </button>
              </div>

              <button className="w-full inline-flex items-center justify-center rounded-xl bg-gray-900 dark:bg-gray-50 px-4 py-2 font-medium text-gray-50 dark:text-gray-950 hover:bg-gray-700 active:bg-gray-800 dark:hover:bg-gray-200 transition-colors cursor-pointer">
                Download CV
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Outlet */}
      <main className="flex flex-col w-full">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="w-full py-8 bg-gray-50 dark:bg-[#030712] border-t border-gray-100 dark:border-gray-900 transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-4 md:px-8 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>© {new Date().getFullYear()} | Designed and coded with ❤️ by Prem Gehlot</p>
        </div>
      </footer>

    </div>
  )
}