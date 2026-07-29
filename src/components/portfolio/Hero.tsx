import { TypedHeadline } from './TypedHeadline';

const portrait = '/tony-portrait.png';

const stack = ['C#', 'ASP.NET Core', 'React Native', 'React', 'Next.js', 'Azure', 'TypeScript', 'PostgreSQL', 'EF Core', 'Docker'];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 sm:pt-32">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-30 top-10 h-60 w-60 rounded-full opacity-35 blur-[80px]"
        style={{ background: 'var(--gradient-primary)' }}
      />

      <div className="mx-auto max-w-6xl px-5 pb-10">
        <div className="flex items-center justify-between gap-8">
          <div className="max-w-2xl">
            <p className="font-display text-3xl font-bold sm:text-4xl">
              Hello<span className="text-primary">.</span>
            </p>

            <div className="mt-4 flex items-center gap-4">
              <span className="hidden h-px w-16 bg-primary sm:block" />
              <p className="font-display text-2xl font-medium text-foreground/90 sm:text-3xl">
                I&apos;m Cristian
              </p>
            </div>

            <h1 className="mt-3 font-display text-4xl font-bold leading-[1.05] sm:text-6xl">
              <TypedHeadline />
            </h1>

            <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground">
              I build full-stack products that ship - from .NET APIs to React Native mobile apps.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-md px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform duration-200 hover:scale-105"
                style={{ background: 'var(--gradient-primary)', boxShadow: 'var(--shadow-glow)' }}
              >
                View Projects
              </a>
              <a
                href="#journey"
                className="rounded-md border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors duration-200 hover:border-primary hover:text-primary"
              >
                My Resume
              </a>
            </div>
          </div>

          <div className="relative hidden shrink-0 sm:block">
            <div
              aria-hidden
              className="absolute -inset-8 animate-glow-pulse rounded-full blur-2xl"
              style={{
                background:
                  'radial-gradient(circle, color-mix(in oklab, var(--primary) 45%, transparent) 0%, transparent 68%)',
              }}
            />
            <div
              aria-hidden
              className="absolute -inset-0.5 rounded-full border-2 border-primary/70"
            />

            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={portrait}
              alt="Cristian Mocanu, senior software engineer"
              width={200}
              height={200}
              className="relative z-10 h-50 w-50 rounded-full object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.5)]"
            />
          </div>
        </div>
      </div>

      <div className="relative mt-4 overflow-hidden border-y border-border bg-surface/40 py-5">
        <div className="flex w-max animate-ticker gap-12 pr-12">
          {[...stack, ...stack, ...stack, ...stack].map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="whitespace-nowrap font-display text-lg text-muted-foreground/70"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
