import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Customizer from './components/Customizer';
import CategoryGrid from './components/CategoryGrid';
import Features from './components/Features';
import Process from './components/Process';
import Reviews from './components/Reviews';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-deep text-main min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Customizer />
        <CategoryGrid />
        <Features />
        <Process />
        <Reviews />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
