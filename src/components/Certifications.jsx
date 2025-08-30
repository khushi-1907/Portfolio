import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { FaExternalLinkAlt, FaTimes } from "react-icons/fa";
import StarsCanvas from "./StarsCanvas";

// Filters
const certFilters = ["All", "Virtual Experience", "Training", "Soft Skills"];

const allCerts = [
  {
    name: "Project Training in MERN Stack",
    org: "Hartron Skill Center",
    year: "June 2024",
    desc: "Hands-on training in MERN stack with full-stack project build.",
    full: `Created an Academic Planner application (2024) with features like authentication, reminders, and dashboards.
Gained end-to-end experience in MongoDB, Express.js, React, Node.js, and deployment workflow.`,
    tags: ["Training"],
    link: "https://drive.google.com/file/d/1dY_8lJrZDnS5XNwm8bAsHBJhvQJQWRT7/view?usp=drive_link", // optional external link
  },
  {
    name: "Python Training",
    org: "Infowiz Software Solutions",
    year: "2024",
    desc: "Covered Python basics and core programming concepts.",
    full: `Learned Python fundamentals: data types, control flow, and OOP.
Explored libraries for data handling and small projects for automation.`,
    tags: ["Training"],
    link: "", // optional
  },
  {
    name: "GenAI-Powered Data Analytics Virtual Experience",
    org: "Tata iQ (via Forage)",
    year: "2025",
    desc: "Job simulation with AI-powered data analytics tasks.",
    full: `Certificate of Completion: August 29th, 2025.
Practical tasks completed:
• Exploratory data analysis and risk profiling
• Predicting delinquency with AI
• Business report and data storytelling
• Implementing an AI-driven collections strategy

Verification Code: JwN4KPwBpjPpvHhdn | User Code: t2ZFTLZ3nR9WTNXMA
Issued by Forage and signed by Tom Brunskill (CEO, Co-Founder).`,
    tags: ["Virtual Experience"],
    link: "https://drive.google.com/file/d/1rWSwumozNdU1lkXeoTy_kNYnQ7QlGXDd/view?usp=drive_link", // add cert link if you have
  },
  {
    name: "Employability Skill Development Training Programme",
    org: "Mahindra Pride Classroom, Naandi Foundation",
    year: "2023",
    desc: "Soft skills, communication, and professional readiness training.",
    full: `Completed a structured soft skills and employability program.
Focused on:
• Communication and teamwork
• Presentation skills
• Workplace etiquette
Improved confidence and professional readiness.`,
    tags: ["Soft Skills"],
    link: "",
  },
];

export default function Certifications() {
  const [selected, setSelected] = useState(null);
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const filteredCerts =
    activeFilter === "All"
      ? allCerts
      : allCerts.filter((c) => c.tags.includes(activeFilter));

  return (
    <section
      id="certifications"
      className="relative text-white px-4 sm:px-8 py-24 z-10 overflow-hidden bg-[#030014]"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <StarsCanvas />
        <div className="absolute inset-0 bg-[#030014]/90 backdrop-blur-sm" />
      </div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <p className="text-sm text-gray-400 uppercase tracking-widest mb-2">
          My Milestones
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-500">
          Certifications & Achievements
        </h2>
      </motion.div>

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-wrap justify-center gap-3 mb-14"
      >
        {certFilters.map((filter) => (
          <motion.button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-1.5 text-sm rounded-full border transition duration-300
              ${
                activeFilter === filter
                  ? "bg-purple-500/30 text-purple-300 border-purple-500"
                  : "text-gray-400 border-purple-500/30 hover:bg-purple-500/10"
              }`}
            animate={
              activeFilter === filter
                ? {
                    scale: [1, 1.1, 1],
                    boxShadow: [
                      "0 0 0px rgba(128, 90, 213, 0)",
                      "0 0 8px rgba(128, 90, 213, 0.6)",
                      "0 0 0px rgba(128, 90, 213, 0)",
                    ],
                  }
                : { scale: 1, boxShadow: "none" }
            }
            transition={{
              duration: 1.2,
              repeat: activeFilter === filter ? Infinity : 0,
              repeatType: "loop",
              ease: "easeInOut",
            }}
            whileTap={{ scale: 0.95 }}
          >
            {filter}
          </motion.button>
        ))}
      </motion.div>

      {/* Certifications Grid */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
      >
        {filteredCerts.map((cert, i) => (
          <Tilt key={i} tiltMaxAngleX={5} tiltMaxAngleY={5}>
            <motion.div
              role="button"
              aria-label={`View details for ${cert.name}`}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              whileHover={{ scale: 1.03 }}
              className="group relative border border-white/10 bg-white/5 rounded-xl overflow-hidden shadow-xl backdrop-blur-md transition hover:shadow-purple-500/20 cursor-pointer"
              onClick={() => setSelected(cert)}
            >
              <div className="p-5">
                <h3 className="text-lg font-semibold text-purple-200">
                  {cert.name}
                </h3>
                <p className="text-sm text-gray-300">{cert.org}</p>
                <span className="text-xs text-gray-400">{cert.year}</span>
                <p className="text-sm text-gray-400 mt-3">{cert.desc}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {cert.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-purple-500/10 text-purple-300 px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </Tilt>
        ))}
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed top-0 left-0 w-full h-full bg-black/70 backdrop-blur-sm flex items-center justify-center z-[999]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative bg-[#0e1320] max-w-lg w-[90%] rounded-xl p-6 border border-purple-500/20"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-3 right-3 text-gray-400 hover:text-white"
              >
                <FaTimes size={20} />
              </button>
              <h3 className="text-xl font-bold text-purple-300 mb-3">
                {selected.name}
              </h3>
              <p className="text-gray-400 text-sm mb-2">
                {selected.org} | {selected.year}
              </p>
              <p className="text-gray-300 text-sm whitespace-pre-line">
                {selected.full}
              </p>
              {selected.link && (
                <a
                  href={selected.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 text-purple-300 hover:text-white text-sm"
                >
                  <FaExternalLinkAlt size={14} /> View Certificate
                </a>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
