import React from "react";

export default function JourneyTimeline() {
  const timeline = [
    {
      year: "2021",
      title: "Started Coding ",
      desc: "Learned Javascript & React Basics.",
    },
    {
      year: "2023",
      title: "First React Project ",
      desc: "Built a Health care website.",
    },
    {
      year: "2024",
      title: "Founder and Developer - Webvetex",
      desc: "Custom software and website solutions.",
    },
   {
  year: "2023",
  title: "QA Test Engineer",
  desc: "Globalstep, Pune.",
},
{
  year: "2024",
  title: "Haxways - MERN & AI ",
  desc: "Built MERN projects & explored AI tools.",
},

{
  year: "2025",
  title: "Founder and Developer - Sarkariparcha ",
  desc: "Student-focused exam preparation platform.",
},

  ];

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center flex items-center justify-center gap-2">
           My Journey in Tech
        </h2>

        {/* Timeline */}
        <div className="mt-10 relative flex flex-col items-center">
          {/* Blue line (only at start, fixed height) */}
          <div className="absolute left-0 top-0 h-full w-1 bg-blue-500 rounded"></div>

          <div className="flex flex-col gap-6 z-10">
            {timeline.map((item, idx) => (
              <div key={idx} className="text-center">
                <h3 className="text-[22px] font-bold text-gray-800">{item.year}</h3>
                <p className=" text-[18px] text-blue-500 font-semibold">{item.title}</p>
                <p className="text-gray-600 text-[15px] font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
