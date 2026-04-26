import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{ padding: '0 24px' }}
    >
      {/* Background Glows */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '20%', left: '15%',
          width: '500px', height: '500px',
          background: 'radial-gradient(circle, rgba(189,0,255,0.15) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: '20%', right: '15%',
          width: '500px', height: '500px',
          background: 'radial-gradient(circle, rgba(0,229,255,0.12) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="container relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            fontSize: 'clamp(2.5rem, 8vw, 5rem)',
            lineHeight: 1.1,
            fontWeight: 800,
            marginBottom: '24px',
            letterSpacing: '-0.02em',
          }}
        >
          Light Up Your Ideas with <br />
          <span className="gradient-text flicker">JP Sparkles</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-dim"
          style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
            maxWidth: '620px',
            margin: '0 auto 40px',
            lineHeight: 1.7,
          }}
        >
          Custom Neon Signs for Home, Business & Events. <br />
          Handcrafted with love, powered by innovation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-center justify-center gap-6"
          style={{ flexWrap: 'wrap' }}
        >
          <a href="#customizer" className="btn-primary">Customize Your Sign</a>
          <a href="#products" className="btn-secondary">View Designs</a>
        </motion.div>
      </div>

      {/* Floating shape */}
      <div className="absolute pointer-events-none" style={{ top: '80px', right: '40px', opacity: 0.2 }}>
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
          <circle cx="60" cy="60" r="55" stroke="var(--neon-pink)" strokeWidth="1.5" strokeDasharray="8 6" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
