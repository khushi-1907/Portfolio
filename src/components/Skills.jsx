import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaPython,
} from "react-icons/fa";
import {
  SiMongodb,
  SiDjango,
  SiTailwindcss,
  SiJavascript,
  SiPostman,
  SiBootstrap,
  SiPhp,
  SiNextdotjs,
} from "react-icons/si";
import { TbRobot } from "react-icons/tb"; // LLM icon

const skills = [
  { name: "Next.js", icon: <SiNextdotjs className="text-black" /> },
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-400" /> },
  { name: "Python", icon: <FaPython className="text-blue-300" /> },
  { name: "Integrating LLMs", icon: <TbRobot className="text-purple-400" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
  { name: "Django", icon: <SiDjango className="text-emerald-300" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
  { name: "Postman", icon: <SiPostman className="text-orange-300" /> },
  { name: "Bootstrap", icon: <SiBootstrap className="text-purple-400" /> },
  { name: "PHP", icon: <SiPhp className="text-indigo-300" /> },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative text-white px-4 sm:px-6 py-24 z-10 overflow-hidden bg-[#030014]"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
        viewport={{ once: false }}
      >
        <p className="text-sm uppercase tracking-widest text-gray-400">
          My Tech Stack
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-500">
          Skills
        </h2>
      </motion.div>

      {/* Skills Grid */}
      <div className="grid grid-cols-3 gap-x-6 gap-y-8 max-w-[900px] mx-auto justify-items-center">
        {skills.map((skill, i) => (
          <Tilt
            key={skill.name}
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            scale={1.05}
            transitionSpeed={450}
            glareEnable={true}
            glareMaxOpacity={0.2}
            className="cursor-pointer rounded-xl shadow-white/10 hover:shadow-purple-600/70 transition-shadow duration-300"
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ scale: 1.07 }}
              className="flex flex-col items-center gap-3 bg-white/5 rounded-xl px-6 py-8 border border-white/10 shadow-md shadow-purple-500/20 backdrop-blur-md
                w-[100px] h-[100px] sm:w-[110px] sm:h-[110px] md:w-[120px] md:h-[120px] lg:w-[130px] lg:h-[130px]"
              onClick={e => e.stopPropagation()}
            >
              <div className="text-3xl">{skill.icon}</div>
              <p className="text-xs sm:text-sm text-gray-200 text-center select-none">
                {skill.name}
              </p>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </section>
  );
}
