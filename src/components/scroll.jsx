import React from 'react';

export default function () {
  return (
    <div>
      <a
        href="/"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
          setTimeout(() => {
            window.location.href = "/";
          }, 500); 
        }}
        className="text-[25px] font-medium text-gray-800 cursor-pointer"
      >
        Harshit
      </a>
    </div>
  );
}
