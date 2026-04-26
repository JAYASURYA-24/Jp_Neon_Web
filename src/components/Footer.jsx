import React from 'react';
import { Camera, Share2, Send } from 'lucide-react';

const Footer = () => {
  const linkStyle = { textDecoration: 'none', color: 'inherit', transition: 'color 0.2s' };

  return (
    <footer className="section-padding" style={{ background: '#000', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="container">
        {/* Main Grid */}
        <div
          className="grid grid-4 md-grid-2 sm-grid-1"
          style={{ gap: '48px', marginBottom: '64px' }}
        >
          {/* Brand */}
          <div>
            <h2
              className="font-bold font-heading mb-6"
              style={{ fontSize: '1.5rem', letterSpacing: '-0.01em' }}
            >
              JP <span className="gradient-text">Sparkles</span>
            </h2>
            <p className="text-dim text-sm" style={{ lineHeight: 1.7, marginBottom: '20px' }}>
              Elevating spaces with the glow of innovation. Handcrafted premium neon signs for those who dare to shine.
            </p>
            <div className="flex gap-3">
              {[Camera, Share2, Send].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex items-center justify-center"
                  style={{
                    width: '40px', height: '40px',
                    borderRadius: '10px',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    color: 'white',
                    transition: 'all 0.2s',
                  }}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-bold mb-6" style={{ fontSize: '0.9375rem' }}>Shop</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {['Customizer', 'Home Decor', 'Business Signs', 'Bulk Orders'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-dim" style={linkStyle}>{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold mb-6" style={{ fontSize: '0.9375rem' }}>Support</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {['Shipping Policy', 'Return & Refund', 'Track Order', 'Contact Us'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-dim" style={linkStyle}>{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold mb-6" style={{ fontSize: '0.9375rem' }}>Newsletter</h4>
            <p className="text-dim text-sm" style={{ lineHeight: 1.7, marginBottom: '16px' }}>
              Get the latest designs and offers.
            </p>
            <div
              className="flex glass overflow-hidden"
              style={{ padding: '4px', borderRadius: '12px' }}
            >
              <input
                type="email"
                placeholder="Email"
                style={{
                  flex: 1,
                  padding: '10px 14px',
                  background: 'transparent',
                  border: 'none',
                  color: 'white',
                  fontSize: '0.875rem',
                  outline: 'none',
                  fontFamily: 'Inter, sans-serif',
                }}
              />
              <button
                style={{
                  padding: '10px 20px',
                  background: 'white',
                  color: '#000',
                  border: 'none',
                  borderRadius: '10px',
                  fontWeight: 700,
                  fontSize: '0.8125rem',
                  cursor: 'pointer',
                }}
              >
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="flex items-center justify-between text-dim text-xs"
          style={{
            paddingTop: '28px',
            borderTop: '1px solid rgba(255,255,255,0.05)',
            flexWrap: 'wrap',
            gap: '16px',
          }}
        >
          <p>© 2026 JP Sparkles. All rights reserved. Made with ❤️ in India.</p>
          <div className="flex gap-6">
            <a href="#" className="text-dim" style={linkStyle}>Privacy Policy</a>
            <a href="#" className="text-dim" style={linkStyle}>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
