import { Reveal } from './Reveal';

const groups = [
  { title: 'Languages', items: ['C#', 'TypeScript', 'JavaScript'] },
  { title: 'Backend', items: ['ASP.NET Core', 'EF Core', 'SignalR', 'MediatR', 'REST API'] },
  { title: 'Frontend', items: ['React', 'React Native', 'Next.js', 'Angular'] },
  { title: 'Cloud & DevOps', items: ['Azure', 'Docker', 'GitHub Actions', 'Railway', 'Vercel'] },
  { title: 'Databases', items: ['MySQL', 'SQL Server', 'PostgreSQL', 'SQLite', ] },
  { title: 'Testing', items: ['xUnit', 'Moq', 'FluentAssertions'] },
];

export function TechStack() {
  return (
    <section id="stack" className="mx-auto max-w-5xl scroll-mt-24 px-5 py-24">
      <Reveal className="text-center">
        <h2 className="font-display text-4xl font-bold sm:text-5xl">
          Tech <span className="text-gradient-primary">Stack</span>
        </h2>
      </Reveal>

      <div className="mt-14 space-y-10">
        {groups.map((g, i) => (
          <Reveal key={g.title} delay={i * 60}>
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-primary">
              {g.title}
            </h3>
            <div className="mt-4 flex flex-wrap gap-3">
              {g.items.map((item) => (
                <span
                  key={item}
                  className="surface-card rounded-lg px-4 py-2.5 text-sm text-foreground/85"
                >
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
