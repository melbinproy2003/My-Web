import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import Navbar from './Navbar';
import Home from './Home';
import Projects from './Projects';
import About from './About';
import WhatIDo from './WhatIDo';
import Skills from './Skills';
import Timeline from './Timeline';
import Contact from './Contact';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

function App() {
  useEffect(() => {
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Navbar />
      <main className="overflow-hidden">
        <Home />
        <Projects />
        <About />
        <WhatIDo />
        <Skills />
        <Timeline />
        <Contact />
      </main>
      <footer className="w-[min(1180px,calc(100%-48px))] mx-auto py-7 pb-9 border-t border-black/30">
        <p className="text-ink-muted text-sm font-bold">
          Designed and built by <strong className="text-ink">Melbin P Roy</strong> - Portfolio 2026
        </p>
      </footer>
    </>
  );
}

export default App;
