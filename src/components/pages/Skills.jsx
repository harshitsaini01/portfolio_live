import React from "react";
import { motion } from "framer-motion";
import { 
  FaHtml5, FaCss3Alt, FaBootstrap, FaJs, FaReact, FaNodeJs, FaPhp, FaVuejs, FaAws, FaGlobe, FaRobot 
} from "react-icons/fa";
import { 
  SiNextdotjs, SiRemix, SiTailwindcss, SiLaravel, SiMongodb, SiMysql, SiGit, SiDocker, SiLinux, SiUbuntu, SiTypescript, SiJquery, SiFirebase, SiDigitalocean, SiGithub 
} from "react-icons/si";

export const techCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: <FaReact className="text-cyan-400 text-2xl" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-black text-2xl" /> },
      { name: "JavaScript", icon: <FaJs className="text-yellow-500 text-2xl" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-700 text-2xl" /> },
      { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600 text-2xl" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500 text-2xl" /> },
    ],
  },
  {
    title: "Backend",
    skills: [{ name: "Node.js", icon: <FaNodeJs className="text-green-600 text-2xl" /> }],
  },
  {
    title: "Databases",
    skills: [
      { name: "MongoDB", icon: <SiMongodb className="text-green-600 text-2xl" /> },
      { name: "MySQL", icon: <SiMysql className="text-blue-500 text-2xl" /> },
      { name: "Firebase", icon: <SiFirebase className="text-yellow-500 text-2xl" /> },
    ],
  },
  {
    title: "DevOps",
    skills: [
      { name: "Linux", icon: <SiLinux className="text-gray-800 text-2xl" /> },
      { name: "Git", icon: <SiGit className="text-red-500 text-2xl" /> },
      { name: "AWS", icon: <FaAws className="text-orange-500 text-2xl" /> },
      { name: "Docker", icon: <SiDocker className="text-blue-500 text-2xl" /> },
      { name: "VPS Hosting", icon: <SiDigitalocean className="text-blue-400 text-2xl" /> },
      { name: "GitHub", icon: <SiGithub className="text-gray-800 text-2xl" /> },
    ],
  },
  {
    title: "AI & ML",
    skills: [
      { name: "Cursor AI", icon: <FaRobot className="text-green-500 text-2xl" /> },
      { name: "OpenAI", icon: <FaRobot className="text-purple-600 text-2xl" /> },
      { name: "LangChain", icon: "⛓️" },
    ],
  },
];

export default function Skills() {
  return (
    <section className="py-12 px-4 md:px-[120px]">
      <h2 className="mb-10 text-[33px] font-bold text-center text-gray-800">
        Tech Stack & Skills
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {techCategories.map((category, idx) => (
          <motion.div
            key={idx}
            className="bg-gray-100 rounded-lg shadow-md p-6"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-[22px] font-semibold mb-4 text-gray-800">
              {category.title}
            </h3>
            <div className="grid grid-cols-3 gap-2">
              {category.skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-white shadow-sm rounded-xl h-16 w-16 flex items-center justify-center text-2xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ease-in-out">
                    {skill.icon}
                  </div>
                  <span className="text-[13px] font-semibold text-gray-600 mt-2 mb-4">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
