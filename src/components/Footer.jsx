import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function ConnectSection() {
  return (
    <section
      id="connect"
      className="relative z-10 px-6 py-24 md:px-20 text-white bg-[#030014] overflow-hidden"
    >
      {/* ✨ Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <p className="text-sm text-gray-400 uppercase tracking-widest">
          Let’s Collaborate
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-500 mt-2">
          Connect With Me
        </h2>
        <p className="text-gray-400 mt-4 max-w-xl mx-auto text-sm md:text-base">
          I'm actively looking for exciting <span className="text-cyan-300 font-semibold">hiring</span> opportunities and <span className="text-purple-300 font-semibold">internships</span> in full-stack development. Let’s build something impactful together!
        </p>
      </motion.div>

      {/* 🔗 Links */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="mt-12 flex flex-col sm:flex-row gap-6 sm:gap-12 justify-center items-center text-sm"
      >
        <a
          href="mailto:kumari.ruchi1937@gmail.com"
          className="flex items-center gap-3 text-cyan-400 hover:text-white transition"
        >
          <FaEnvelope size={20} />
          ruchiar197@gmail.com
        </a>
        <a
          href="https://www.linkedin.com/in/ruchi-kumari-1907-a2410-2004-khushi/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-blue-400 hover:text-white transition"
        >
          <FaLinkedin size={20} />
          linkedin.com/in/ruchi-kumari-1907-a2410-2004-khushi/
        </a>
        <a
          href="https://github.com/khushi-1907"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-gray-300 hover:text-white transition"
        >
          <FaGithub size={20} />
          github.com/khushi-1907
        </a>
      </motion.div>
    </section>
  );
}
