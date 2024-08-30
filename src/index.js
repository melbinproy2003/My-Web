import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Timeline from './Timeline';
import Navbar from './Navbar';
import About from './About';
import Contact from './Contact';
import Project from './Projects'
import reportWebVitals from './reportWebVitals';
import Skills from './Skills';
import Achievements from './Achievements';

// const root = ReactDOM.createRoot(document.getElementById('root'));
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
    <Navbar />
    <App />
    <About />
    <Skills />
    <Timeline />
    <Project />
    <Achievements />
    <Contact />
  </React.StrictMode>
);
reportWebVitals();
