'use client';

import { useTypewriter } from '@/hooks/use-typewriter';

export function TypedHeadline() {
  const text = useTypewriter();

  return (
    <span className="relative">
      <span aria-hidden className="text-gradient-primary">
        {text}
        <span className="ml-1 inline-block h-[0.85em] w-[3px] translate-y-[0.1em] animate-caret-blink bg-primary align-middle" />
      </span>
      <span className="sr-only">Senior Software Engineer</span>
    </span>
  );
}
