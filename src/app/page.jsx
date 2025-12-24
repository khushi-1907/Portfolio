"use client";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Certifications from "../components/Certifications";
import Footer from "../components/Footer";
import ClickSpark from "../components/ClickSpark";


export default function Home() {
    return (
        <>
            <ClickSpark
                sparkColor="#fff"
                sparkSize={10}
                sparkRadius={15}
                sparkCount={8}
                duration={400}
            >
                <Navbar />
                <Hero />
                <AboutMe />
                <Skills />
                <Projects />
                <Certifications />
                <Footer />
            </ClickSpark>
        </>
    );
}
