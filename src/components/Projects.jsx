import React, { useState } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import StarsCanvas from "./StarsCanvas";

// Filters
const techFilters = [
  "All", "MERN", "Django", "React", "MongoDB", "PostgreSQL",
  "JWT", "UI/UX", "PHP", "AI", "Three.js", "JavaScript", "HTML", "CSS", "Next.js", "TypeScript", "Crypto"
];

const allProjects = [
  {
    name: "TaskRadar",
    desc: "Smart MERN planner with AI tips, drag-and-drop weekly view, Pomodoro, notes, and productivity analytics.",
    tags: ["MERN", "MongoDB", "React", "JWT", "AI"],
    link: "https://task-radar.vercel.app/",
    github: "https://github.com/khushi-1907/taskradar",
    image: "/projects/taskradar.png",
  },
  {
    name: "TaskVault",
    desc: "Full-stack task manager with filters, theming, and JWT auth built with React and Django.",
    tags: ["React", "Django", "PostgreSQL", "JWT"],
    link: "https://task-vault-rosy.vercel.app",
    github: "https://github.com/khushi-1907/Task_Vault",
    image: "/projects/taskvault.jpg"
  },
  {
    name: "Password Vault",
    desc: "Next.js-based password generator and secure vault with encryption and MongoDB.",
    tags: ["Next.js", "TypeScript", "MongoDB", "Crypto", "JWT"],
    link: "https://password-vault-silk.vercel.app/login",
    github: "https://github.com/khushi-1907/Password-Vault",
    image: "/projects/passwordvault.jpg"
  },
  {
    name: "RosyWrite Notepad",
    desc: "Secure, distraction-free notes app with JWT auth and user dashboard using MERN stack.",
    tags: ["Node.js", "JWT", "MongoDB", "UI/UX"],
    link: "https://rosywrite-notepad.onrender.com",
    github: "https://github.com/khushi-1907/RosyWrite-Notepad",
    image: "/projects/rosywrite.jpg"
  },
  {
    name: "Solar System 3D Simulation",
    desc: "Responsive 3D solar system built with Three.js and vanilla JavaScript with interactive controls.",
    tags: ["Three.js", "JavaScript", "UI/UX"],
    link: "https://khushi-1907.github.io/SolarSystem/",
    github: "https://github.com/khushi-1907/SolarSystem",
    image: "/projects/solar_system.jpg"
  },
  {
    name: "Complaint Management System",
    desc: "Web-based portal for handling student complaints by category with role-based dashboards.",
    tags: ["PHP", "MySQL", "Bootstrap"],
    link: "",
    github: "https://github.com/khushi-1907/Complaint-Management-System",
    image: "/projects/cms.jpg"
  },
  {
    name: "Result Management System",
    desc: "PHP-MySQL based system to manage students, branches, subjects, and results with admin dashboard.",
    tags: ["PHP", "MySQL", "Bootstrap"],
    link: "",
    github: "https://github.com/khushi-1907/Result-management-system",
    image: "/projects/rms.jpg"
  },
  {
    name: "Netflix Frontend Clone",
    desc: "A sleek frontend clone of Netflix with responsive design and modern UI using HTML, CSS, JavaScript.",
    tags: ["HTML", "CSS", "JavaScript", "UI/UX"],
    link: "https://khushi-1907.github.io/Netflix-UI-Clone-Demo/",
    github: "https://github.com/khushi-1907/Netflix-UI-Clone-Demo/",
    image: "/projects/netflix_clone.jpg"
  },
  {
    name: "Extension Manager UI",
    desc: "Responsive UI for managing browser extensions, built as a Frontend Mentor challenge.",
    tags: ["HTML", "CSS", "JavaScript", "UI/UX"],
    link: "https://khushi-1907.github.io/ExtensionFrontend/",
    github: "https://github.com/khushi-1907/ExtensionFrontend",
    image: "/projects/extension_manager_ui.jpg"
  },
  {
    name: "Developer Portfolio",
    desc: "Animated, responsive developer portfolio with starfield background and glassmorphic sections.",
    tags: ["React", "Tailwind", "UI/UX"],
    link: "#",
    github: "https://github.com/khushi-1907/Portfolio",
    image: "/projects/portfolio.jpg"
  },
  {
    name: "Drunk-O-Meter Bar",
    desc: "Fun web app to track your virtual drinks and get animated drunk feedback with neon-bar aesthetic.",
    tags: ["HTML", "CSS", "JavaScript", "UI/UX"],
    link: "https://drunk-o-meter-58lr.vercel.app",
    github: "https://github.com/khushi-1907/Drunk-O-Meter/",
    image: "/projects/drunkometer.jpg"
  },
  {
    name: "Life Balance Calculator",
    desc: "Interactive app to visualize balance between love, friends, money, and cars with dynamic profiles.",
    tags: ["HTML", "CSS", "JavaScript", "UI/UX"],
    link: "https://life-balance-simulator.vercel.app/",
    github: "https://github.com/khushi-1907/Life-Balance-Simulator",
    image: "/projects/life_balance.jpg"
  },
  {
    name: "Love Potion No. 7",
    desc: "A magical BTS + Hogwarts experience with love quizzes, spells, and sparkles.",
    tags: ["HTML", "CSS", "JavaScript", "UI/UX"],
    link: "https://bts-harry-potter.vercel.app/",
    github: "https://github.com/khushi-1907/BTS_HarryPotter",
    image: "/projects/love_potion.jpg"
  },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

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
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <StarsCanvas />
        <div className="absolute inset-0 bg-[#030014]/90 backdrop-blur-sm" />
      </div>

      {/* Heading */}
      <div className="text-center mb-14">
        <p className="text-sm text-gray-400 uppercase tracking-widest mb-2">
          What I've Built
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-500">
          Projects
        </h2>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-3 mb-14">
        {techFilters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-1.5 text-sm rounded-full border transition duration-300
              ${
                activeFilter === filter
                  ? "bg-purple-500/30 text-purple-300 border-purple-500"
                  : "text-gray-400 border-purple-500/30 hover:bg-purple-500/10"
              }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {filteredProjects.map((project, i) => (
          <div
            key={i}
            onClick={() => {
              if (project.link && project.link !== "#") {
                window.open(project.link, "_blank", "noopener,noreferrer");
              }
            }}
            className="group relative border border-white/10 bg-white/5 rounded-xl overflow-hidden shadow-xl backdrop-blur-md transition hover:shadow-purple-500/20 cursor-pointer"
          >
            {/* Project Image */}
            <div className="w-full h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
              />
            </div>

            {/* Project Content */}
            <div className="p-5">
              <h3 className="text-xl font-semibold text-white mb-2">
                {project.name}
              </h3>
              <p className="text-sm text-gray-300 mb-4">{project.desc}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-purple-500/10 text-purple-300 px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div
                className="flex justify-between items-center pt-3 border-t border-white/10"
                onClick={(e) => e.stopPropagation()} // Prevent card click
              >
                {project.link && project.link !== "#" && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-purple-300 hover:text-white text-sm transition"
                  >
                    <FaExternalLinkAlt size={14} /> Live Demo
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-gray-400 hover:text-white text-sm transition"
                  >
                    <FaGithub size={16} /> Code
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
