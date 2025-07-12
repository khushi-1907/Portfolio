import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";
import StarsCanvas from "./StarsCanvas";

// Filters
const techFilters = [
  "All", "MERN", "Django", "React", "MongoDB", "PostgreSQL", 
  "JWT", "UI/UX", "PHP"
];

// Project data remains unchanged (same `allProjects` array)
import { allProjects } from "./projectsData"; // move your project data here for cleaner code

export default function Projects() {
  const [selected, setSelected] = useState(null);
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setSelected(null);
    };
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
          What I've Built
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-500">
          Projects
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
        {techFilters.map((filter) => (
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
            aria-pressed={activeFilter === filter}
            aria-label={`Filter projects by ${filter}`}
          >
            {filter}
          </motion.button>
        ))}
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
      >
        {filteredProjects.map((proj, i) => (
          <Tilt key={i} tiltMaxAngleX={5} tiltMaxAngleY={5}>
            <motion.div
              role="button"
              aria-label={`View details for ${proj.name}`}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              whileHover={{ scale: 1.03 }}
              className="group relative border border-white/10 bg-white/5 rounded-xl overflow-hidden shadow-xl backdrop-blur-md transition hover:shadow-purple-500/20 cursor-pointer"
              onClick={() => setSelected(proj)}
            >
              <img
                loading="lazy"
                width="400"
                height="176"
                src={proj.image}
                alt={proj.name}
                className="w-full h-44 object-cover group-hover:scale-105 transition duration-300"
              />
              <div className="p-5">
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
                <div className="flex justify-between items-center mt-3">
                  <a
                    href={proj.link}
                    onClick={(e) => e.stopPropagation()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-300 text-sm hover:text-white flex items-center gap-1"
                  >
                    <FaExternalLinkAlt size={14} /> Live
                  </a>
                  <a
                    href={proj.github}
                    onClick={(e) => e.stopPropagation()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 text-sm hover:text-white flex items-center gap-1"
                  >
                    <FaGithub size={16} /> Code
                  </a>
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
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
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
                aria-label="Close project modal"
              >
                <FaTimes size={20} />
              </button>
              <h3
                id="modal-title"
                className="text-xl font-bold text-purple-300 mb-3"
              >
                {selected.name}
              </h3>
              <p className="text-gray-300 text-sm mb-6">{selected.full}</p>
              <div className="flex gap-4">
                <a
                  href={selected.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-purple-500 px-4 py-2 rounded text-sm text-white font-semibold"
                >
                  Live
                </a>
                <a
                  href={selected.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 px-4 py-2 rounded text-sm text-white"
                >
                  Code
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
