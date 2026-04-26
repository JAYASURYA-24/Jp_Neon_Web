import React from 'react';
import { Check } from 'lucide-react';

const fonts = [
  "hello", "Cyber Neon", "Neon Pixel", "Bright Lights", 
  "Cyber Neon", "Neon Pixel", "Bright Lights", 
  "Cyber Neon", "Cyber Neon"
];

const colors = [
  "#FFFFFF", "#F3DAAE", "#FF0000", "#00FF00", 
  "#00C8FF", "#0000FF", "#FFA500", "#FFFF00", 
  "#8F00FF", "#FF00FF"
];

const NeonBuilder = ({ userText, setUserText, selectedFont, setSelectedFont, selectedColor, setSelectedColor, onOpenDialog }) => {
  return (
    <section className="neon-builder py-10">
      <div className="container">
        {/* Preview Area */}
        <div className="preview-card">
          <div 
            className="preview-text"
            style={{ fontFamily: selectedFont, color: selectedColor }}
          >
            {userText || "Text Preview.."}
          </div>
        </div>

        <div className="customizer-grid">
          {/* Left Side: Text and Font */}
          <div className="controls-left">
            <div className="input-group">
              <label>Enter Your Text</label>
              <input 
                type="text" 
                value={userText} 
                onChange={(e) => setUserText(e.target.value)}
                placeholder="Enter Your Text"
                className="neon-input"
              />
            </div>

            <div className="font-selector mt-5">
              <h3>Choose Font:</h3>
              <div className="font-grid">
                {fonts.map((font, idx) => (
                  <button 
                    key={idx}
                    className={`font-btn ${selectedFont === font ? 'active' : ''}`}
                    style={{ fontFamily: font }}
                    onClick={() => setSelectedFont(font)}
                  >
                    {font}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Colors */}
          <div className="controls-right">
            <h3>Choose Color:</h3>
            <div className="color-grid mt-2">
              {colors.map((color) => (
                <div 
                  key={color}
                  className="color-circle"
                  style={{ backgroundColor: color }}
                  onClick={() => setSelectedColor(color)}
                >
                  {selectedColor === color && <Check size={12} color="black" />}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-5">
          <button className="submit-btn" onClick={onOpenDialog}>
            Submit
          </button>
        </div>
      </div>
    </section>
  );
};

export default NeonBuilder;
