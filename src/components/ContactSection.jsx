import React from 'react';
import { MessageCircle, Phone, ArrowRight } from 'lucide-react';

const ContactSection = () => {
  const inputStyle = {
    width: '100%',
    padding: '14px 16px',
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '12px',
    color: 'white',
    fontSize: '0.9375rem',
    outline: 'none',
    fontFamily: 'Inter, sans-serif',
    resize: 'vertical',
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container">
        <div className="grid grid-2 md-grid-1 gap-12 items-center">

          {/* Left: Contact Info */}
          <div>
            <h2 className="font-bold" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '20px', lineHeight: 1.15 }}>
              Let's Create <br />
              <span className="gradient-text">Something Iconic</span>
            </h2>
            <p className="text-dim" style={{ fontSize: '1.0625rem', lineHeight: 1.7, marginBottom: '40px' }}>
              Whether it's a bulk order for your business or a unique gift for a loved one, we're here to help you shine.
            </p>

            <div className="flex flex-col gap-4">
              {/* WhatsApp */}
              <a
                href="https://wa.me/9790189483"
                target="_blank"
                rel="noreferrer"
                className="glass flex items-center gap-4"
                style={{ padding: '18px 20px', textDecoration: 'none', color: 'white', transition: 'border-color 0.2s' }}
              >
                <div
                  className="flex items-center justify-center"
                  style={{
                    width: '44px', height: '44px',
                    borderRadius: '12px',
                    background: 'rgba(37,211,102,0.1)',
                    flexShrink: 0,
                  }}
                >
                  <MessageCircle size={22} color="#25D366" />
                </div>
                <div>
                  <p className="text-xs text-dim" style={{ marginBottom: '2px' }}>WhatsApp Us</p>
                  <p className="font-bold text-sm">+91 97901 89483</p>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:+919994409486"
                className="glass flex items-center gap-4"
                style={{ padding: '18px 20px', textDecoration: 'none', color: 'white', transition: 'border-color 0.2s' }}
              >
                <div
                  className="flex items-center justify-center"
                  style={{
                    width: '44px', height: '44px',
                    borderRadius: '12px',
                    background: 'rgba(96,165,250,0.1)',
                    flexShrink: 0,
                  }}
                >
                  <Phone size={22} color="#60a5fa" />
                </div>
                <div>
                  <p className="text-xs text-dim" style={{ marginBottom: '2px' }}>Call Us</p>
                  <p className="font-bold text-sm">+91 99944 09486</p>
                </div>
              </a>
            </div>
          </div>

          {/* Right: Inquiry Form */}
          <div className="glass relative overflow-hidden" style={{ padding: '40px' }}>
            {/* Decorative glow */}
            <div
              className="absolute pointer-events-none"
              style={{
                top: '-60px', right: '-60px',
                width: '200px', height: '200px',
                borderRadius: '50%',
                background: 'rgba(255,0,127,0.06)',
                filter: 'blur(60px)',
              }}
            />

            <h3 className="font-bold mb-3" style={{ fontSize: '1.5rem' }}>
              Bulk & Business
            </h3>
            <p className="text-dim mb-8" style={{ lineHeight: 1.7 }}>
              Need a custom logo for your salon, cafe, or shop? Get special pricing on bulk orders.
            </p>

            <form className="flex flex-col gap-4">
              <input type="text" placeholder="Your Name" style={inputStyle} />
              <input type="email" placeholder="Business Email" style={inputStyle} />
              <textarea placeholder="Tell us about your project" rows={4} style={inputStyle} />
              <button className="btn-primary w-full" style={{ marginTop: '8px' }}>
                Send Inquiry <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
