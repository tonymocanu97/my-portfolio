import Image from 'next/image';

export default function AboutMe() {
  return (
    <section
      id="about"
      className="w-full px-6 md:px-20 py-20 flex flex-col md:flex-row items-center justify-center gap-20"
    >
      {/* Avatar */}
      <div className="border-4 border-white shadow-[6px_6px_0px_black] animate-float">
        <Image
          src="/avatar.gif"
          alt="Pixel Avatar"
          width={230}
          height={230}
          className="object-cover"
        />
      </div>

      {/* About Box */}
      <div className="bg-white bg-opacity-80 text-black p-3 md:p-5 rounded border border-black shadow-[6px_6px_0px_black] max-w-xl">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-lg leading-relaxed">
          I'm a software engineer focused on building clean, scalable, and user-friendly
          applications across the stack.
        </p>
      </div>
    </section>
  );
}
