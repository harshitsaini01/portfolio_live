import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaGamepad } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useLocation } from "react-router-dom";
import Scroll from "../scroll";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation(); // Get current URL
  const [active, setActive] = useState(location.pathname);

  useEffect(() => {
    setActive(location.pathname); // Update active when route changes
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { id: "/", label: "Home" },
    { id: "/about", label: "About" },
    // { id: "/portfolio", label: "Portfolio" },
    { id: "/blog", label: "Blog" },
    { id: "/resume", label: "Resume" },
    { id: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-gradient-to-r from-blue-200 to-blue-200"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-3">
        <div className="flex items-center space-x-6">
          <Scroll/>
          <ul className="hidden md:flex space-x-4 text-gray-800 font-medium">
            {menuItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.id}
                  onClick={() => setActive(item.id)}
                  className={`px-3 py-[8px] text-[15px] rounded-md transition ${
                    active === item.id
                      ? "bg-blue-500 text-white"
                      : "text-gray-800 hover:bg-gray-600 hover:text-white"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center space-x-[5px] text-gray-700 ">
          <a
            href="https://github.com/harshitsaini01"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 text-[22px]"
          >
            <FaGithub />
          </a>
          {/* <a
            href="https://gamepad.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 text-[24px]"
          >
            <FaGamepad />
          </a> */}
          <a
            href="https://www.linkedin.com/in/harshitsaini01/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 text-[26px]"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://x.com/harshit_saini01"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 text-[27px]"
          >
            <FaXTwitter />
          </a>
        </div>
      </div>
    </nav>
  );
}
