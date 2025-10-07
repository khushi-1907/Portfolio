import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";
import StarsCanvas from "./StarsCanvas";

// Filters
const techFilters = [
  "All", "MERN", "Django", "React", "MongoDB", "PostgreSQL",
  "JWT", "UI/UX", "PHP", "AI", "Three.js", "JavaScript", "HTML", "CSS", "Next.js", "TypeScript", "Crypto"
];

// Projects Data
const allProjects = [
  {
    name: "TaskRadar",
    desc: "Smart MERN planner with AI tips, drag-and-drop weekly view, Pomodoro, notes, and productivity analytics.",
    full:
      "Full-stack productivity app built with MERN, Vite + Tailwind. Features JWT auth, protected APIs, DnD weekly planner, Pomodoro timer, sticky notes, charts, focus music, and AI insights/summaries via OpenRouter + Hugging Face. Designed for students/pros to plan, track, and stay in flow.",
    link: "https://task-radar.vercel.app/",
    github: "https://github.com/khushi-1907/taskradar",
    tags: ["MERN", "MongoDB", "React", "JWT", "AI"],
    image: "/projects/taskradar.png",
  },
  {
    name: "TaskVault",
    desc: "Full-stack task manager with filters, theming, and JWT auth.",
    full:
      "TaskVault is a full-stack task manager built with React, TailwindCSS, and Django REST Framework. It includes JWT authentication and real-time task management features.",
    link: "https://task-vault-rosy.vercel.app",
    github: "https://github.com/khushi-1907/Task_Vault",
    tags: ["React", "Django", "PostgreSQL", "JWT"],
    image: "/projects/taskvault.jpg",
  },
  {
    name: "Password Vault",
    desc: "Next.js-based password generator and secure vault with encryption.",
    full:
      "Password Vault is a secure web app with encryption, built using Next.js, TypeScript, and MongoDB. It allows users to generate and store passwords safely.",
    link: "https://password-vault-silk.vercel.app/login",
    github: "https://github.com/khushi-1907/Password-Vault",
    tags: ["Next.js", "TypeScript", "MongoDB", "Crypto", "JWT"],
    image: "/projects/passwordvault.jpg",
  },
  {
    name: "RosyWrite Notepad",
    desc: "Secure, distraction-free notes app with JWT auth and dashboard.",
    full:
      "A minimalistic MERN notepad app with JWT authentication and autosave features.",
    link: "https://rosywrite-notepad.onrender.com",
    github: "https://github.com/khushi-1907/RosyWrite-Notepad",
    tags: ["Node.js", "JWT", "MongoDB", "UI/UX"],
    image: "/projects/rosywrite.jpg",
  },
  {
    name: "Solar System 3D Simulation",
    desc: "Responsive 3D solar system built with Three.js and JavaScript.",
    full:
      "A realistic 3D model of the solar system using Three.js with interactive orbits and controls.",
    link: "https://khushi-1907.github.io/SolarSystem/",
    github: "https://github.com/khushi-1907/SolarSystem",
    tags: ["Three.js", "JavaScript", "UI/UX"],
    image: "/projects/solar_system.jpg",
  },
];

// =============== Project Card ===============
const ProjectCard = ({ proj, onClick, i }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, delay: i * 0.05 },
    },
  };

  return (
    <motion.div
      key={proj.name}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      whileHover={{ scale: 1.03 }}
      onClick={(e) => {
        if (e.target.tagName !== "A" && e.target.closest("a") === null) {
          onClick(proj);
        }
      }}
      className="group relative border border-white/10 bg-white/5 rounded-xl overflow-hidden shadow-xl backdrop-blur-md transition hover:shadow-purple-500/20 cursor-pointer h-full"
    >
      <img
        loading="lazy"
        width="400"
        height="176"
        src={proj.image}
        alt={proj.name}
        className="w-full h-44 object-cover group-hover:scale-105 transition duration-300"
      />
      <div className="p-5 flex flex-col justify-between h-full min-h-[220px] sm:min-h-[250px]">
        <div>
          <h3 className="text-xl font-semibold mb-1">{proj.name}</h3>
          <p className="text-sm text-gray-300 mb-3">{proj.desc}</p>
          <div className="flex flex-wrap gap-2 mb-3">
            {proj.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs bg-purple-500/10 text-purple-300 px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Buttons (Always visible, wrapped for small screens) */}
        <div className="flex flex-wrap justify-start gap-3 items-center mt-4 text-sm font-medium w-full">
          {proj.link && (
            <a
              href={proj.link}
              onClick={(e) => e.stopPropagation()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 sm:gap-2 text-purple-300 hover:text-white transition text-[13px] sm:text-sm flex-shrink-0"
            >
              <FaExternalLinkAlt size={14} /> Live Demo
            </a>
          )}
          {proj.github && (
            <a
              href={proj.github}
              onClick={(e) => e.stopPropagation()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 sm:gap-2 text-gray-400 hover:text-white transition text-[13px] sm:text-sm flex-shrink-0"
            >
              <FaGithub size={14} /> View Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

// =============== Projects Section ===============
export default function Projects() {
  const [selected, setSelected] = useState(null);
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && setSelected(null);
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const filteredProjects =
    activeFilter === "All"
      ? allProjects
      : allProjects.filter((p) => p.tags.includes(activeFilter));

  return (
    <section
      id="projects"
      className="relative text-white px-4 sm:px-8 py-20 sm:py-24 z-10 bg-[#030014] min-h-screen overflow-x-hidden"
    >
      {/* Background (Fixed: no click blocking) */}
      <div className="absolute inset-0 -z-10">
        <div className="pointer-events-none absolute inset-0">
          <StarsCanvas />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-[#030014]/90 backdrop-blur-sm" />
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <p className="text-sm text-gray-400 uppercase tracking-widest mb-2">
          What I've Built
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-500">
          Projects
        </h2>
      </motion.div>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-3 mb-14">
        {techFilters.map((filter) => (
          <motion.button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-1.5 text-sm rounded-full border transition duration-300 ${
              activeFilter === filter
                ? "bg-purple-500/30 text-purple-300 border-purple-500"
                : "text-gray-400 border-purple-500/30 hover:bg-purple-500/10"
            }`}
            whileTap={{ scale: 0.95 }}
          >
            {filter}
          </motion.button>
        ))}
      </div>

      {/* Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeFilter}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          {filteredProjects.map((proj, i) => (
            <Tilt
              key={proj.name}
              tiltMaxAngleX={5}
              tiltMaxAngleY={5}
              perspective={1000}
              scale={1}
              className="h-full"
            >
              <ProjectCard proj={proj} onClick={setSelected} i={i} />
            </Tilt>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[999]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)} // close on outside click
          >
            <motion.div
              className="relative bg-[#0e1320] max-w-lg w-[90%] rounded-xl p-6 border border-purple-500/20"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()} // prevent close on inside click
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
              <p className="text-gray-300 text-sm mb-6">{selected.full}</p>

              <div className="flex flex-wrap gap-4">
                {selected.link && (
                  <a
                    href={selected.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-purple-300 hover:text-white text-sm font-semibold"
                  >
                    <FaExternalLinkAlt size={14} /> Live Demo
                  </a>
                )}
                {selected.github && (
                  <a
                    href={selected.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-gray-400 hover:text-white text-sm"
                  >
                    <FaGithub size={14} /> View Code
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
