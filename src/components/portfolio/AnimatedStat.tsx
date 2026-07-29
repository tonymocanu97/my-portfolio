'use client';

import { useEffect, useRef, useState } from 'react';
import { useReveal } from '@/hooks/use-reveal';

/** Counts a stat up from 0 to its target value once it scrolls into view. */
export function AnimatedStat({
  value,
  suffix,
  label,
  duration = 1400,
}: {
  value: number;
  suffix: string;
  label: string;
  duration?: number;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!visible || started.current) return;
    started.current = true;

    const start = performance.now();
    let raf = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * value));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [visible, value, duration]);

  return (
    <div ref={ref}>
      <dt className="font-display text-3xl font-bold">
        {count}
        <span className="text-primary">{suffix}</span>
      </dt>
      <dd className="mt-1 text-xs leading-snug text-muted-foreground">{label}</dd>
    </div>
  );
}
