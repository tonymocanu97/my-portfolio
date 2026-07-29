import { Reveal } from './Reveal';

const milestones = [
  {
    year: '2019 – 2021',
    title: "Master's Degree, Lucian Blaga University",
    body: 'Embedded systems, hardware-software integration, IoT.',
  },
  {
    year: '2020 – 2022',
    title: 'Junior Analyst, IFM',
    body: 'Web apps for production processes - C#, ASP.NET, MySQL.',
  },
  {
    year: '2022 – 2025',
    title: 'Software Engineer, IFM',
    body: '20+ web and desktop apps across international factories. Azure migration, hardware drivers, mentoring junior devs.',
  },
  {
    year: '2025 – Present',
    title: 'Senior Software Engineer, LifeSwap',
    body: 'Mental wellness mobile app - React Native, Expo, Firebase, RevenueCat.',
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
              className="absolute -left-10.25 top-6 h-3 w-3 rounded-full bg-primary ring-4 ring-background"
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
