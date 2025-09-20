import React from "react";

export default function FilterBar({ filters, active, onChange }) {
  return (
    <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
      {filters.map((f) => {
        const isActive = f === active;
        return (
          <button
            key={f}
            onClick={() => onChange(f)}
            className={[
              "px-4 py-2 rounded-lg text-sm font-semibold transition-all",
              " shadow-sm cursor-pointer",
              isActive
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-black hover:bg-gray-300",
            ].join(" ")}
          >
            {f}
          </button>
        );
      })}
    </div>
  );
}
