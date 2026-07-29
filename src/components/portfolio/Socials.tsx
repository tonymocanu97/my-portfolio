import { Github, Linkedin, Twitter } from 'lucide-react';

const socials = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/' },
  { icon: Twitter, label: 'Twitter / X', href: 'https://x.com/' },
];

export function Socials() {
  return (
    <div className="flex gap-3">
      {socials.map((s) => (
        <a
          key={s.label}
          href={s.href}
          aria-label={s.label}
          target="_blank"
          rel="noreferrer noopener"
          className="grid h-10 w-10 place-items-center rounded-lg border border-border text-muted-foreground transition-all duration-200 hover:-translate-y-1 hover:border-primary hover:text-primary"
        >
          <s.icon size={18} />
        </a>
      ))}
    </div>
  );
}
