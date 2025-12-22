import React from 'react';
import { GlobalStyles } from './styles/GlobalStyles';

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';  
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <GlobalStyles />
      
      <Header />
      
      <main>
        <Hero />
        <About />     
        <Skills />
        <Projects />
      </main>
      
      <Footer />
    </>
  );
}

export default App;