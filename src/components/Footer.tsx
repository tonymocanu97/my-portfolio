import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="w-full px-6 py-6 bg-white bg-opacity-90 backdrop-blur-sm text-black font-mono">
      <div className="flex flex-col items-center justify-center gap-4">
        {/* Social Icons */}
        <div className="flex gap-6 text-2xl">
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

        {/* Copyright */}
        <p className="text-sm text-center">© 2025 Your Name. All rights reserved.</p>
      </div>
    </footer>
  );
}
