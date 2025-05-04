import Image from "next/image";

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

      {/* Text content */}
      <div className="z-20 text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold font-mono text-green-300">
          Software Engineer
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-200 font-mono">
          Building pixel-perfect digital tools & interfaces.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <a
            href="#projects"
            className="bg-green-600 hover:bg-green-700 px-6 py-2 rounded text-white font-semibold font-mono"
          >
            View My Work
          </a>
        </div>
      </div>
    </section>
  );
}
