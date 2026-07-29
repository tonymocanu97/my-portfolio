'use client';

import { type FormEvent, useState } from 'react';
import { z } from 'zod';
import { toast } from 'sonner';
import { Reveal } from './Reveal';
import { Socials } from './Socials';

const schema = z.object({
  name: z.string().trim().nonempty('Please enter your name.').max(100, 'Name is too long.'),
  email: z.string().trim().email('Please enter a valid email.').max(255),
  message: z
    .string()
    .trim()
    .nonempty('Please write a message.')
    .max(1000, 'Message must be under 1000 characters.'),
});

export function Contact() {
  const [values, setValues] = useState({ name: '', email: '', message: '' });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }
    toast.success('Thanks — your message is on its way.');
    setValues({ name: '', email: '', message: '' });
  };

  const field =
    'w-full rounded-lg border border-border bg-surface/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 transition-colors focus:border-primary focus:outline-none';

  return (
    <section id="contact" className="mx-auto max-w-2xl scroll-mt-24 px-5 py-24">
      <Reveal className="text-center">
        <h2 className="font-display text-4xl font-bold sm:text-5xl">
          Got a <span className="text-gradient-primary">project?</span>
        </h2>
        <p className="mt-4 text-muted-foreground">
          Tell me what you&apos;re building and I&apos;ll get back to you.
        </p>
      </Reveal>

      <Reveal delay={100}>
        <form onSubmit={onSubmit} className="mt-10 space-y-4">
          <input
            className={field}
            placeholder="Name"
            value={values.name}
            maxLength={100}
            onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
          />
          <input
            className={field}
            placeholder="Email"
            type="email"
            value={values.email}
            maxLength={255}
            onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
          />
          <textarea
            className={`${field} min-h-36 resize-y`}
            placeholder="Message"
            value={values.message}
            maxLength={1000}
            onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
          />
          <button
            type="submit"
            className="w-full rounded-lg px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform duration-200 hover:scale-[1.02]"
            style={{ background: 'var(--gradient-primary)', boxShadow: 'var(--shadow-glow)' }}
          >
            Send
          </button>
        </form>

        <div className="mt-10 flex justify-center">
          <Socials />
        </div>
      </Reveal>
    </section>
  );
}
