import { Github, ExternalLink } from 'lucide-react';
import { Reveal } from './Reveal';

type Status = 'Live' | 'In Progress' | 'Personal' | 'Client Work';

const statusStyles: Record<Status, string> = {
  Live: 'border-primary/50 bg-primary/12 text-primary',
  'In Progress': 'border-border bg-surface-2 text-muted-foreground',
  Personal: 'border-border bg-surface-2 text-foreground/80',
  'Client Work': 'border-primary/30 bg-primary/8 text-primary/90',
};

type GithubLink = { label: string; href: string };

const projects: {
  name: string;
  description: string;
  tech: string[];
  status: Status;
  github?: string | GithubLink[];
  demo?: string;
  image?: string;
}[] = [
  {
    name: 'LifeSwap',
    image: '/projects/lifeswap.png',
    description: 'Wellness mobile app shipped to both app stores.',
    tech: ['React Native', 'Expo', 'TypeScript', 'Firebase', 'AWS', 'RevenueCat', 'Sentry'],
    status: 'Live',
    demo: 'https://lifeswap.app/',
  },
  {
    name: 'PolyVerify',
    image: '/projects/polyverify.png',
    description: 'Blockchain forensics platform for tracing transactions.',
    tech: ['Next.js', 'React', 'TypeScript', 'SQLite', 'Privy'],
    status: 'Live',
    demo: 'https://polyverify.com/',
  },
  {
    name: 'Mr. Crypto',
    image: '/projects/mrcrypto.png',
    description: "Website for Romania's largest crypto community.",
    tech: ['Next.js', 'React', 'TypeScript', 'PostgreSQL', 'LI.FI', 'Twitter API'],
    status: 'Live',
    demo: 'https://mrcrypto.network/',
  },
  {
    name: 'CryptoAici',
    image: '/projects/cryptoaici.png',
    description: 'Crypto news site covering market updates, blockchain, and DeFi.',
    tech: ['Next.js', 'React', 'TypeScript', 'Supabase'],
    status: 'Live',
    demo: 'https://mrcrypto.network/',
  },
  {
    name: 'Gogosh',
    description: 'Mobile app built for a local food & coffee business.',
    tech: ['React Native', 'Expo', 'TypeScript', 'Supabase'],
    status: 'In Progress',
  },
  {
    name: 'Vector',
    image: '/projects/vector.png',
    description: 'Pro esports merch store with a full commerce backend.',
    tech: ['ASP.NET Core', 'EF Core', 'React', 'TypeScript', 'PostgreSQL'],
    status: 'Personal',
    github: 'https://github.com/tonymocanu97/vector',
    demo: 'https://vector-web-ruby.vercel.app/',
  },
  {
    name: 'Pulse',
    image: '/projects/pulse.png',
    description: 'Real-time chat app built on a clean CQRS backend.',
    tech: ['ASP.NET Core', 'SignalR', 'MediatR', 'React', 'TypeScript', 'PostgreSQL'],
    status: 'Personal',
    github: 'https://github.com/tonymocanu97/pulse',
    demo: 'https://pulse-web-henna-two.vercel.app/',
  },
  {
    name: 'CaloriePal',
    image: '/projects/caloriepal.png',
    description: 'Fitness and nutrition web app with tracking analytics.',
    tech: ['ASP.NET Core', 'EF Core', 'MediatR', 'Next.js', 'React', 'TypeScript', 'Supabase'],
    status: 'Personal',
    github: [
      { label: 'Web', href: 'https://github.com/CaloriePal/caloriepal-web' },
      { label: 'API', href: 'https://github.com/CaloriePal/caloriepal-api' },
    ],
    demo: 'https://caloriepal-web.vercel.app/',
  },
  {
    name: 'Linea',
    image: '/projects/linea.png',
    description: 'Production line monitoring dashboard with AI insights.',
    tech: ['ASP.NET Core', 'Angular', 'TypeScript', 'SQLite', 'OpenAI'],
    status: 'Personal',
    github: 'https://github.com/tonymocanu97/linea',
  },
];

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24">
      <Reveal className="text-center">
        <h2 className="font-display text-4xl font-bold sm:text-5xl">Projects</h2>
        <span aria-hidden className="mx-auto mt-6 block h-16 w-px bg-primary/50" />
      </Reveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal as="article" key={p.name} delay={(i % 3) * 80}>
            <div className="surface-card group flex h-full flex-col overflow-hidden rounded-2xl">
              <div
                className="relative flex h-40 items-center justify-center overflow-hidden border-b border-border"
                style={{
                  background:
                    'radial-gradient(circle at 30% 20%, color-mix(in oklab, var(--primary) 22%, transparent), transparent 60%), var(--gradient-surface)',
                }}
              >
                {p.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={p.image}
                    alt={`${p.name} screenshot`}
                    loading="lazy"
                    className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <div className="h-24 w-40 rounded-lg border border-border bg-background/70 shadow-inner transition-transform duration-300 group-hover:scale-105">
                    <div className="flex h-5 items-center gap-1 border-b border-border px-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary/70" />
                      <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/40" />
                      <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/40" />
                    </div>
                    <div className="grid h-[calc(100%-1.25rem)] place-items-center">
                      <span className="font-display text-lg font-bold text-foreground/70">
                        {p.name}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-lg font-semibold">{p.name}</h3>
                  <span
                    className={`shrink-0 rounded-full border px-2.5 py-1 text-[11px] font-medium ${statusStyles[p.status]}`}
                  >
                    {p.status}
                  </span>
                </div>

                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-border bg-surface-2 px-2 py-1 text-[11px] text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {(p.github || p.demo) && (
                  <div className="mt-auto flex flex-wrap gap-2 pt-6">
                    {typeof p.github === 'string' && (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label={`${p.name} source on GitHub`}
                        className="grid h-9 w-9 place-items-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                      >
                        <Github size={16} />
                      </a>
                    )}
                    {Array.isArray(p.github) &&
                      p.github.map((link) => (
                        <a
                          key={link.label}
                          href={link.href}
                          target="_blank"
                          rel="noreferrer noopener"
                          aria-label={`${p.name} ${link.label} source on GitHub`}
                          title={link.label}
                          className="flex h-9 items-center gap-1.5 rounded-md border border-border px-3 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                        >
                          <Github size={16} />
                          <span className="text-xs font-medium">{link.label}</span>
                        </a>
                      ))}
                    {p.demo && (
                      <a
                        href={p.demo}
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label={`${p.name} live demo`}
                        className="grid h-9 w-9 place-items-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
