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

const allProjects = [
  // {
  //   name: "Smart Academic Planner",
  //   desc: "AI task manager with reminders, weekly insights, and categorized uploads.",
  //   full: "MERN + HuggingFace-powered planner with JWT, cron-based reminders, and file categorization.",
  //   link: "#",
  //   github: "#",
  //   tags: ["MERN", "AI", "MongoDB"],
  //   image: "/projects/planner.png",
  // },
  // {
  //   name: "EventX System",
  //   desc: "College event platform with QR check-in, analytics, and role dashboards.",
  //   full: "Built with Django + React. Faculty-based event creation, analytics, and role access control.",
  //   link: "#",
  //   github: "#",
  //   tags: ["Django", "React", "UI/UX"],
  //   image: "/projects/eventx.png",
  // },
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
    name: "RosyWrite Notepad",
    desc: "Secure, distraction-free notes app with JWT auth and user dashboard.",
    full: "RosyWrite Notepad is a secure, minimalistic MERN stack note-taking application designed for personal productivity. It features user authentication with JWT, a responsive and clean UI, autosave functionality, and full CRUD operations for personal notes. Each user has a private dashboard where their notes are encrypted and accessible only after login. It supports persistent storage, secure logout, and mobile responsiveness for on-the-go writing. Deployed on Render, RosyWrite focuses on data privacy and user-centric simplicity, with plans for smart AI tagging and daily reminder integrations.",
    link: "https://rosywrite-notepad.onrender.com",
    github: "https://github.com/khushi-1907/RosyWrite-Notepad",
    tags: ["MERN", "JWT", "MongoDB", "Auth"],
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
  tags: ["React", "Tailwind", "Framer Motion", "UI/UX"],
  image: "/projects/portfolio.jpg" // Replace with actual path to your preview image
}, 
{
    name: "Momo Money Tech Adventure",
    desc: "A web game where you eat momos to earn, shop cute, and unlock your tech dream.",
    full: "A playful click-based game built using HTML, CSS, and JS. Players earn virtual money by eating momos, shop in a girly boutique, and unlock their dream tech internship while being motivated by quotes.",
    link: "https://momos-money-internship.vercel.app/", // Add your live link
    github: "https://github.com/khushi-1907/Momos-Money-Internship", // Add GitHub link
    tags: ["HTML", "CSS", "JavaScript", "UI/UX"],
    image: "/projects/momo_money.jpg"
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
  {
    name: "The Trifecta of Joy",
    desc: "Celebrate dance, sleep, and books with fun energy mechanics and animations.",
    full: "Interactive HTML/CSS/JS site themed around balancing energy. Includes dance animations, sleep recharge, book recs, rotating facts, emoji feedback, and energy bar logic.",
    link: "https://books-sleep-dance.vercel.app/", // Add live demo
    github: "https://github.com/khushi-1907/Books-Sleep-Dance", // Add repo
    tags: ["HTML", "CSS", "JavaScript", "UI/UX"],
    image: "/projects/trifecta_joy.jpg"
  }

];

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
