import React from "react";

export default function StatsAchievements() {
  const stats = [
    { value: "1.5+ ", label: "Years of Experience" },
    { value: "5 +", label: "Projects Completed" },
    { value: "2", label: "Companies Worked" },
    { value: "2000 +", label: "GitHub Commits" },
    // { value: "10 +", label: "SaaS Ideas in Progress" },
  ];

  return (
    <section className="pt-[120px] pb-[70px]">
      <div className="max-w-5xl mx-auto text-center px-6">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 flex items-center justify-center gap-2">
          📊 Stats & Achievements
        </h2>

        {/* Stats Cards */}
        <div className=" mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-gray-100 p-6 rounded-xl shadow-sm flex flex-col items-center"
            >
              <p className="text-3xl font-bold text-gray-700">{stat.value}</p>
              <p className="text-gray-600 ">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
