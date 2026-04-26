import React from 'react';
import { motion } from 'framer-motion';

const QuoteSection = () => {
  return (
    <section className="quote-section py-10">
      <div className="container grid-2">
        <motion.div 
          className="content-box"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p>Display any quotes related to neon</p>
        </motion.div>
        <motion.div 
          className="content-box"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p>Display neon image</p>
        </motion.div>
      </div>
    </section>
  );
};

export default QuoteSection;
