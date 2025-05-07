import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AboutMe from '@/components/AboutMe';
import Technologies from '@/components/Technologies';
import Projects from '@/components/Projects';
import Journey from '@/components/Journey';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <AboutMe />
      <Technologies />
      <Projects />
      <Journey />
      <Contact />
      <Footer />
    </main>
  );
}
