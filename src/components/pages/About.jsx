// components/About.jsx
"use client";

export default function About() {
  return (
    <section className="bg-gradient-to-b from-white to-blue-100 w-full pb-[80px] top-0">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-10 px-4 md:px-0">
        {/* Left Side - Image */}
        <div className="w-full md:w-1/3 flex justify-center mt-6">
          <img
            src="/me.jpg"
            alt="Profile"
            className="rounded-xl shadow-lg w-full max-w-[300px] md:w-auto md:h-[400px] object-cover"
          />
        </div>

        {/* Right Side - Content */}
        <div className="w-full md:w-2/3">
          <h2 className="text-[50px] font-bold mb-4 text-gray-700">
            About Me
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8 text-[17px]">
            I am Harshit Saini, a passionate{" "}
            <span className="font-bold">Mern Stack Developer</span> with 1.5+ years
            of experience in building scalable web applications. Currently, I
            am working at{" "}
            <span className="text-pink-600 font-semibold">Haxways</span>,
            where I specialize in Frontend and backend development, API integrations, and
            performance optimization.
          </p>

          {/* Cards Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-r from-blue-200 to-blue-100 p-6 rounded-xl shadow-md">
              <h3 className="font-bold text-lg mb-2">Full Stack Mastery</h3>
              <p className="text-gray-600 text-md">
                Specialized in React & Node.js for modern web development
              </p>
            </div>

            <div className="bg-gradient-to-r from-green-200 to-green-100 p-6 rounded-xl shadow-md">
              <h3 className="font-bold text-lg mb-2">API Integrations</h3>
              <p className="text-gray-600 text-md">
                Optimizing APIs for speed & scalability
              </p>
            </div>

            <div className="bg-gradient-to-r from-purple-200 to-purple-100 p-6 rounded-xl shadow-md">
              <h3 className="font-bold text-lg mb-2">Open Source</h3>
              <p className="text-gray-600 text-md">
                Contributing to modern JavaScript and React development
              </p>
            </div>

            <div className="bg-gradient-to-r from-yellow-100 to-yellow-50 p-6 rounded-xl shadow-md">
              <h3 className="font-bold text-lg mb-2">Continuous Learning</h3>
              <p className="text-gray-600 text-md">
                Exploring DevOps tools: GitHub, AWS, CI/CD pipelines, Docker and Kubernetes
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
