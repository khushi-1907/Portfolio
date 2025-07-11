import React from "react";
import HeroContent from "./HeroContent";
import StarsCanvas from "./StarsCanvas";

const Hero = () => {
  return (
    <section
      id="about-me"
      className="relative w-full h-screen overflow-hidden text-white"
    >
      {/* 🔮 Purple fallback background */}
      <div className="absolute inset-0 -z-30 bg-[#030014]" />

      {/* 🌌 Blackhole Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute left-0 w-full min-h-[120vh] object-cover z-[-1]"
        style={{
          top: "calc(65px - 110vh + 50%)", // Adjusted to match smaller size
          transform: "scaleY(-1)",
        }}
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>

      {/* ✨ Starfield Canvas (transparent) */}
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
