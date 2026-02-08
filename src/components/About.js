import React from 'react';
import './About.css';

function About() {
  return (
    <>
      {/* Value Proposition Section */}
      <section id="about" className="value-prop">
        <div className="fade-in">
          <h2>What if your project could be more than just code?</h2>
        </div>
        <div className="value-prop-content fade-in">
          <p>
            <strong>Imagine</strong> working with someone who doesn't just write code—but designs thoughtful, 
            scalable solutions. I'm Abhishek, a Computer Science student at IIIT Kalyani, driven by curiosity 
            and a love for building meaningful software. Whether it's developing intelligent AI systems, designing 
            elegant user interfaces, or architecting reliable backend services, I bring clarity, creativity, and 
            commitment to every project. If you're looking for someone who cares about both how things work and 
            how they feel to users, let's build something amazing together.
          </p>
        </div>
      </section>

      {/* Crafted Section */}
      <section className="crafted">
        <div className="crafted-image slide-in-left">
          <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="screenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: '#667eea', stopOpacity: 1}} />
                <stop offset="100%" style={{stopColor: '#764ba2', stopOpacity: 1}} />
              </linearGradient>
              <linearGradient id="codeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{stopColor: '#f093fb', stopOpacity: 1}} />
                <stop offset="100%" style={{stopColor: '#f5576c', stopOpacity: 1}} />
              </linearGradient>
              <filter id="shadow">
                <feDropShadow dx="0" dy="4" stdDeviation="6" floodOpacity="0.3"/>
              </filter>
            </defs>
            
            {/* Background circles */}
            <circle cx="420" cy="100" r="60" fill="#FFD4E8" opacity="0.3"/>
            <circle cx="80" cy="380" r="50" fill="#7EC8E3" opacity="0.3"/>
            <circle cx="450" cy="400" r="40" fill="#FFC629" opacity="0.3"/>
            
            {/* Main monitor/window */}
            <g filter="url(#shadow)">
              <rect x="80" y="120" width="340" height="240" rx="12" fill="url(#screenGrad)"/>
              <rect x="90" y="145" width="320" height="200" rx="8" fill="#1a1d2e"/>
              
              {/* Code lines with syntax highlighting */}
              <rect x="105" y="160" width="60" height="8" rx="2" fill="#c792ea"/>
              <rect x="170" y="160" width="90" height="8" rx="2" fill="#82aaff"/>
              <rect x="115" y="175" width="100" height="8" rx="2" fill="#89ddff"/>
              <rect x="220" y="175" width="70" height="8" rx="2" fill="#f78c6c"/>
              <rect x="105" y="190" width="80" height="8" rx="2" fill="#c3e88d"/>
              <rect x="190" y="190" width="110" height="8" rx="2" fill="#ffcb6b"/>
              <rect x="125" y="205" width="130" height="8" rx="2" fill="#ff5370"/>
              <rect x="115" y="220" width="90" height="8" rx="2" fill="#c792ea"/>
              <rect x="210" y="220" width="80" height="8" rx="2" fill="#89ddff"/>
              <rect x="105" y="235" width="70" height="8" rx="2" fill="#82aaff"/>
              
              {/* Terminal section */}
              <rect x="105" y="260" width="280" height="70" rx="6" fill="#0d1117" opacity="0.8"/>
              <circle cx="120" cy="275" r="4" fill="#ff5f56"/>
              <circle cx="135" cy="275" r="4" fill="#ffbd2e"/>
              <circle cx="150" cy="275" r="4" fill="#27c93f"/>
              <rect x="115" y="290" width="100" height="6" rx="2" fill="#2dd4b4" opacity="0.8"/>
              <rect x="115" y="305" width="140" height="6" rx="2" fill="#58a6ff" opacity="0.8"/>
              <rect x="115" y="320" width="80" height="6" rx="2" fill="#2dd4b4" opacity="0.8"/>
            </g>
            
            {/* Floating code symbols */}
            <g opacity="0.8">
              <text x="50" y="150" fontSize="45" fontWeight="bold" fill="#2dd4b4">&lt;/&gt;</text>
              <text x="430" y="340" fontSize="40" fontWeight="bold" fill="#ff6b9d">{ }</text>
              <circle cx="60" cy="260" r="18" fill="#ffc629"/>
              <path d="M 52 260 L 60 252 L 68 260 L 60 268 Z" fill="#1a1d2e"/>
            </g>
            
            {/* Floating UI cards */}
            <g filter="url(#shadow)" opacity="0.9">
              <rect x="35" y="60" width="100" height="60" rx="8" fill="white"/>
              <rect x="45" y="75" width="80" height="8" rx="3" fill="#e0e0e0"/>
              <rect x="45" y="90" width="60" height="8" rx="3" fill="#e0e0e0"/>
              <circle cx="60" cy="105" r="8" fill="url(#codeGrad)"/>
              <circle cx="80" cy="105" r="8" fill="#2dd4b4"/>
            </g>
            
            {/* Tech stack icons - simplified */}
            <g filter="url(#shadow)">
              <circle cx="440" cy="200" r="28" fill="#61dafb"/>
              <path d="M 440 200 m -15 0 a 15 15 0 1 0 30 0 a 15 15 0 1 0 -30 0" fill="none" stroke="#282c34" strokeWidth="2"/>
              <ellipse cx="440" cy="200" rx="25" ry="10" fill="none" stroke="#282c34" strokeWidth="2"/>
              <ellipse cx="440" cy="200" rx="10" ry="25" fill="none" stroke="#282c34" strokeWidth="2"/>
            </g>
            
            {/* Decorative lines connecting elements */}
            <path d="M 140 120 Q 100 80 80 100" stroke="#7EC8E3" strokeWidth="2" fill="none" opacity="0.4" strokeDasharray="5,5"/>
            <path d="M 420 200 Q 450 250 430 300" stroke="#ff6b9d" strokeWidth="2" fill="none" opacity="0.4" strokeDasharray="5,5"/>
          </svg>
        </div>
        
        <div className="crafted-content slide-in-right">
          <h2>Passionate About Technology</h2>
          <p>
            I strongly believe in continuous learning and staying ahead in a fast-evolving tech landscape. My 
            academic journey at IIIT Kalyani has given me a solid foundation in data structures, algorithms, 
            operating systems, and software engineering. Beyond academics, I actively explore modern frameworks, 
            AI techniques, and industry best practices. I enjoy approaching problems from multiple angles and 
            refining solutions until they are both efficient and elegant. I don't just code — I build experiences 
            and systems that scale.
          </p>
          
          <div className="crafted-features">
            <div className="crafted-feature">
              <div className="crafted-feature-icon">🛠️</div>
              <h4>Modern</h4>
              <p>Tech Stack</p>
            </div>
            <div className="crafted-feature">
              <div className="crafted-feature-icon">🤝</div>
              <h4>Strong Team</h4>
              <p>Collaboration</p>
            </div>
            <div className="crafted-feature">
              <div className="crafted-feature-icon">✏️</div>
              <h4>Clean & Maintainable</h4>
              <p>Code</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
