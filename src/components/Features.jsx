import React from 'react';
import { motion } from 'framer-motion';
import { Zap, ShieldCheck, Clock, Droplets, MapPin } from 'lucide-react';

const trustFactors = [
  { icon: Zap, color: '#facc15', title: 'Energy Efficient', desc: 'Our LED neons consume 80% less power than traditional gas neons.' },
  { icon: Clock, color: '#60a5fa', title: '50,000+ Hours', desc: 'Built to last. Enjoy your neon glow for years without maintenance.' },
  { icon: Droplets, color: '#22d3ee', title: 'Waterproof Options', desc: 'Perfect for outdoor signage, patios, and pool areas.' },
  { icon: ShieldCheck, color: '#4ade80', title: 'Easy Installation', desc: 'Plug & play. Mount it on your wall in less than 2 minutes.' },
  { icon: MapPin, color: '#f87171', title: 'Made in India', desc: 'Supporting local artisans with premium quality materials.' },
];

const Features = () => {
  return (
    <section className="section-padding" style={{ background: 'rgba(0,0,0,0.4)' }}>
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Why Choose <span className="gradient-text">JP Sparkles?</span>
          </h2>
          <p className="text-dim" style={{ fontSize: '1.0625rem' }}>
            The gold standard in custom neon craftsmanship.
          </p>
        </div>

        <div className="grid grid-3 md-grid-2 sm-grid-1 gap-8">
          {trustFactors.map((factor, idx) => {
            const Icon = factor.icon;
            return (
              <motion.div
                key={factor.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.08 }}
                viewport={{ once: true }}
                className="glass flex flex-col items-center text-center"
                style={{ padding: '40px 28px' }}
              >
                <div
                  className="flex items-center justify-center"
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '16px',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    marginBottom: '24px',
                  }}
                >
                  <Icon size={28} color={factor.color} />
                </div>
                <h3 className="font-bold mb-3" style={{ fontSize: '1.125rem' }}>
                  {factor.title}
                </h3>
                <p className="text-dim text-sm leading-relaxed">{factor.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
