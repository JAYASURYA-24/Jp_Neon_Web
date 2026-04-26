import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'Aisha Sharma',
    text: 'The neon sign for my cafe is absolutely stunning! The quality is top-notch and the glow is perfect.',
    rating: 5,
    img: 'https://i.pravatar.cc/150?u=aisha',
  },
  {
    name: 'Rahul Verma',
    text: 'Ordered a custom gamer tag for my room. The live preview was exactly what I got. Highly recommended!',
    rating: 5,
    img: 'https://i.pravatar.cc/150?u=rahul',
  },
  {
    name: 'Priya Kapoor',
    text: 'Exceptional customer service and fast delivery. The wedding sign was the highlight of our decor.',
    rating: 5,
    img: 'https://i.pravatar.cc/150?u=priya',
  },
];

const Reviews = () => {
  return (
    <section className="section-padding" style={{ background: 'rgba(0,0,0,0.3)' }}>
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            What Our <span className="gradient-text">Customers Say</span>
          </h2>
          <p className="text-dim" style={{ fontSize: '1.0625rem' }}>
            Real stories from real spaces.
          </p>
        </div>

        <div className="grid grid-3 md-grid-2 sm-grid-1 gap-8">
          {reviews.map((review, idx) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="glass"
              style={{ padding: '32px' }}
            >
              {/* Stars */}
              <div className="flex gap-1" style={{ marginBottom: '20px' }}>
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="var(--neon-yellow)" stroke="none" />
                ))}
              </div>

              {/* Quote */}
              <p
                className="italic"
                style={{
                  fontSize: '0.9375rem',
                  lineHeight: 1.7,
                  color: 'rgba(255,255,255,0.85)',
                  marginBottom: '28px',
                }}
              >
                "{review.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={review.img}
                  alt={review.name}
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    border: '1px solid rgba(255,255,255,0.1)',
                    objectFit: 'cover',
                  }}
                />
                <div>
                  <h4 className="font-bold text-sm">{review.name}</h4>
                  <p className="text-xs text-dim" style={{ marginTop: '2px' }}>Verified Buyer</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
