import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const categories = [
  {
    title: 'Home Decor',
    img: 'https://images.unsplash.com/photo-1563245372-f21724e3a16d?q=80&w=2062&auto=format&fit=crop',
    color: 'var(--neon-pink)',
  },
  {
    title: 'Business Logos',
    img: 'https://images.unsplash.com/photo-1554188248-986adbb73be4?q=80&w=2070&auto=format&fit=crop',
    color: 'var(--neon-blue)',
  },
  {
    title: 'Wedding & Events',
    img: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop',
    color: 'var(--neon-purple)',
  },
  {
    title: 'Gaming Zone',
    img: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop',
    color: 'var(--neon-green)',
  },
  {
    title: 'Cafe & Bar',
    img: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop',
    color: 'var(--neon-yellow)',
  },
  {
    title: 'Minimalist',
    img: 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?q=80&w=2080&auto=format&fit=crop',
    color: '#ffffff',
  },
];

const CategoryGrid = () => {
  return (
    <section id="products" className="section-padding">
      <div className="container">
        {/* Header row */}
        <div className="flex justify-between items-end mb-12" style={{ flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <h2 className="text-4xl font-bold mb-3">
              Shop by <span className="gradient-text">Category</span>
            </h2>
            <p className="text-dim">Perfect neon for every space.</p>
          </div>
          <button className="btn-secondary">
            View All <ArrowRight size={16} />
          </button>
        </div>

        {/* Cards */}
        <div className="grid grid-3 md-grid-2 sm-grid-1 gap-6">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-3xl cursor-pointer"
              style={{ height: '340px' }}
            >
              <img
                src={cat.img}
                alt={cat.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.5s ease',
                }}
                onMouseEnter={e => e.target.style.transform = 'scale(1.08)'}
                onMouseLeave={e => e.target.style.transform = 'scale(1)'}
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)' }}
              />
              <div
                className="absolute w-full"
                style={{ bottom: 0, left: 0, padding: '28px' }}
              >
                <h3 className="text-2xl font-bold" style={{ color: 'white', marginBottom: '8px' }}>
                  {cat.title}
                </h3>
                <div style={{ width: '40px', height: '3px', backgroundColor: cat.color, borderRadius: '2px', marginBottom: '12px' }} />
                <div className="flex items-center gap-2 text-sm font-medium" style={{ color: 'rgba(255,255,255,0.7)' }}>
                  Customize Now <ArrowRight size={14} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
