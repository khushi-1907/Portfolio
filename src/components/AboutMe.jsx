import React from "react";
import { motion } from "framer-motion";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { GraduationCap, Code2, Sparkles } from "lucide-react";
import StarsCanvas from "./StarsCanvas";
import "react-vertical-timeline-component/style.min.css";

const timeline = [
  {
    title: "B.Tech CSE",
    institution: "Chandigarh Group of Colleges, Landran",
    year: "2023–2026",
    logo: "/logos/cgc.png",
    color: "#6f42c1",
  },
  {
    title: "Diploma in CSE",
    institution: "Chandigarh College of Engineering and Technology, Chandigarh",
    year: "2020–2023",
    logo: "/logos/ccet.png",
    color: "#17a2b8",
  },
  {
    title: "Matriculation (ICSE)",
    institution: "Tender Heart School, Chandigarh",
    year: "2010–2020",
    logo: "/logos/ths.png",
    color: "#20c997",
  },
];

export default function AboutMe() {
  return (
    <section id="about" className="relative text-white px-4 sm:px-8 py-24 z-10 overflow-hidden bg-[#030014]">
      {/* 🌌 Star Background */}
      <div className="absolute inset-0 -z-10">
        <StarsCanvas />
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
        viewport={{ once: false }}
      >
        <p className="text-sm uppercase tracking-widest text-gray-400">Get to Know Me</p>
        <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-500">
          About Me
        </h2>
      </motion.div>

      {/* 🔹 Feature Icons */}
      <div className="flex flex-wrap justify-center gap-10 mb-16">
        {[{
          icon: <GraduationCap className="h-12 w-12 text-cyan-400 mb-3" />,
          title: "Strong Academics",
          desc: "Solid foundation from ICSE to B.Tech with consistent performance."
        }, {
          icon: <Code2 className="h-12 w-12 text-purple-400 mb-3" />,
          title: "Developer Mindset",
          desc: "Hands-on with MERN, Django, REST APIs & full-stack engineering."
        }, {
          icon: <Sparkles className="h-12 w-12 text-pink-400 mb-3" />,
          title: "Creative Thinker",
          desc: "Combines technical skills with UI/UX focus and creative problem-solving."
        }].map((f, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="text-center max-w-xs px-6 py-6 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:shadow-lg hover:shadow-cyan-500/10"
          >
            <div className="flex justify-center mb-3">{f.icon}</div>
            <h4 className="text-lg font-semibold">{f.title}</h4>
            <p className="text-sm mt-1 text-gray-300">{f.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* 🕒 Timeline */}
      {/* 🕒 Timeline */}
      <VerticalTimeline lineColor="#6B21A8">
        {timeline.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            whileHover={{ scale: 1.02 }}
            className="mb-12" // 👈 added spacing between cards
          >
            <VerticalTimelineElement
              contentStyle={{
                background: "rgba(255,255,255,0.03)",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(255,255,255,0.1)",
                boxShadow: `0 0 20px ${item.color}40`,
                transition: "all 0.3s ease",
              }}
              contentArrowStyle={{ borderRight: "7px solid #6B21A8" }}
              date={item.year}
              iconStyle={{
                background: "#111827",
                boxShadow: `0 0 12px ${item.color}`,
              }}
              icon={
                <div className="flex justify-center items-center w-full h-full">
                  <img
                    src={item.logo}
                    alt={item.institution}
                    className="w-10 h-10 object-contain rounded-full"
                  />
                </div>
              }
              position={i % 2 === 0 ? "right" : "left"}
            >
              <h3 className="text-white text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-purple-400 mt-1">{item.institution}</p>
              {/* <ul className="mt-3 list-disc ml-5 space-y-1 text-sm text-gray-300">
          {item.desc.map((d, idx) => (
            <li key={idx}>{d}</li>
          ))}
        </ul> */}
            </VerticalTimelineElement>
          </motion.div>
        ))}
      </VerticalTimeline>

    </section>
  );
}

