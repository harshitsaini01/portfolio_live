import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaJs,
  FaReact,
  FaVuejs,
  FaPhp,
  FaGlobe,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiJquery,
  SiLaravel,
  SiCodeigniter,
  SiNextdotjs,
  SiMongodb,
  SiPhpmyadmin,
  SiMysql,
    SiTypescript,
  SiGithub,
  SiFirebase,
  SiNodedotjs,
    SiDigitalocean,
} from "react-icons/si";
import { motion } from "framer-motion";

export default function WorkExperience() {
  const techStack = [
    { icon: <FaHtml5 className="text-orange-600 text-4xl" />, name: "HTML" },
    { icon: <FaCss3Alt className="text-blue-600 text-4xl" />, name: "CSS" },
    { icon: <FaBootstrap className="text-purple-600 text-4xl" />, name: "Bootstrap" },
    { icon: <SiTailwindcss className="text-cyan-500 text-4xl" />, name: "Tailwind" },
    { icon: <FaJs className="text-yellow-500 text-4xl" />, name: "JavaScript" },
        { icon: <SiTypescript className="text-blue-700 text-4xl" />, name: "TypeScript" },
    { icon: <SiJquery className="text-blue-400 text-4xl" />, name: "jQuery" },
    { icon: <FaGlobe className="text-gray-600 text-4xl" />, name: "Ajax" },
    { icon: <FaReact className="text-cyan-400 text-4xl" />, name: "React JS" },
    { icon: <SiNextdotjs className="text-black text-4xl" />, name: "Next JS" },
       { icon: <SiNodedotjs className="text-green-600 text-4xl" />, name: "Node.js" },
      { icon: <SiMongodb className="text-green-600 text-4xl" />, name: "MongoDB" },
        { icon: <SiFirebase className="text-yellow-500 text-4xl" />, name: "Firebase" },
    { icon: <SiMysql className="text-blue-500 text-4xl" />, name: "MySQL" },
     { icon: <SiDigitalocean className="text-blue-400 text-4xl" />, name: "VPS Hosting" },
    { icon: <SiGithub className="text-gray-800 text-4xl" />, name: "GitHub" },
  
  ];

  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Haxways",
      period: "April 2024 - Present · 1 yr 7 months",
      location: "Chhutmalpur, Uttar Pradesh · On-site",
      color: "bg-gradient-to-r from-blue-50 to-green-200",
    },
    {
      title: "QA Test Engineer ",
      company: "Globalstep",
      period: "Oct 2023 - April 2024 · 6 Months",
      location: "Pune, Maharashtra , India · On-side",
      color: "bg-gradient-to-r from-blue-100 to-yellow-200",
    },

  ];

  const stats = [
    {
      value: "1.5+ Years",
      label: "Total Experience",
      color: "bg-gradient-to-r from-blue-200 to-pink-200",
    },
    {
      value: "5+",
      label: "Projects Completed",
      color: "bg-gradient-to-r from-cyan-50 to-blue-200",
    },
    {
      value: "2",
      label: "Companies Worked",
      color: "bg-gradient-to-r from-red-50 to-pink-200",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-blue-100 to-purple-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[50px] font-bold text-center mb-12 text-gray-800">
          My Work Experience
        </h2>

        <div className="grid md:grid-cols-12 gap-12 text-center">
          {/* Tech Stack */}
          <motion.div
            className="md:col-span-4 text-center flex flex-col items-center"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-6"> Tech Stack</h3>
            <div className="grid grid-cols-4 gap-6">
              {techStack.map((tech, idx) => (
                <motion.div
                  key={idx}
                  className="flex flex-col items-center gap-2"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  viewport={{ once: true }}
                >
                  <span className="bg-gray-300 rounded-lg h-16 w-16 flex items-center justify-center shadow">
                    {tech.icon}
                  </span>
                  <span className="text-[12px] font-medium text-gray-500">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience + Stats */}
          <div className="md:col-span-8 flex flex-col gap-8">
            {/* Experiences */}
            <div className="flex flex-col gap-6">
              {experiences.map((exp, idx) => (
                <motion.div
                  key={idx}
                  className={`${exp.color} p-5 rounded-lg shadow-md flex items-center justify-between`}
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="text-left">
                    <h4 className="text-lg font-bold text-gray-600">
                      {exp.title}
                    </h4>
                    <p className="text-gray-700 font-semibold">
                      {exp.company} · Full-time
                    </p>
                    <p className="text-gray-500 text-sm">{exp.period}</p>
                    <p className="text-gray-500 text-sm">{exp.location}</p>
                  </div>
                  <img
                    src="public/experience-certificate.webp"
                    alt="work"
                    className="w-[100px] h-[100px] object-cover rounded-full mr-4"
                  />
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid md:grid-cols-2 gap-6 justify-center text-center mx-auto">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  className={`${stat.color} w-70 p-6 rounded-lg shadow-md ${
                    idx === 2 ? "md:col-span-2 md:mx-auto" : ""
                  }`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.2 }}
                  viewport={{ once: true }}
                >
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-gray-600">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
