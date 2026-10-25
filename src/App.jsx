import { useCallback, useRef } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Marquee from './components/Marquee.jsx';
import { AboutSection, ProjectsSection, AppsSection } from './components/Sections.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import { useRafScroll } from './hooks/index.js';

function ScrollProgress() {
  const barRef = useRef(null);

  const onScroll = useCallback(() => {
    const bar = barRef.current;
    if (!bar) return;
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const docHeight =
      document.documentElement.scrollHeight - document.documentElement.clientHeight;
    if (docHeight > 0) {
      bar.style.width = ((scrollTop / docHeight) * 100) + '%';
    }
  }, []);
  useRafScroll(onScroll);

  return <div ref={barRef} className="scroll-progress" aria-hidden="true"></div>;
}

export default function App() {
  return (
    <>
      <ScrollProgress />
      <div className="page-glow" aria-hidden="true"></div>
      <Header />
      <main id="top">
        <Hero />
        <Marquee />
        <AboutSection />
        <ProjectsSection />
        <AppsSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
