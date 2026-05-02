import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Timeline from './Timeline';
import Projects from './Projects';
import Achievements from './Achievements';
import Contact from './Contact';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Timeline />
      <Projects />
      <Achievements />
      <Contact />
      <footer>
        <p>Designed &amp; built by <strong>Melbin P Roy</strong> © 2025</p>
      </footer>
    </>
  );
}

export default App;
