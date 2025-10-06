import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import { FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import StarsCanvas from "./StarsCanvas";

// Filters
const certFilters = ["All", "Virtual Experience", "Training", "Soft Skills", "Certification","Hackathon"];

const allCerts = [
  {
    name: "Project Training in MERN Stack",
    org: "Hartron Skill Center",
    year: "June 2024",
    desc: "Hands-on training in MERN stack with full-stack project build.",
    tags: ["Training"],
    link: "https://drive.google.com/file/d/1dY_8lJrZDnS5XNwm8bAsHBJhvQJQWRT7/view?usp=drive_link",
  },
  {
    name: "Frontend Developer (React) Certification",
    org: "HackerRank",
    year: "September 2025",
    desc: "Verified certification demonstrating proficiency in React for frontend development.",
    tags: ["Certification"],
    link: "https://www.hackerrank.com/certificates/iframe/57b001fea47d",
  },
   {
    name: "Employability Skill Development Training Programme",
    org: "Mahindra Pride Classroom, Naandi Foundation",
    year: "2023",
    desc: "Soft skills, communication, and professional readiness training.",
    tags: ["Soft Skills"],
    link: "",
  },
  {
    name: "GenAI-Powered Data Analytics Virtual Experience",
    org: "Tata iQ (via Forage)",
    year: "2025",
    desc: "Job simulation with AI-powered data analytics tasks.",
    tags: ["Virtual Experience"],
    link: "https://drive.google.com/file/d/1rWSwumozNdU1lkXeoTy_kNYnQ7QlGXDd/view?usp=drive_link",
  },
  {
    name: "Python Training",
    org: "Infowiz Software Solutions",
    year: "2024",
    desc: "Covered Python basics and core programming concepts.",
    tags: ["Training"],
    link: "",
  },
  {
  name: "Prompt Engineering Course",
  org: "Infosys | Springboard",
  year: "September 2025",
  desc: "Completed a comprehensive course on Prompt Engineering, gaining skills in crafting effective prompts and optimizing interactions with AI models.",
  tags: ["Certification"],
  link: "https://drive.google.com/file/d/1mznW_0PRGnd0VGbblOKBEfM9YYphkxnM/view?usp=sharing", // optional: replace with your unique certificate verification link
},
{
  name: "World Computer Hacker League (WCHL) 2025 - Regional Round Qualifier",
  org: "BlockseBlock in collaboration with ICP India",
  year: "October 2025",
  desc: "Qualified for the Regional Round of the World Computer Hacker League (WCHL) 2025, showcasing innovation, teamwork, and problem-solving skills in competitive hackathon challenges.",
  tags: ["Hackathon"],
  link: "https://drive.google.com/file/d/1IeP-9ZcQ1c-UrYQ6egGE632vGyqS2zfu/view?usp=sharing", // add certificate link or post link if available
},
{
  name: "Introduction to Career Skills in Software Development",
  org: "LinkedIn Learning",
  year: "August 2025",
  desc: "Completed a course covering software development fundamentals, career management, and essential technical career skills for professional growth.",
  tags: ["Soft Skills", "Training"],
  link: "https://drive.google.com/file/d/18C6LgJxUepZ04v7GUr_uigCMbsQu8gVc/view?usp=sharing", // add LinkedIn certificate link if available
},


];

export default function Certifications() {
  const [activeFilter, setActiveFilter] = useState("All");

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
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              whileHover={{ scale: 1.03 }}
              className="group relative border border-white/10 bg-white/5 rounded-xl overflow-hidden shadow-xl backdrop-blur-md transition hover:shadow-purple-500/20 p-5"
            >
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
              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-purple-300 hover:text-white text-sm"
                >
                  <FaExternalLinkAlt size={14} /> View Certificate
                </a>
              )}
            </motion.div>
          </Tilt>
        ))}
      </motion.div>
    </section>
  );
}
