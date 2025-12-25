"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "../utils/motion";

// 🔠 Tech stack for typewriter effect
const stacks = [
  "MERN",
  "React.js",
  "Next.js",
  "Django",
  "JWT Auth",
  "MongoDB",
  "REST APIs",
];

export default function HeroContent() {
  const [text, setText] = useState("");
  const [word, setWord] = useState(0);
  const [del, setDel] = useState(false);

  // ⌨️ Typewriter Effect Logic
  useEffect(() => {
    const current = stacks[word];
    const timeout = setTimeout(
      () => {
        if (!del && text !== current) {
          setText(current.slice(0, text.length + 1));
        } else if (del && text !== "") {
          setText(current.slice(0, text.length - 1));
        } else if (!del && text === current) {
          setTimeout(() => setDel(true), 800);
        } else if (del && text === "") {
          setDel(false);
          setWord((prev) => (prev + 1) % stacks.length);
        }
      },
      del ? 50 : 100
    );
    return () => clearTimeout(timeout);
  }, [text, del, word]);

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      className="relative z-20 w-full px-6 md:px-20 pt-28 md:pt-40 lg:pt-48"
    >
      <div className="flex flex-col md:flex-row items-center justify-between max-w-[1400px] mx-auto gap-10">
        {/* 🔸 Left Content */}
        <div className="w-full max-w-[600px] flex flex-col gap-6 text-center md:text-left items-center md:items-start">
          {/* 👋 Heading */}
          <motion.h1
            variants={slideInFromLeft(0.2)}
            className="text-4xl font-bold text-white md:text-6xl"
          >
            Hi, I’m{" "}
            <span
              style={{
                background: "linear-gradient(to right, #a78bfa, #06b6d4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                display: "inline-block",
              }}
            >
              Ruchi Kumari
            </span>
          </motion.h1>

          {/* ✍️ Subtitle + Typewriter */}
          <motion.p
            variants={slideInFromLeft(0.3)}
            className="text-lg font-medium text-gray-300 md:text-2xl"
          >
            Full‑Stack Developer ·{" "}
            <span className="font-semibold text-cyan-400">
              {text}
              <span className="animate-pulse">|</span>
            </span>
          </motion.p>

          {/* 🚀 CTA Button */}
          <motion.a
            href="#projects"
            variants={slideInFromLeft(0.1)}
            aria-label="View my work projects"
            className="relative inline-flex items-center justify-center px-6 py-2 rounded-lg max-w-[200px] font-medium text-white transition duration-300 group"
          >
            {/* Glow on hover */}
            <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-500 to-cyan-500 opacity-20 group-hover:opacity-40 blur-md transition duration-300" />

            {/* Button content */}
            <span className="relative z-10 flex items-center gap-2 group-hover:translate-x-1 transition-transform duration-300">
              <svg
                className="h-5 w-5 text-cyan-200"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
              <span className="text-cyan-200 tracking-wide">
                View&nbsp;My&nbsp;Work
              </span>
            </span>
          </motion.a>
        </div>

        {/* 🎨 Right Image (visible on md+) */}
        <motion.div
          variants={slideInFromRight(0.8)}
          className="hidden md:flex w-[620px] lg:w-[660px] justify-end relative overflow-visible"
        >
          <div className="relative group">
            <img
              src="/mainIconsdark.svg"
              alt="Tech Stack Illustration"
              className="w-full h-auto object-contain translate-x-10 lg:translate-x-16 transition duration-300"
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
