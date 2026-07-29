import { Socials } from './Socials';

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-8 sm:flex sm:justify-between">
        <p className="min-w-0 text-sm text-muted-foreground">
          Built by <span className="text-foreground">Cristian Mocanu</span> · 2026
        </p>
        <Socials />
      </div>
    </footer>
  );
}
