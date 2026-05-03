import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import WhatIDo from './WhatIDo';
import Skills from './Skills';
import Timeline from './Timeline';
import Projects from './Projects';
import Achievements from './Achievements';
import Contact from './Contact';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
  exit:    { opacity: 0, y: -20, transition: { duration: 0.25 } },
};

function PageWrapper({ children }) {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      {children}
    </motion.div>
  );
}

function HomePage() {
  return <PageWrapper><Home /></PageWrapper>;
}

function AboutPage() {
  return (
    <PageWrapper>
      <About />
      <WhatIDo />
      <Skills />
      <Timeline />
      <Achievements />
    </PageWrapper>
  );
}

function ProjectsPage() {
  return <PageWrapper><Projects /></PageWrapper>;
}

function ContactPage() {
  return <PageWrapper><Contact /></PageWrapper>;
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/"         element={<HomePage />} />
        <Route path="/about"    element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact"  element={<ContactPage />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AnimatedRoutes />
      <footer>
        <p>Designed &amp; built by <strong>Melbin P Roy</strong> © 2025</p>
      </footer>
    </BrowserRouter>
  );
}

export default App;
