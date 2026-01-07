"use client";

import React from "react";
import dynamic from "next/dynamic";
import HeroContent from "./HeroContent";
import OptimizedVideo from "./OptimizedVideo";

const StarsCanvas = dynamic(() => import("./StarsCanvas"), {
    ssr: false,
    loading: () => <div className="absolute inset-0 bg-[#030014]" />,
});

const Hero = () => {
    return (
        <section
            id="about-me"
            className="relative w-full h-screen overflow-hidden text-white"
        >
            {/* 🔮 Purple fallback background */}
            <div className="absolute inset-0 -z-30 bg-[#030014]" />


            {/* 🌌 Blackhole Video */}
            <OptimizedVideo
                src="/blackhole.webm"
                poster="/blackhole-poster.jpg"
                className="absolute left-0 w-full min-h-[120vh] object-cover z-[-1]"
                style={{
                    top: "calc(65px - 110vh + 50%)",
                    transform: "scaleY(-1)",
                }}
            />

            {/* ✨ Starfield Canvas (dynamic loader) */}
            <div className="absolute inset-0 -z-10 pointer-events-none">
                <StarsCanvas />
            </div>


            {/* 👩‍💻 Foreground Content */}
            <div className="relative z-20 h-full flex items-center justify-center px-4">
                <HeroContent />
            </div>
        </section>
    );
};

export default Hero;
