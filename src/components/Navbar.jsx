import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";


// Replace with your actual social URLs and icon paths
const socials = [
  {
    name: "LinkedIn",
    src: "/linkedin.svg",
    href: "https://www.linkedin.com/in/ruchi-kumari-1907-a2410-2004-khushi/",
  },
  {
    name: "GitHub",
    src: "/github.svg",
    href: "https://github.com/khushi-1907",
  },
];

const navLinks = ["About", "Skills", "Projects", "Connect"];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("about");

  // 🔍 ScrollSpy for active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((l) => l.toLowerCase());
      let current = "about";

      for (let id of sections) {
        const section = document.getElementById(id);
        if (section && window.scrollY >= section.offsetTop - 120) {
          current = id;
        }
      }

      setActiveLink(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-xl bg-[#030014aa] shadow-md border-b border-purple-900/40 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-[65px] flex items-center justify-between">
        {/* 🔮 Ruchi Logo */}
        <div className="text-lg md:text-xl font-semibold text-white tracking-wide">
          Ruchi
        </div>

        {/* 🧭 Desktop Navigation */}
        <nav className="hidden md:flex items-center text-sm font-medium bg-[#1a1a2d5e] border border-[#7042f861] px-10 py-2 rounded-full shadow-md gap-10 lg:gap-16">
          {navLinks.map((link) => {
            const id = link.toLowerCase();
            const isActive = activeLink === id;

            return (
              <a
                key={link}
                href={`#${id}`}
                className={`px-2 lg:px-6 py-1 transition-colors duration-200 ${
                  isActive
                    ? "text-purple-400"
                    : "text-gray-300 hover:text-purple-300"
                }`}
              >
                {link}
              </a>
            );
          })}
        </nav>

        {/* 🌐 Socials */}
        <div className="hidden md:flex gap-4 items-center">
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform duration-300"
            >
              <img src={s.src} alt={s.name} className="w-5 h-5" />
            </a>
          ))}
        </div>

        {/* 🍔 Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-300 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>
      </div>

      {/* 📱 Mobile Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <div className="md:hidden bg-[#0c0c1c] border-t border-purple-800 px-6 py-5 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className={`block text-base font-medium ${
                  activeLink === link.toLowerCase()
                    ? "text-purple-400"
                    : "text-gray-300"
                } hover:text-purple-300`}
              >
                {link}
              </a>
            ))}
            <div className="flex gap-4 pt-4">
              {socials.map((s) => (
                <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer">
                  <img src={s.src} alt={s.name} className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
