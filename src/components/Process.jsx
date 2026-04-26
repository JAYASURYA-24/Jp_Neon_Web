import React from 'react';
import { motion } from 'framer-motion';
import { Type, Palette, PackageCheck } from 'lucide-react';

const steps = [
  { icon: Type, title: 'Your Text', desc: 'Enter your name, quote, or brand slogan.' },
  { icon: Palette, title: 'Customize', desc: 'Pick your favorite font, color, and size.' },
  { icon: PackageCheck, title: 'We Ship', desc: 'Review your design and place your order.' },
];

const Process = () => {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-dim" style={{ fontSize: '1.0625rem' }}>
            Your dream neon in 3 easy steps.
          </p>
        </div>

        <div
          className="flex items-center justify-between"
          style={{ flexWrap: 'wrap', gap: '48px', justifyContent: 'center' }}
        >
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.15 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center"
                style={{ maxWidth: '260px', flex: '1 1 200px' }}
              >
                <div
                  className="relative flex items-center justify-center"
                  style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    marginBottom: '24px',
                  }}
                >
                  {/* Step number badge */}
                  <div
                    className="absolute flex items-center justify-center font-bold"
                    style={{
                      top: '-6px', right: '-6px',
                      width: '28px', height: '28px',
                      borderRadius: '50%',
                      background: 'white',
                      color: '#000',
                      fontSize: '0.75rem',
                    }}
                  >
                    {idx + 1}
                  </div>
                  <Icon size={30} color="white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-dim text-sm">{step.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;
