import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const cardItems = [
  { title: "Offer 1", subtitle: "Discount 10%", description: "Save on your first order!" },
  { title: "Offer 2", subtitle: "Discount 20%", description: "Limited time offer!" },
  { title: "Offer 3", subtitle: "BOGO", description: "Buy one, get one free!" },
  { title: "Offer 4", subtitle: "BOGO", description: "Buy one, get one free!" },
  { title: "Offer 5", subtitle: "BOGO", description: "Buy one, get one free!" },
  { title: "Offer 6", subtitle: "BOGO", description: "Buy one, get one free!" },
];

const OfferCarousel = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - 300 : scrollLeft + 300;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="offer-carousel py-10">
      <div className="container relative flex items-center">
        <button onClick={() => scroll('left')} className="scroll-btn left">
          <ChevronLeft size={24} />
        </button>
        
        <div ref={scrollRef} className="scroll-wrapper">
          <div className="scroll-content">
            {cardItems.map((item, index) => (
              <motion.div 
                key={index}
                className="offer-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <h3>{item.title}</h3>
                <h4>{item.subtitle}</h4>
                <p>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <button onClick={() => scroll('right')} className="scroll-btn right">
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
};

export default OfferCarousel;
