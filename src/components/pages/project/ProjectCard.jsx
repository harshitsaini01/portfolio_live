import React from "react";
import Badge from "./Badge";

export default function ProjectCard({ project }) {
  return (
    <div
      className="group relative rounded-xl border border-gray-200 shadow-[0_10px_30px_rgba(0,0,0,0.06)] 
                 bg-gradient-to-r from-blue-100 to-purple-200 overflow-hidden transition-transform
                 hover:-translate-y-1"
    >
      {/* Image */}
      <div className="px-6 pt-6 pb-[12px]">
        <div className="overflow-hidden rounded-lg">
          <img
            src={project.image}
            alt={project.title}
            className="h-43 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
      </div>

      {/* Content */}
      <div className="px-6 pb-6">
        <h3 className="text-[20px] font-bold text-gray-900">{project.title}</h3>
        <p className="mt-2 text-gray-600 font-medium leading-relaxed text-[14px] ">{project.desc}</p>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <Badge key={t}>{t}</Badge>
          ))}
        </div>

        {/* Actions */}
        <div className="mt-6 flex items-center justify-between">
          <a
            href={project.demo}
            className="px-[14px] py-[6px] rounded-md bg-blue-600 text-white font-semibold shadow
                       hover:opacity-95 transition"
            target="_blank"
            rel="noreferrer"
          >
            Live Demo
          </a>
          <a
            href={project.code}
            className="px-[14px] py-[6px] rounded-md bg-gray-800 text-white font-semibold shadow
                       hover:opacity-95 transition"
            target="_blank"
            rel="noreferrer"
          >
            View Code
          </a>
        </div>
      </div>
    </div>
  );
}
