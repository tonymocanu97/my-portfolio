import { Reveal } from './Reveal';

const milestones = [
  {
    year: '2019',
    title: "Bachelor's Degree",
    body: 'Software engineering fundamentals at "Lucian Blaga" University of Sibiu — C++, algorithms, data structures, computer networks.',
  },
  {
    year: '2020',
    title: 'Junior Analyst, IFM',
    body: 'First engineering role — building web apps for production processes, working closely with operators and industrial engineers.',
  },
  {
    year: '2021',
    title: "Master's Degree",
    body: 'Embedded systems, hardware-software integration, real-time systems and IoT.',
  },
  {
    year: '2022',
    title: 'Software Engineer, IFM',
    body: 'Built and maintained 20+ web and desktop apps across international factories, and led the migration to Azure.',
  },
  {
    year: '2024',
    title: 'Hardware & mentoring',
    body: 'Developed hardware drivers with a DLL-based interface and WPF UI, and mentored junior developers.',
  },
  {
    year: '2025',
    title: 'Senior Software Engineer, LifeSwap',
    body: 'Building a mental wellness app with an AI chat companion — React Native, Expo, multi-provider auth and analytics.',
  },
];

export function Journey() {
  return (
    <section id="journey" className="mx-auto max-w-4xl scroll-mt-24 px-5 py-24">
      <Reveal className="text-center">
        <h2 className="font-display text-4xl font-bold sm:text-5xl">
          My <span className="text-gradient-primary">Journey</span>
        </h2>
      </Reveal>

      <ol className="relative mt-14 space-y-8 border-l border-border pl-8">
        {milestones.map((m, i) => (
          <Reveal as="li" key={m.year} delay={i * 70} className="relative">
            <span
              aria-hidden
              className="absolute -left-[41px] top-6 h-3 w-3 rounded-full bg-primary ring-4 ring-background"
            />
            <div className="surface-card rounded-xl p-6">
              <span className="font-display text-sm font-bold text-primary">{m.year}</span>
              <h3 className="mt-1 font-display text-lg font-semibold">{m.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{m.body}</p>
            </div>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
