import { Reveal } from './Reveal';

const milestones = [
  {
    year: '2019',
    title: 'First engineering role',
    body: '.NET line-of-business systems.',
  },
  {
    year: '2020',
    title: 'Grew into backend',
    body: 'ASP.NET Core, EF Core, Azure, GitHub Actions.',
  },
  {
    year: '2021',
    title: 'Full-stack',
    body: 'React frontends against my own APIs, plus SignalR real-time work.',
  },
  {
    year: '2022',
    title: 'Mobile',
    body: 'Built and shipped LifeSwap to the App Store and Google Play with React Native and Expo.',
  },
  {
    year: '2023',
    title: 'Indie maker',
    body: 'Multiple SaaS and client projects running in parallel.',
  },
  {
    year: '2024–2025',
    title: 'Senior',
    body: 'Clean Architecture, distributed systems, mentoring, Azure cloud migration.',
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
