"use client";

import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Layers } from "lucide-react";

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
        link: "https://password-vault-beta.vercel.app/",
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

// Extract unique tags for filtering
const allTags = ["All", ...new Set(allProjects.flatMap(project => project.tags))];

const Projects = () => {
    const [filter, setFilter] = useState("All");

    const filtered = allProjects.filter(
        (p) => filter === "All" || p.tags.includes(filter)
    );

    return (
        <div id="projects" className="py-20 px-6 md:px-20 text-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent inline-block mb-3">
                        Featured Projects
                    </h2>
                    <p className="text-gray-400 text-lg">
                        A comprehensive showcase of my recent work.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-3 mb-16">
                    {allTags.map((tag) => (
                        <button
                            key={tag}
                            onClick={() => setFilter(tag)}
                            className={`px-6 py-2 rounded-full text-xs font-bold uppercase transition-all duration-300 border ${filter === tag
                                ? "bg-purple-600 border-purple-400 text-white shadow-lg shadow-purple-500/40"
                                : "bg-[#1a1a2d] border-purple-900/40 text-gray-500 hover:text-white"
                                }`}
                        >
                            {tag}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode="popLayout">
                        {filtered.map((proj, index) => (
                            <motion.div
                                key={proj.name + index}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.3 }}
                                className="h-full"
                            >
                                <Tilt
                                    glareEnable={true}
                                    glareMaxOpacity={0.1}
                                    className="bg-[#111122] rounded-2xl overflow-hidden border border-purple-900/20 group h-full flex flex-col hover:border-purple-400/30 transition-all duration-300"
                                    perspective={1200}
                                >
                                    <div className="h-44 bg-gray-800 relative overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                                        <img
                                            src={proj.image}
                                            alt={proj.name}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute top-4 right-4 z-20 flex gap-2">
                                            <a href={proj.github} target="_blank" rel="noreferrer" className="p-2 bg-black/60 rounded-full hover:bg-purple-600 transition-colors backdrop-blur-sm">
                                                <Github size={16} />
                                            </a>
                                            {proj.link && (
                                                <a href={proj.link} target="_blank" rel="noreferrer" className="p-2 bg-black/60 rounded-full hover:bg-cyan-600 transition-colors backdrop-blur-sm">
                                                    <ExternalLink size={16} />
                                                </a>
                                            )}
                                        </div>
                                    </div>

                                    <div className="p-5 flex flex-col flex-grow">
                                        <h3 className="text-lg font-bold mb-2 group-hover:text-purple-300 transition-colors">{proj.name}</h3>
                                        <p className="text-xs text-gray-400 mb-4 leading-relaxed line-clamp-2">
                                            {proj.desc}
                                        </p>
                                        <div className="flex flex-wrap gap-1.5 mt-auto">
                                            {proj.tags.map(tag => (
                                                <span key={tag} className="text-[10px] px-2 py-0.5 rounded-md bg-purple-900/20 border border-purple-800/20 text-purple-300">
                                                    #{tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </Tilt>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

export default Projects;
