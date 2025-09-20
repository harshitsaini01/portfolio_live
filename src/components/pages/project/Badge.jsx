import React from "react";

export default function Badge({ children }) {
  return (
    <span className="rounded-md bg-gray-300 text-gray-800 text-[13px] font-medium px-3 py-1 shadow-sm">
      {children}
    </span>
  );
}
