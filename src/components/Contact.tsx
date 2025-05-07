'use client';
import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Handle sending logic here
    alert('Message sent!');
  };

  return (
    <section
      id="contact"
      className="w-full min-h-screen px-6 md:px-20 py-20 flex flex-col items-center justify-center text-white relative z-10"
    >
      {/* Heading outside the box */}
      <h2 className="text-3xl font-bold mb-6 text-center animate-float">Get in Touch</h2>

      {/* Contact form card */}
      <div className="w-full max-w-xl bg-white/5 backdrop-blur-md border border-white/20 p-8 rounded-xl shadow-[4px_4px_0px_rgba(0,0,0,0.7)]">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Name Field */}
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="text-sm text-white font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
              required
              className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email Field */}
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-sm text-white font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="your@email.com"
              value={form.email}
              onChange={handleChange}
              required
              className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Message Field */}
          <div className="flex flex-col gap-1">
            <label htmlFor="message" className="text-sm text-white font-medium mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Your message..."
              value={form.message}
              onChange={handleChange}
              rows={5}
              required
              className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-2 bg-blue-400 hover:bg-blue-500 transition text-white font-semibold px-6 py-2.5 rounded-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
