import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";
import StarsCanvas from "./StarsCanvas";

// Filters (Confirmed to be correct)
const techFilters = [
  "All", "MERN", "Django", "React", "MongoDB", "PostgreSQL",
  "JWT", "UI/UX", "PHP", "AI", "Three.js", "JavaScript", "HTML", "CSS","Next.js","TypeScript","Crypto"
];

// Your Project Data
const allProjects = [
// TaskRadar project card
{
  name: "TaskRadar",
  desc: "Smart MERN planner with AI tips, drag-and-drop weekly view, Pomodoro, notes, and productivity analytics.",
  full:
    "Full-stack productivity app built with MERN, Vite + Tailwind. Features JWT auth, protected APIs, DnD weekly planner, Pomodoro timer, sticky notes, charts, focus music, and AI insights/summaries via OpenRouter + Hugging Face. Designed for students/pros to plan, track, and stay in flow. Cron-ready for email reminders; roadmap includes streak goals, quotes, and study groups.",
  link: "https://task-radar.vercel.app/",         // Live Demo
  github: "https://github.com/khushi-1907/taskradar",       // GitHub Repo
  tags: ["MERN","MongoDB","React","JWT","AI"],
  image: "/projects/taskradar.png",
},

  {
    name: "TaskVault",
    desc: "Full-stack task manager with filters, theming, and JWT auth.",
    full: "TaskVault is a modern and responsive full-stack task management app built with React, TailwindCSS, and Django REST Framework. It allows users to seamlessly manage their daily tasks with features like real-time filtering (All, Active, Completed), custom deadlines, and task deletion. The interface includes a light/dark mode toggle for personalized experience. Backend authentication is handled using JWT tokens, ensuring secure login sessions. PostgreSQL is used as the database for robust and scalable data storage. Fully deployed using Render (backend) and Vercel (frontend), it provides a smooth user experience across devices.",
    link: "https://task-vault-rosy.vercel.app",
    github: "https://github.com/khushi-1907/Task_Vault",
    tags: ["React", "Django", "PostgreSQL", "JWT"],
    image: "/projects/taskvault.jpg"
  },
  {
  name: "Password Vault",
  desc: "Next.js-based password generator and secure vault with encryption.",
  full: "Password Vault is a modern and secure web application built with Next.js, TypeScript, and MongoDB. It allows users to generate strong, random passwords and safely store them in an encrypted vault. Each vault entry is securely encrypted and decrypted using custom crypto logic, ensuring complete data privacy. The sleek dark-themed interface, built with TailwindCSS, offers a smooth and responsive user experience. Authentication is managed through JWT-based sessions, providing secure access to personal password data. The app demonstrates a perfect balance between usability, performance, and robust security — deployed on Vercel for effortless accessibility.",
  link: "https://password-vault-silk.vercel.app/login",
  github: "https://github.com/khushi-1907/Password-Vault",
  tags: ["Next.js", "TypeScript", "MongoDB", "Crypto", "JWT"],
  image: "/projects/passwordvault.jpg"
}
,
  {
    name: "RosyWrite Notepad",
    desc: "Secure, distraction-free notes app with JWT auth and user dashboard.",
    full: "RosyWrite Notepad is a secure, minimalistic MERN stack note-taking application designed for personal productivity. It features user authentication with JWT, a responsive and clean UI, autosave functionality, and full CRUD operations for personal notes. Each user has a private dashboard where their notes are encrypted and accessible only after login. It supports persistent storage, secure logout, and mobile responsiveness for on-the-go writing. Deployed on Render, RosyWrite focuses on data privacy and user-centric simplicity, with plans for smart AI tagging and daily reminder integrations.",
    link: "https://rosywrite-notepad.onrender.com",
    github: "https://github.com/khushi-1907/RosyWrite-Notepad",
    tags: ["Node.js", "JWT", "MongoDB", "UI/UX"],
    image: "/projects/rosywrite.jpg"
  },
  {
    name: "Solar System 3D Simulation",
    desc: "Responsive 3D solar system built with Three.js and vanilla JavaScript.",
    full: "Solar System 3D Simulation is a visually stunning, fully responsive web application developed using Three.js and vanilla JavaScript. It features a realistic rendering of the solar system with all eight planets orbiting the sun, individual rotation speeds, and interactive controls like speed sliders, camera zoom on click, and planet hover tooltips. The simulation runs smoothly with requestAnimationFrame and provides toggles for light/dark mode and pause/resume. A starfield background enhances the immersive experience, making it an ideal showcase of WebGL rendering and animation in a real-world space model. No external CSS frameworks or libraries are used, demonstrating pure JavaScript and 3D logic.",
    link: "https://khushi-1907.github.io/SolarSystem/",
    github: "https://github.com/khushi-1907/SolarSystem",
    tags: ["Three.js", "JavaScript", "UI/UX"],
    image: "/projects/solar_system.jpg"
  },
{
  name: "Complaint Management System",
  desc: "Web-based portal for handling student complaints by category with incharge and principal dashboards.",
  full: "Complaint Management System is a PHP-MySQL powered application that allows students to file complaints across categories like hostel, teaching, discipline, and misconduct. Each complaint is routed to the respective incharge, who can view, update, and resolve them. A principal user has full administrative control. The system supports status updates, secure login per role, and clean Bootstrap UI. Ideal for colleges and institutions to streamline grievance redressal workflows with clear role-based access. It is easily configurable for custom roles and deployed locally or on college intranets.",
  link: "", // Add deployed link if available
  github: "https://github.com/khushi-1907/Complaint-Management-System",
  tags: ["PHP", "MySQL", "Bootstrap"],
  image: "/projects/cms.jpg"
},
{
  name: "Result Management System",
  desc: "PHP-MySQL based system to manage students, branches, subjects, and results with admin dashboard.",
  full: "Result Management System is a full-stack web application built using PHP and MySQL that allows administrators to manage students, branches, subjects, semesters, and academic results in one place. It includes features for adding, updating, deleting, and viewing students and their scores. Admins can assign subjects to branches, input marks, and view comprehensive results. The dashboard uses Bootstrap for responsive UI and Boxicons for icons. It supports Excel import, session management, and CRUD functionality across all core modules. Designed for academic institutions to maintain centralized records digitally.",
  link: "", // Add deployed link if hosted anywhere
  github: "https://github.com/khushi-1907/Result-management-system",
  tags: ["PHP", "MySQL", "Bootstrap"],
  image: "/projects/rms.jpg"
},
  {
  name: "Netflix Frontend Clone",
  desc: "A sleek frontend clone of Netflix with responsive design and modern UI.",
  full: "Netflix Frontend Clone is a pixel-perfect recreation of Netflix's homepage UI using HTML, CSS, and JavaScript. It features a full-screen hero section with background image and overlay, Netflix-style navbar with logo and sign-in button, and mobile-responsive layout. The interface includes modals for login simulation, input form animations, and a layout that adapts to various screen sizes. This project focuses purely on the UI/UX, with no backend or video streaming functionalities, making it ideal for frontend practice and learning responsive design principles. It mimics the core visual identity of Netflix while using clean semantic HTML and modular CSS.",
  link: "https://khushi-1907.github.io/Netflix-UI-Clone-Demo/", // Replace with your actual deployed link
  github: "https://github.com/khushi-1907/Netflix-UI-Clone-Demo/", // Replace with your GitHub repo
  tags: ["HTML", "CSS", "JavaScript", "UI/UX"],
  image: "/projects/netflix_clone.jpg" // Replace with your image path
},
{
  name: "Extension Manager UI",
  desc: "Responsive UI for managing browser extensions, built as a Frontend Mentor challenge.",
  full: "The Extension Manager UI is a fully responsive frontend project built using HTML, CSS, and JavaScript as part of a Frontend Mentor challenge. The interface allows users to toggle browser extensions between active and inactive states, remove extensions, and filter by status (active/inactive). The app reads dynamic extension data from a local data.json file and supports theme customization. It features full keyboard accessibility, hover/focus states, and an adaptive layout optimized for desktop, tablet, and mobile devices. This project demonstrates proficiency in DOM manipulation, responsive design principles, component-based structure, and clean UX interactions — perfect for frontend development practice.",
  link: "https://khushi-1907.github.io/ExtensionFrontend/", // Replace with your deployed link
  github: "https://github.com/khushi-1907/ExtensionFrontend", // Replace with your GitHub repo
  tags: ["HTML", "CSS", "JavaScript", "UI/UX"],
  image: "/projects/extension_manager_ui.jpg" // Replace with your actual image path
},
{
  name: "My Developer Portfolio",
  desc: "An animated, responsive developer portfolio with starfield background and glassmorphic sections.",
  full: "This portfolio is a fully responsive, modern web app built with React, Tailwind CSS, Framer Motion, and React Parallax Tilt. It features scroll-based animations, magnetic hover effects, animated skill tiles in a responsive triangle layout, and a cosmic theme with a starry canvas background. The site showcases About, Skills, Projects, and a 'Connect With Me' section — all styled with a purple-cyan gradient and glassmorphic UI. It reflects a strong design aesthetic combined with performance optimization and modular, component-based architecture. Ideal for hiring managers and collaborators to explore technical skills and past work.",
  link: "#", // Your live portfolio link
  github: "https://github.com/khushi-1907/Portfolio", // Update if different
  tags: ["React", "Tailwind", "UI/UX"],
  image: "/projects/portfolio.jpg" // Replace with actual path to your preview image
},
  {
    name: "Drunk-O-Meter Bar",
    desc: "Fun web app to track your virtual drinks and get animated drunk feedback.",
    full: "Built using HTML, CSS, and JavaScript. Features animated drink tap, floating emojis, and humorous tipsy meter. Purely frontend, with a neon-bar aesthetic and fun UI transitions.",
    link: "https://github.com/khushi-1907/Drunk-O-Meter/",
    github: "https://drunk-o-meter-58lr.vercel.app",
    tags: ["HTML", "CSS", "JavaScript", "UI/UX"],
    image: "/projects/drunkometer.jpg"
  },
  {
    name: "Life Balance Calculator",
    desc: "Interactive personality app to visualize balance between love, friends, money, and cars.",
    full: "Built with HTML, CSS, and JS. Features animated emojis, sliders, floating hearts, Web Share API, 20+ dynamic life profiles, and real-time feedback with character analysis.",
    link: "https://life-balance-simulator.vercel.app/", // Add live demo
    github: "https://github.com/khushi-1907/Life-Balance-Simulator", // Add repo
    tags: ["HTML", "CSS", "JavaScript", "UI/UX"],
    image: "/projects/life_balance.jpg"
  },
  {
    name: "Love Potion No. 7",
    desc: "A magical BTS + Hogwarts experience with love quizzes, spells, and sparkles.",
    full: "Single-page web app combining BTS fandom and Harry Potter universe. Includes a soulmate quiz, love calculator, and letter generator with glittery effects, custom cursor, and romantic theming.",
    link: "https://bts-harry-potter.vercel.app/", // Add live demo
    github: "https://github.com/khushi-1907/BTS_HarryPotter", // Add repo
    tags: ["HTML", "CSS", "JavaScript", "UI/UX"],
    image: "/projects/love_potion.jpg"
  },
];

// Project Card component
const ProjectCard = ({ proj, onClick, i }) => {
  // Simple fade-in and subtle lift animation, not dependent on scroll
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, delay: i * 0.05 } },
  };

  return (
    <motion.div
      key={proj.name}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      exit="hidden" 
      role="button"
      aria-label={`View details for ${proj.name}`}
      whileHover={{ scale: 1.03 }}
      className="group relative border border-white/10 bg-white/5 rounded-xl overflow-hidden shadow-xl backdrop-blur-md transition hover:shadow-purple-500/20 cursor-pointer h-full"
      // Primary click handler: Only triggers modal if an anchor tag wasn't the target
      onClick={(e) => {
        // Prevent modal from opening if the user clicked the link/icon itself
        if (e.target.tagName !== 'A' && e.target.closest('a') === null) {
            onClick(proj);
        }
      }}
    >
      <img
        loading="lazy"
        width="400"
        height="176"
        src={proj.image}
        alt={proj.name}
        className="w-full h-44 object-cover group-hover:scale-105 transition duration-300"
      />
      <div className="p-5 flex flex-col justify-between h-full">
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
        
        {/* === LIVE/GITHUB LINKS (FIXED to work on the card) === */}
        <div className="flex justify-start gap-4 items-center mt-4 text-sm font-medium">
          {/* Live Link */}
          {proj.link && (
            <a
              href={proj.link}
              // CRITICAL FIX 1: Stop event from bubbling up and triggering the modal
              onClick={(e) => e.stopPropagation()} 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-purple-300 hover:text-white transition duration-200"
            >
              <FaExternalLinkAlt size={14} /> Live Demo
            </a>
          )}
          {/* GitHub Link */}
          {proj.github && (
            <a
              href={proj.github}
              // CRITICAL FIX 2: Stop event from bubbling up and triggering the modal
              onClick={(e) => e.stopPropagation()} 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition duration-200" 
            >
              <FaGithub size={14} /> View Code
            </a>
          )}
        </div>
        {/* =========================================== */}

      </div>
    </motion.div>
  );
};


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
      className="relative text-white px-4 sm:px-8 py-24 z-10 bg-[#030014] min-h-screen"
    >
      {/* Background - CRITICAL FIX 1: pointer-events-none to prevent background from blocking clicks */}
      <div className="absolute inset-0 -z-10 pointer-events-none"> 
        <StarsCanvas />
        <div className="absolute inset-0 bg-[#030014]/90 backdrop-blur-sm" />
      </div>

      {/* Main Content Wrapper - Set above the background layer */}
      <div className="relative z-20"> 
        
        {/* Heading (Animation retained) */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
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

        {/* Filters - Confirmed correct and outside of click-blocking containers */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
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
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              aria-pressed={activeFilter === filter}
              aria-label={`Filter projects by ${filter}`}
            >
              {filter}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid Container */}
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
      </div> 
      {/* End of Main Content Wrapper */}

      {/* Modal (Links are here for redundancy/full info, but are also on the card) */}
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
              
              {/* Modal Links (Mirroring card links) */}
              <div className="flex gap-4">
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
