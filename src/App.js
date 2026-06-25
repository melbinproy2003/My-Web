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
    // Refresh ScrollTrigger after all content loads
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Navbar />
      <main className="one-page">
        <Home />
        <Projects />
        <About />
        <WhatIDo />
        <Skills />
        <Timeline />
        <Contact />
      </main>
      <footer>
        <p>Designed and built by <strong>Melbin P Roy</strong> - Portfolio 2026</p>
      </footer>
    </>
  );
}

export default App;
