"use client";
import { FaFileDownload, FaComments } from "react-icons/fa";
import { ShootingStars } from "../components/ui/shooting-stars";
import About from "../components/pages/About";
import WorkExperience from "../components/pages/WorkExperience";
import Skills from "../components/pages/Skills";
import Projects from "../components/pages/project/Projects";
import ContactForm from "../components/pages/ContactMe";
import JourneyTimeline from "../components/pages/JourneyTimeline";

export default function Home() {
  return (
    <div className="w-full">
      <section className="relative bg-gradient-to-b from-blue-200 via-blue-50 to-white w-full min-h-screen pt-[140px] sm:pt-[160px] md:pt-[180px]">
        
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
          <ShootingStars />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 px-4 sm:px-8 md:px-12 text-center md:text-left">
          <div className="w-full md:w-2/3 flex flex-col items-center md:items-start">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
              Hey, I'm{" "}
              <span className="text-blue-600">Harshit Saini</span>{" "}
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl text-gray-700 mt-3 font-semibold">
              Software Developer
            </h2>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg mt-4 leading-relaxed max-w-xl">
              I build scalable web applications with modern tech stacks.
              Passionate about solving problems and delivering high-quality
              software.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="/PRINCE.pdf"
                download
                className="flex items-center gap-2 bg-blue-600 text-white px-4 sm:px-5 py-2 sm:py-3 text-sm sm:text-base font-bold rounded-lg shadow-md hover:bg-blue-700 transition cursor-pointer"
              >
                <FaFileDownload />
                Download CV
              </a>
              <a
                href="/contact"
                className="flex items-center gap-2 border-2 border-blue-600 text-blue-600 px-4 sm:px-5 py-2 sm:py-3 text-sm sm:text-base font-bold rounded-lg shadow-md hover:bg-blue-600 hover:text-white transition cursor-pointer"
              >
                <FaComments />
                Let&apos;s Connectt
              </a>
            </div>
          </div>

          
<div className="hidden sm:flex w-full md:w-1/3 justify-center">
  <img
    src="/me.jpg" 
    alt="Profile"
    className="w-32 h-32 sm:w-40 sm:h-40 md:w-60 md:h-60 object-cover rounded-full border-4 border-blue-600 shadow-lg cursor-pointer"
  />
</div>

        </div>
      </section>

      <About />
      <WorkExperience />
      <Skills />
      <Projects />
      <ContactForm />
      <JourneyTimeline />
    </div>
  );
}
