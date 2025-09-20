import React, { useMemo, useState } from "react";
import ProjectCard from "./ProjectCard";
import FilterBar from "./FilterBar";
import StatsAchievements from "./Achievements";


const FILTERS = ["All", "Fintech", "AI", "Healthcare"];

const PROJECTS = [
    {
    id: "fintech-platform",
    title: "Financial Services Platform",
    category: "Fintech",
    desc:
      "A full-featured Fintech platform with user login, admin-managed loans, and real-time stats.",
    image:
      "project/incentum.png",
    tags: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
    demo: "https://incentum.ai/",
    code: "https://github.com/codewithprince01/mainIncentumm",
  },
  {
    id: "ai-trip-planner",
    title: "AI Trip Planner",
    category: "AI",
    desc:
      "An AI-powered travel planner with destination search, custom trip planning, and real-time suggestions.",
    image:
      "project/ai.png",
    tags: ["React", "Tailwind CSS", "Firebase", "Gemini API"],
    demo: "https://ai-traveler-planner.vercel.app/",
    code: "https://github.com/codewithprince01/ai-trip-planner",
  },
    {
    id: "mystery-message",
    title: "Mystery Message",
    category: "All",
    desc:
      "A fun messaging app share hidden notes, unlock surprises, and keep conversations exciting.",
    image:
      "project/mystry.jpg",
    tags: ["Next.js", "Tailwind CSS", "Node.js", "MongoDB"],
    demo: "https://github.com/codewithprince01/mysterymessage",
    code: "https://github.com/codewithprince01/mysterymessage",
  },
  {
    id: "-health-care",
    title: "HealthCare",
    category: "Healthcare",
    desc:
      "A medical healthcare platform with doctor profiles, online appointments, and patient care services.",
    image:
      "project/health.png",
   tags: ["React", "Bootstrap", "PHP", "MySQL"],
    demo: "https://dermatologistinroorkee.in/",
    code: "https://github.com/codewithprince01/HealthCare-LandingPage",
  },

];

export default function Projects() {
  const [active, setActive] = useState("All");

  const filtered = useMemo(() => {
    if (active === "All") return PROJECTS;
    return PROJECTS.filter((p) => p.category === active);
  }, [active]);

  return (
    <section className=" px-4 md:px-8 lg:px-12">
      {/* Heading */}
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[50px] md:text-4xl font-bold text-center text-gray-800">
          <span className="inline-flex items-center gap-2">
            <span className="inline-block rotate-12 ">🛠️</span> Projects
          </span>
        </h2>
          <h3 className="text-[20px] font-medium text-center mt-2 text-gray-500">Here are a few projects I've worked on recently.</h3>

        {/* Filters */}
        <FilterBar
          filters={FILTERS}
          active={active}
          onChange={(f) => setActive(f)}
        />

        {/* Grid */}
        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
      <StatsAchievements/>
    </section>
  );
}
