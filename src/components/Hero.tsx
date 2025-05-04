import Image from 'next/image';
import { FaGithub, FaEnvelope } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-12 py-20">
      {/* Left Text Content */}
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Hi, I'm <span className="text-blue-600">Your Name</span>
        </h1>
        <h2 className="text-2xl font-medium text-gray-700 dark:text-gray-300 mb-4">
          Full Stack Developer
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          I build exceptional digital experiences with clean, efficient, and maintainable code.
          Passionate about creating innovative solutions to complex problems.
        </p>
        <div className="flex flex-wrap gap-4 items-center justify-center md:justify-start">
          <a href="#projects" className="bg-blue-600 text-white px-5 py-2 rounded shadow hover:bg-blue-700 transition">
            View My Work
          </a>
          <a href="#contact" className="border px-5 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition">
            Contact Me
          </a>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-2xl mx-2 hover:text-blue-500" />
          </a>
          <a href="mailto:you@example.com">
            <FaEnvelope className="text-2xl mx-2 hover:text-blue-500" />
          </a>
        </div>
      </div>

      {/* Right Image Content */}
      <div className="mb-10 md:mb-0 md:w-1/2 flex justify-center">
        <div className="rounded-full border-4 border-blue-200 overflow-hidden w-64 h-64">
          <Image
            src="/your-photo.png" // put your profile image here
            alt="Profile"
            width={256}
            height={256}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}
