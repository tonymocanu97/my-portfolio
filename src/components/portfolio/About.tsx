import { Cloud, Smartphone, Layers } from 'lucide-react';
import { AnimatedStat } from './AnimatedStat';
import { Reveal } from './Reveal';

const services = [
  {
    icon: Smartphone,
    title: 'Mobile Development',
    detail: 'React Native',
  },
  {
    icon: Layers,
    title: 'Full-Stack Web Development',
    detail: 'ASP.NET Core + React',
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    detail: 'Azure, Docker',
  },
];

const stats = [
  { value: '6', suffix: '+', label: 'Years Experience' },
  { value: '10', suffix: '+', label: 'Projects Shipped' },
  { value: '2', suffix: '★', label: 'Apps Live on Stores' },
];

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24">
      <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
        <div className="relative space-y-5 pl-6">
          <span aria-hidden className="absolute left-0 top-2 bottom-2 w-px bg-primary/40" />
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 90}>
              <div className="surface-card flex items-center gap-4 rounded-xl p-5">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-primary/12 text-primary">
                  <s.icon size={22} />
                </span>
                <div className="min-w-0">
                  <p className="font-display text-base font-semibold">{s.title}</p>
                  <p className="text-sm text-muted-foreground">{s.detail}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <h2 className="font-display text-4xl font-bold sm:text-5xl">About me</h2>
          <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
            I&apos;m Tony, a Senior Software Engineer based in Romania with 6 years of experience. I
            build clean, well-architected products — from REST APIs and cloud infrastructure to
            mobile apps live on the App Store and Google Play.
          </p>

          <dl className="mt-10 grid grid-cols-3 gap-6">
            {stats.map((s) => (
              <AnimatedStat key={s.label} value={Number(s.value)} suffix={s.suffix} label={s.label} />
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
