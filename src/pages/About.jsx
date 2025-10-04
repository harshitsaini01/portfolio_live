import { ShootingStars } from "../components/ui/shooting-stars";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-blue-200 via-blue-50 to-white min-h-screen flex flex-col items-center justify-center text-center px-4">
      {/* Shooting Stars Background */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <ShootingStars />
      </div>

      {/* Hero Text */}
      <div className="m-[100px]">
        <h1 className="text-2xl md:text-[50px] font-bold text-gray-900 flex items-center justify-center gap-3">
          <span></span> My Tech Journey <span></span>
        </h1>
        <p className="mt-4 text-lg md:text-xxl font-bold text-gray-600">
          My journey, my challenges, my solutions
        </p>
      </div>

      {/* About Section */}
      <div className="w-full pb-[80px] top-0">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-10 px-4 md:px-0">
          {/* Left Side - Image */}
          <div className="w-full md:w-1/3 flex justify-center mt-4">
            <img
              src="/me.jpg"
              alt="Profile"
              className="rounded-xl shadow-lg w-full max-w-[300px] md:w-auto md:h-[400px] object-cover"
            />
          </div>

          {/* Right Side - Content */}
          <div className="w-full md:w-2/3 text-start">
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
      </div>
    </section>
  );
}
