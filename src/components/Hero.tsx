import Image from "next/image";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center text-white overflow-hidden">
      {/* Background image */}
      <Image
        src="/forest.png"
        alt="Forest pixel art"
        fill
        priority
        className="object-cover z-0"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Text content */}
      <div className="z-20 text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold font-sans text-white animate-float">
          Software Engineer
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-white font-sans">
          Building pixel-perfect digital tools & interfaces.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <a
            href="#projects"
            className="relative px-6 py-2 text-black bg-white font-semibold border border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] transition duration-800"
          >
            View My Work
          </a>
        </div>
        {/* Social Icons */}
        <div className="flex items-center justify-center gap-6 text-white text-2xl mt-6">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 transition"
            >
              <FaTwitter />
            </a>
          </div>
      </div>
    </section>
  );
}
