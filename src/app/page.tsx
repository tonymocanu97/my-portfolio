import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AboutMe from '@/components/AboutMe';
import Technologies from '@/components/Technologies';
import Projects from '@/components/Projects';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <AboutMe />
      <Technologies />
      <Projects />
    </main>
  );
}
