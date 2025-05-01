import React from 'react';
import Navbar from './components/Navbar.jsx';
import Intro from './pages/Intro.jsx';
import About from './pages/About.jsx';
import Projects from './pages/Projects.jsx';
import Experience from './pages/Experience.jsx';
import Skills from './pages/Skills.jsx';
import Contact from './pages/Contact.jsx';

function App() {
  return (
    <>
      <Navbar />
      <Intro />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
    </>
  );
}

export default App;
