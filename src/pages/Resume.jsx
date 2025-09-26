import { useState } from "react";
import { FaDownload, FaEye } from "react-icons/fa";
import Confetti from "react-confetti";
import { ShootingStars } from "../components/ui/shooting-stars";

export default function Resume() {
  const [clicked, setClicked] = useState(false);

  const handleDownload = () => {
    setClicked(true);

    // Trigger actual download
    const link = document.createElement("a");
    link.href = "/Harshit_resume.pdf"; // PDF in public folder
    link.download = "Harshit_resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Hide confetti after 3 seconds
    setTimeout(() => setClicked(false), 3000);
  };

  return (
    <div className="min-h-screen flex flex-col items-center pt-[120px] bg-gradient-to-b from-blue-200 via-blue-50 to-white p-6">
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
 <ShootingStars />
</div>

      {/* Header */}
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 text-center">
        My Resume
      </h1>
      <p className="text-center text-gray-600 mb-10 max-w-xl">
        Check out my professional journey and skills. Click below to download or view online!
      </p>

      {/* Buttons */}
      <div className="flex flex-col md:flex-row items-center gap-6">
        {/* Download Button */}
        <button
          onClick={handleDownload}
          className="relative flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:scale-105 transition-transform text-white font-semibold px-6 py-3 rounded-2xl shadow-lg hover:shadow-2xl cursor-pointer"
        >
          <FaDownload /> Download Resume
        </button>

        {/* View Online */}
       <a
          href="/Harshit_resume.pdf" 
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 border-2 border-blue-500 hover:bg-blue-500 hover:text-white transition-colors text-blue-500 font-semibold px-6 py-3 rounded-2xl shadow-md cursor-pointer"
        >
          <FaEye /> View On
        </a>
      </div>

      {/* Confetti */}
      {clicked && <Confetti numberOfPieces={150} recycle={false} />}

      {/* Footer */}
      <p className="mt-16 text-gray-500 text-sm text-center max-w-md">
        Designed and developed by Harshit Saini | MERN Stack Developer
      </p>
    </div>
  );
}
