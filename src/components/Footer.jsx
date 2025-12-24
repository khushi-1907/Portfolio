"use client";

import React from "react";
import { Mail, Github, Linkedin, Send } from "lucide-react";

const Footer = () => {
    return (
        <footer id="connect" className="py-20 px-6 md:px-20 bg-[#020210] border-t border-purple-900/20">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 text-center md:text-left">

                {/* 📬 Left Side: Contact */}
                <div className="flex flex-col gap-4">
                    <h2 className="text-3xl font-bold text-white tracking-tight">Let’s connect!</h2>
                    <p className="text-gray-400 max-w-sm">
                        I’m currently looking for new opportunities. My inbox is always open.
                    </p>
                    <a
                        href="mailto:ruchi.khushi1907@gmail.com"
                        className="flex items-center gap-3 text-purple-400 hover:text-cyan-400 transition-colors group"
                    >
                        <div className="p-3 bg-purple-950/40 rounded-full group-hover:bg-cyan-950/40">
                            <Mail size={20} />
                        </div>
                        <span className="font-semibold text-lg">ruchiar197@gmail.com</span>
                    </a>
                </div>

                {/* 🔗 Right Side: Links */}
                <div className="flex flex-col gap-6 items-center md:items-end">
                    <div className="flex gap-5">
                        <a href="https://github.com/khushi-1907" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
                            <Github size={24} />
                        </a>
                        <a href="https://www.linkedin.com/in/ruchi-kumari-1907-a2410-2004-khushi/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
                            <Linkedin size={24} />
                        </a>
                    </div>

                    <div className="text-xs text-gray-500 font-medium bg-gray-900/50 px-4 py-2 rounded-full border border-gray-800">
                        © {new Date().getFullYear()} · Designed & Built by <span className="text-purple-400">Ruchi Kumari</span>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
