import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'Customize', href: '#customizer' },
  { name: 'Designs', href: '#products' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        padding: isScrolled ? '12px 0' : '20px 0',
        background: isScrolled ? 'rgba(5,5,5,0.85)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(16px)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      <div className="container flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold font-heading"
          style={{ letterSpacing: '-0.02em' }}
        >
          JP <span className="gradient-text">Sparkles</span>
        </motion.div>

        {/* Desktop */}
        <div className="md-flex items-center gap-8 hidden">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-dim"
              style={{
                textDecoration: 'none',
                fontWeight: 500,
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={e => e.target.style.color = '#fff'}
              onMouseLeave={e => e.target.style.color = ''}
            >
              {link.name}
            </a>
          ))}
          <button
            className="relative"
            style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', padding: '8px' }}
          >
            <ShoppingCart size={20} />
            <span
              style={{
                position: 'absolute', top: 0, right: 0,
                background: 'var(--neon-pink)', borderRadius: '50%',
                width: '16px', height: '16px', fontSize: '10px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontWeight: 700,
              }}
            >0</span>
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4" style={{ display: 'none' }} ref={el => {
          if (el) el.style.display = window.innerWidth < 768 ? 'flex' : 'none';
        }}>
          <button style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}>
            <ShoppingCart size={20} />
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass flex flex-col gap-4"
          style={{ margin: '12px 16px 0', padding: '24px' }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              style={{ textDecoration: 'none', color: 'white', fontSize: '1.125rem', fontWeight: 500 }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
