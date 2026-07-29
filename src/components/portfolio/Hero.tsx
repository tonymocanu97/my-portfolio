import { TypedHeadline } from './TypedHeadline';

const portrait = '/tony-portrait.png';

const stack = ['C#', 'ASP.NET Core', 'React Native', 'React', 'Next.js', 'Azure', 'TypeScript', 'PostgreSQL', 'EF Core', 'Docker'];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 sm:pt-32">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-10 h-130 w-130 rounded-full opacity-40 blur-[120px]"
        style={{ background: 'var(--gradient-primary)' }}
      />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
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

        <div className="relative mx-auto flex w-full max-w-md items-end justify-center">
          <span
            aria-hidden
            className="pointer-events-none absolute left-0 top-1/3 font-display text-[9rem] font-bold leading-none text-primary/15 sm:text-[12rem]"
          >
            &lt;
          </span>
          <span
            aria-hidden
            className="pointer-events-none absolute right-0 bottom-1/4 font-display text-[9rem] font-bold leading-none text-primary/15 sm:text-[12rem]"
          >
            &gt;
          </span>

          <div
            aria-hidden
            className="absolute bottom-6 h-75 w-75 animate-glow-pulse rounded-full sm:h-95 sm:w-95"
            style={{
              background:
                'radial-gradient(circle, color-mix(in oklab, var(--primary) 45%, transparent) 0%, transparent 68%)',
            }}
          />
          <div
            aria-hidden
            className="absolute bottom-6 h-72.5 w-72.5 rounded-full border-2 border-primary/70 sm:h-90 sm:w-90"
          />

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={portrait}
            alt="Cristian Mocanu, senior software engineer"
            width={912}
            height={1200}
            className="relative z-10 w-[86%] animate-float drop-shadow-[0_35px_60px_rgba(0,0,0,0.6)]"
          />
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
