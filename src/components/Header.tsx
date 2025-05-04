'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { FaMoon, FaSun } from 'react-icons/fa';

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatted = now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      });
      setTime(formatted);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center bg-black/80 backdrop-blur-md text-white font-mono">
      {/* Left: Branding */}
      <div className="text-green-400 text-xl tracking-widest">
        {'</dev>'}
      </div>

      {/* Center: Navigation */}
      <nav className="hidden md:flex gap-6 text-sm uppercase tracking-widest">
        <a href="#about" className="hover:text-green-400 transition">About</a>
        <a href="#work" className="hover:text-green-400 transition">Work</a>
        <a href="#skills" className="hover:text-green-400 transition">Skills</a>
        <a href="#contact" className="hover:text-green-400 transition">Contact</a>
      </nav>

      {/* Right: Theme Toggle + Clock */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="text-xl hover:text-green-400 transition"
          aria-label="Toggle dark mode"
        >
          {theme === 'dark' ? <FaSun /> : <FaMoon />}
        </button>
        <span className="text-sm tabular-nums">{time}</span>
      </div>
    </header>
  );
}
