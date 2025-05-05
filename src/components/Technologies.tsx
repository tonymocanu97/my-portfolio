import { FaCode } from 'react-icons/fa';

export default function Technologies() {
  const tech = ['C#', 'ASP.NET', 'WPF', 'WinForms', 'MYSQL', 'MSSQL', 'Azure', 'Git'];

  return (
    <section id="skills" className="w-full px-6 md:px-20 py-20 text-white relative z-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold flex items-center gap-2 mb-10">
          <FaCode className="text-blue-400" />
          Technologies
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {tech.map((item) => (
            <div
              key={item}
              className="rounded-full px-6 py-2 backdrop-blur-md bg-white/10 border border-white/20 text-center text-sm md:text-base shadow-[2px_2px_0px_rgba(0,0,0,0.7)] hover:scale-105 transition-transform"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
