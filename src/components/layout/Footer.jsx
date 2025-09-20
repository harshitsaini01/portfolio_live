import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import Scroll from "../scroll";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-white to-blue-100 py-10">
      <div className="max-w-2xl mx-auto text-center px-6">
        <Scroll/>

        <p className="mt-3 text-gray-400 text-md font-medium">
          I build scalable web applications with modern tech stacks. Passionate
          about solving problems and delivering high-quality software.
        </p>
      </div>

      <div className="max-w-6xl my-2 border-t border-gray-300 mx-auto "></div>

      <div className="max-w-2xl mx-auto text-center px-6">
        <p className="text-gray-500 text-sm">
          © 2025 workwithharshit. All rights reserved.
        </p>

        <div className="flex justify-center gap-2 mt-2 mb-8 text-gray-600 text-lg">
          <a href="https://github.com/harshitsaini01"  target="_blank" className="hover:text-gray-900">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/harshitsaini01/"  target="_blank" className="hover:text-blue-700">
            <FaLinkedin />
          </a>
          <a href="https://x.com/harshit_saini01"  target="_blank" className="hover:text-sky-500">
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com/harshit_saini01/"  target="_blank" className="hover:text-pink-500 ">
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}
