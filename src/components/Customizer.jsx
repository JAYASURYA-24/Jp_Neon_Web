import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, ShoppingCart, Maximize, Layers } from 'lucide-react';

const fonts = [
  { name: 'Classic Neon', class: 'font-neon' },
  { name: 'Script/Cursive', class: 'font-script' },
  { name: 'Modern Sans', class: 'font-modern' },
  { name: 'Retro Bold', class: 'font-retro' },
];

const colors = [
  { name: 'Electric Pink', hex: '#ff007f', shadow: '0 0 10px #ff007f, 0 0 20px #ff007f' },
  { name: 'Ocean Blue', hex: '#00e5ff', shadow: '0 0 10px #00e5ff, 0 0 20px #00e5ff' },
  { name: 'Acid Green', hex: '#39ff14', shadow: '0 0 10px #39ff14, 0 0 20px #39ff14' },
  { name: 'Lava Red', hex: '#ff0000', shadow: '0 0 10px #ff0000, 0 0 20px #ff0000' },
  { name: 'Sunshine', hex: '#fff01f', shadow: '0 0 10px #fff01f, 0 0 20px #fff01f' },
  { name: 'Amethyst', hex: '#bd00ff', shadow: '0 0 10px #bd00ff, 0 0 20px #bd00ff' },
];

const backgrounds = [
  { name: 'Dark Wall', value: 'url("https://images.unsplash.com/photo-1510074377623-8cf13fb86c08?q=80&w=2072&auto=format&fit=crop")' },
  { name: 'Brick Wall', value: 'url("https://images.unsplash.com/photo-1524334228333-0f6db392f8a1?q=80&w=2070&auto=format&fit=crop")' },
  { name: 'Plain Black', value: '#050505' },
];

const Customizer = () => {
  const [text, setText] = useState('Sparkle');
  const [selectedFont, setSelectedFont] = useState(fonts[0]);
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [size, setSize] = useState(2);
  const [bg, setBg] = useState(backgrounds[0]);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    const basePrice = 1500;
    const perChar = 300;
    const sizeMultiplier = size === 1 ? 1 : size === 2 ? 1.5 : 2.5;
    const totalPrice = (basePrice + (text.length * perChar)) * sizeMultiplier;
    setPrice(Math.round(totalPrice));
  }, [text, size]);

  const sizeLabels = ['Small (1ft)', 'Medium (2ft)', 'Large (4ft)'];

  return (
    <section id="customizer" className="section-padding" style={{ background: '#000' }}>
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Design Your <span className="gradient-text">Masterpiece</span>
          </h2>
          <p className="text-dim" style={{ fontSize: '1.0625rem' }}>
            Real-time preview. Endless possibilities.
          </p>
        </div>

        {/* Main Grid: Preview + Controls */}
        <div
          className="grid grid-2 md-grid-1 gap-12"
          style={{ alignItems: 'start' }}
        >
          {/* Live Preview Side */}
          <div>
            {/* Preview Box */}
            <div
              className="relative flex items-center justify-center overflow-hidden"
              style={{
                height: '420px',
                background: bg.value.startsWith('url') ? bg.value : bg.value,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '24px',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              {/* Dimming overlay */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'rgba(0,0,0,0.35)' }}
              />

              {/* Neon Text */}
              <motion.div
                key={`${text}-${selectedFont.name}-${selectedColor.name}`}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className={`${selectedFont.class} flicker`}
                style={{
                  color: 'white',
                  fontSize: `${size * 2}rem`,
                  textShadow: `0 0 5px #fff, 0 0 10px #fff, ${selectedColor.shadow}, 0 0 40px ${selectedColor.hex}, 0 0 80px ${selectedColor.hex}`,
                  lineHeight: 1.2,
                  zIndex: 2,
                  textAlign: 'center',
                  padding: '0 24px',
                  wordBreak: 'break-word',
                }}
              >
                {text || 'Type something...'}
              </motion.div>

              {/* Preview toolbar */}
              <div
                className="absolute flex gap-2"
                style={{ bottom: '16px', right: '16px' }}
              >
                {[Layers, Maximize].map((Icon, i) => (
                  <button
                    key={i}
                    style={{
                      background: 'rgba(255,255,255,0.08)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '50%',
                      padding: '8px',
                      color: 'white',
                      cursor: 'pointer',
                    }}
                  >
                    <Icon size={16} />
                  </button>
                ))}
              </div>
            </div>

            {/* Price Bar */}
            <div
              className="glass flex items-center justify-between"
              style={{ padding: '20px 28px', marginTop: '20px' }}
            >
              <div>
                <p className="text-sm text-dim" style={{ marginBottom: '4px' }}>Estimated Price</p>
                <h3 className="font-bold" style={{ fontSize: '1.75rem' }}>₹{price.toLocaleString()}</h3>
              </div>
              <button className="btn-primary">
                <ShoppingCart size={18} /> Add to Cart
              </button>
            </div>
          </div>

          {/* Controls Side */}
          <div className="glass" style={{ padding: '36px' }}>
            <div className="flex flex-col" style={{ gap: '32px' }}>

              {/* 1. Text Input */}
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-dim"
                  style={{ display: 'block', marginBottom: '10px' }}
                >
                  1. Enter Your Text
                </label>
                <input
                  type="text"
                  value={text}
                  onChange={(e) => setText(e.target.value.slice(0, 20))}
                  placeholder="Text (max 20 chars)"
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '12px',
                    color: 'white',
                    fontSize: '1.125rem',
                    outline: 'none',
                    fontFamily: 'Inter, sans-serif',
                  }}
                />
              </div>

              {/* 2. Font Selection */}
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-dim"
                  style={{ display: 'block', marginBottom: '12px' }}
                >
                  2. Choose Your Font
                </label>
                <div className="grid grid-2 gap-3">
                  {fonts.map((f) => (
                    <button
                      key={f.name}
                      onClick={() => setSelectedFont(f)}
                      style={{
                        padding: '14px 12px',
                        borderRadius: '12px',
                        border: selectedFont.name === f.name
                          ? '1px solid var(--neon-pink)'
                          : '1px solid rgba(255,255,255,0.08)',
                        background: selectedFont.name === f.name
                          ? 'rgba(255,0,127,0.08)'
                          : 'rgba(255,255,255,0.02)',
                        color: 'white',
                        cursor: 'pointer',
                        fontSize: '0.875rem',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      <span className={f.class}>{f.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* 3. Color Selection */}
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-dim"
                  style={{ display: 'block', marginBottom: '12px' }}
                >
                  3. Select Neon Color
                </label>
                <div className="flex flex-wrap gap-4">
                  {colors.map((c) => (
                    <button
                      key={c.name}
                      onClick={() => setSelectedColor(c)}
                      title={c.name}
                      style={{
                        width: '44px',
                        height: '44px',
                        borderRadius: '50%',
                        backgroundColor: c.hex,
                        border: selectedColor.name === c.name
                          ? '3px solid white'
                          : '3px solid transparent',
                        boxShadow: selectedColor.name === c.name
                          ? `0 0 16px ${c.hex}`
                          : 'none',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* 4. Size Selection */}
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-dim"
                  style={{ display: 'block', marginBottom: '12px' }}
                >
                  4. Choose Size
                </label>
                <div className="flex gap-3">
                  {[1, 2, 3].map((s) => (
                    <button
                      key={s}
                      onClick={() => setSize(s)}
                      className="flex-1"
                      style={{
                        padding: '14px 8px',
                        borderRadius: '12px',
                        border: size === s
                          ? '1px solid var(--neon-blue)'
                          : '1px solid rgba(255,255,255,0.08)',
                        background: size === s
                          ? 'rgba(0,229,255,0.08)'
                          : 'rgba(255,255,255,0.02)',
                        color: 'white',
                        cursor: 'pointer',
                        fontSize: '0.8125rem',
                        fontWeight: size === s ? 600 : 400,
                        transition: 'all 0.2s ease',
                      }}
                    >
                      {sizeLabels[s - 1]}
                    </button>
                  ))}
                </div>
              </div>

              {/* 5. Background */}
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-dim"
                  style={{ display: 'block', marginBottom: '12px' }}
                >
                  5. Background Environment
                </label>
                <div className="flex gap-3">
                  {backgrounds.map((b) => (
                    <button
                      key={b.name}
                      onClick={() => setBg(b)}
                      style={{
                        padding: '10px 18px',
                        borderRadius: '8px',
                        border: bg.name === b.name
                          ? '1px solid white'
                          : '1px solid rgba(255,255,255,0.08)',
                        background: bg.name === b.name
                          ? 'rgba(255,255,255,0.08)'
                          : 'transparent',
                        color: 'white',
                        cursor: 'pointer',
                        fontSize: '0.8125rem',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      {b.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Download */}
              <button
                className="flex items-center justify-center gap-2 text-dim text-sm"
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: 'var(--text-dim)',
                  paddingTop: '8px',
                }}
              >
                <Download size={16} /> Download Preview Image
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customizer;
