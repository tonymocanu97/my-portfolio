import { useEffect, useState } from 'react';

const DEFAULT_WORDS = ['Problem Solver', 'Product Engineer', 'Software Engineer'];

/** Types out each word letter by letter, pauses, deletes it, then moves to the next. */
export function useTypewriter({
  words = DEFAULT_WORDS,
  typingSpeed = 75,
  deletingSpeed = 40,
  pauseMs = 1600,
}: {
  words?: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseMs?: number;
} = {}) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];

    if (!deleting && text === current) {
      const id = setTimeout(() => setDeleting(true), pauseMs);
      return () => clearTimeout(id);
    }

    if (deleting && text === '') {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
      return;
    }

    const id = setTimeout(
      () =>
        setText(deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1)),
      deleting ? deletingSpeed : typingSpeed,
    );
    return () => clearTimeout(id);
  }, [text, deleting, index, words, typingSpeed, deletingSpeed, pauseMs]);

  return text;
}
