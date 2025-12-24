"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award } from "lucide-react";

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
        link: "https://drive.google.com/file/d/1mznW_0PRGnd0VGbblOKBEfM9YYphkxnM/view?usp=sharing",
    },
    {
        name: "World Computer Hacker League (WCHL) 2025 - Regional Round Qualifier",
        org: "BlockseBlock in collaboration with ICP India",
        year: "October 2025",
        desc: "Qualified for the Regional Round of the World Computer Hacker League (WCHL) 2025, showcasing innovation, teamwork, and problem-solving skills in competitive hackathon challenges.",
        tags: ["Hackathon"],
        link: "https://drive.google.com/file/d/1IeP-9ZcQ1c-UrYQ6egGE632vGyqS2zfu/view?usp=sharing",
    },
    {
        name: "Introduction to Career Skills in Software Development",
        org: "LinkedIn Learning",
        year: "August 2025",
        desc: "Completed a course covering software development fundamentals, career management, and essential technical career skills for professional growth.",
        tags: ["Soft Skills", "Training"],
        link: "https://drive.google.com/file/d/18C6LgJxUepZ04v7GUr_uigCMbsQu8gVc/view?usp=sharing",
    },
];

const Certifications = () => {
    const [activeTab, setActiveTab] = useState("All");

    // Extract unique categories from tags
    const allCategories = ["All", ...new Set(allCerts.flatMap(cert => cert.tags))];
    const tabs = allCategories;

    const filtered = allCerts.filter(
        (c) => activeTab === "All" || c.tags.includes(activeTab)
    );

    return (
        <div id="certifications" className="py-20 px-6 md:px-20 text-white">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-14">
                    <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent inline-block mb-3">
                        Milestones & Badges
                    </h2>
                    <p className="text-gray-400 text-lg">Verified accomplishments and specializations.</p>
                </div>

                {/* 🏷️ Filter Chips */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-5 py-2 rounded-lg text-sm transition-colors border ${activeTab === tab
                                ? "bg-purple-500/20 border-purple-500 text-purple-400"
                                : "bg-[#1a1a2d] border-gray-800 text-gray-500 hover:text-gray-300"
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* 📜 Cert Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode="popLayout">
                        {filtered.map((cert, index) => (
                            <motion.div
                                key={cert.name + index}
                                layout
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                className="bg-[#111122] border border-gray-800/50 p-6 rounded-2xl flex flex-col items-start hover:border-purple-500/30 transition-all group relative"
                            >
                                <h4 className="text-xl font-bold mb-1 leading-tight">{cert.name}</h4>
                                <p className="text-purple-400/80 text-sm font-semibold mb-2">{cert.org}</p>
                                <p className="text-gray-400 text-sm mb-4 leading-relaxed flex-grow">{cert.desc}</p>
                                <div className="flex items-center justify-between w-full mt-auto pt-4 border-t border-gray-800/50">
                                    <div className="flex flex-wrap gap-1">
                                        {cert.tags.map((tag) => (
                                            <span key={tag} className="text-[10px] text-gray-400 bg-gray-900 px-2 py-1 rounded-full uppercase font-bold tracking-tighter">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <span className="text-[10px] text-gray-500 italic font-medium">{cert.year}</span>
                                </div>
                                {cert.link && (
                                    <a
                                        href={cert.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-4 w-full text-center bg-purple-500/10 hover:bg-purple-500/20 text-purple-400 py-2 px-4 rounded-lg text-sm font-semibold transition-colors border border-purple-500/30 hover:border-purple-500/50"
                                    >
                                        View Certificate
                                    </a>
                                )}
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

export default Certifications;
