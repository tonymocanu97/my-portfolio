export default function Journey() {
  const experience = [
    {
      year: '2023 - Present',
      title: 'Senior Software Engineer',
      company: 'TechCorp Inc.',
      description:
        'Leading frontend architecture for cloud platforms and mentoring junior developers.',
      icon: '💻',
    },
    {
      year: '2021 - 2023',
      title: 'Full Stack Developer',
      company: 'NextGen Solutions',
      description:
        'Built full-stack web applications using ASP.NET and React. Focused on performance and clean UI.',
      icon: '🧠',
    },
    {
      year: '2019 - 2021',
      title: 'Junior Developer',
      company: 'StartupBase',
      description:
        'Worked on desktop tools using WPF and WinForms. Learned the ropes of clean code and version control.',
      icon: '🔧',
    },
  ];

  return (
    <section id="journey" className="w-full px-6 md:px-20 py-20 text-white relative z-10">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">My Journey</h2>

        <div className="relative border-l-2 border-white/20 pl-6">
          {experience.map((job, index) => (
            <div key={index} className="relative mb-12">
              {/* Dot on the line */}
              <div className="absolute -left-[13px] top-1 w-6 h-6 rounded-full bg-blue-400 flex items-center justify-center text-xs shadow-md">
                {job.icon}
              </div>

              {/* Card content */}
              <div className="bg-white/5 border border-white/20 rounded-lg p-6">
                <div className="text-sm text-blue-400 font-semibold mb-1">{job.year}</div>
                <div className="text-xl font-bold">{job.title}</div>
                <div className="text-md font-medium text-gray-300 mb-2">{job.company}</div>
                <p className="text-gray-300">{job.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
