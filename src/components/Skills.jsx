"use client";

import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

const skills = [
    { name: "React", color: "#61dafb" },
    { name: "Node.js", color: "#68a063" },
    { name: "MongoDB", color: "#47a248" },
    { name: "Tailwind", color: "#38bdf8" },
    { name: "Three.js", color: "#ffffff" },
    { name: "Django", color: "#092e20" },
    { name: "Express", color: "#fff" },
    { name: "JWT", color: "#d63aff" },
    { name: "Next.js", color: "#000" },
    { name: "PostgreSQL", color: "#336791" },
    { name: "Docker", color: "#2496ed" },
    { name: "Python", color: "#3776ab" },
];

const Skills = () => {
    return (
        <div id="skills" className="py-20 px-6 md:px-20 text-white">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent inline-block mb-3">
                        Technical Skills
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Technologies I use to bring ideas to life.
                    </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.05 }}
                        >
                            <Tilt
                                glareEnable={true}
                                glareMaxOpacity={0.1}
                                className="bg-[#1a1a2d5e] border border-purple-900/40 p-4 rounded-xl cursor-pointer hover:border-cyan-500/60 transition-colors"
                                perspective={1000}
                                scale={1.05}
                            >
                                <div className="flex flex-col items-center gap-3">
                                    <div
                                        className="w-12 h-12 rounded-full flex items-center justify-center border border-white/10"
                                        style={{ backgroundColor: `${skill.color}22` }}
                                    >
                                        <span className="text-lg font-bold" style={{ color: skill.color }}>{skill.name[0]}</span>
                                    </div>
                                    <div className="text-sm font-bold tracking-wider text-center">
                                        {skill.name}
                                    </div>
                                </div>
                            </Tilt>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
