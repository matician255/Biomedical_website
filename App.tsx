
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import About from './components/About';
import Work from './components/Work';
import Services from './components/Services';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen selection:bg-emerald-500/30 selection:text-emerald-400">
      <AnimatedBackground />
      <Navbar />
      
      <main>
        <Hero />
        <Experience />
        <About />
        <Work />
        <Services />
      </main>

      <Footer />
    </div>
  );
};

export default App;
