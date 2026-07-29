'use client';

import { useEffect, useRef, useState } from 'react';

/** Orange/red dot cursor with a lagging glow ring, desktop only. */
export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return;
    setReady(true);

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let raf = 0;

    const placeRing = () => {
      const el = ringRef.current;
      if (el) {
        el.style.left = `${ringX}px`;
        el.style.top = `${ringY}px`;
      }
    };

    const placeDot = () => {
      dotRef.current?.style.setProperty(
        'transform',
        `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`,
      );
    };

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      placeDot();
    };

    const tick = () => {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      placeRing();
      raf = requestAnimationFrame(tick);
    };

    placeDot();
    placeRing();
    window.addEventListener('mousemove', onMove);
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
    };
  }, []);

  if (!ready) return null;

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-2 w-2 rounded-full"
        style={{
          background: 'var(--gradient-primary)',
          boxShadow: '0 0 10px 2px color-mix(in oklab, var(--primary) 65%, transparent)',
        }}
      />
      <div
        ref={ringRef}
        aria-hidden
        className="pointer-events-none fixed z-[9998] h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/40"
      />
    </>
  );
}
