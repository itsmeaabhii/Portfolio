import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content fade-in hero-black-text">
        <h2 style={{ color: '#1A1A1A', WebkitTextFillColor: '#1A1A1A' }}>What if your project could be more than just code?</h2>
        <p style={{ color: '#333333', WebkitTextFillColor: '#333333' }}>
          Imagine working with someone who doesn't just write code—but designs thoughtful, scalable solutions. 
          I'm Abhishek, a Computer Science student at IIIT Kalyani, driven by curiosity and a love for building 
          meaningful software. Whether it's developing intelligent AI systems, designing elegant user interfaces, 
          or architecting reliable backend services, I bring clarity, creativity, and commitment to every project. 
          If you're looking for someone who cares about both how things work and how they feel to users, let's 
          build something amazing together.
        </p>
        
        <div className="features">
          <div className="feature scale-in">
            <div className="feature-icon">📱</div>
            <div className="feature-text hero-black-text">
              <h3 style={{ color: '#000' }}>AI & Machine</h3>
              <p style={{ color: '#333' }}>Learning</p>
            </div>
          </div>
          <div className="feature scale-in">
            <div className="feature-icon">💻</div>
            <div className="feature-text hero-black-text">
              <h3 style={{ color: '#000' }}>Full-Stack</h3>
              <p style={{ color: '#333' }}>Development</p>
            </div>
          </div>
          <div className="feature scale-in">
            <div className="feature-icon">🚀</div>
            <div className="feature-text hero-black-text">
              <h3 style={{ color: '#000' }}>Problem Solving</h3>
              <p style={{ color: '#333' }}>& Algorithms</p>
            </div>
          </div>
        </div>
        
        <a href="#projects" className="cta-button" style={{
          marginTop: '2rem', 
          textDecoration: 'none', 
          display: 'inline-block',
          backgroundColor: '#000',
          color: '#fff',
          padding: '10px 20px',
          borderRadius: '5px'
        }}>View My Work</a>
      </div>
      
      <div className="hero-image slide-in-right">
        <svg className="illustration" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
          {/* Background Circle */}
          <circle cx="250" cy="250" r="200" fill="#F0F4FF" opacity="0.5"/>
          
          {/* Laptop Base */}
          <rect x="120" y="280" width="260" height="15" fill="#2C3E50"/>
          <path d="M 100 280 L 400 280 L 380 295 L 120 295 Z" fill="#34495E"/>
          
          {/* Laptop Screen */}
          <rect x="130" y="140" width="240" height="140" fill="#2C3E50"/>
          <rect x="140" y="150" width="220" height="120" fill="#1E293B"/>
          
          {/* Code on Screen */}
          <rect x="150" y="160" width="80" height="8" fill="#FFC629" opacity="0.8"/>
          <rect x="150" y="175" width="120" height="8" fill="#2DD4B4" opacity="0.8"/>
          <rect x="160" y="190" width="100" height="8" fill="#7EC8E3" opacity="0.8"/>
          <rect x="150" y="205" width="90" height="8" fill="#FFD4E8" opacity="0.8"/>
          <rect x="160" y="220" width="110" height="8" fill="#FF6B6B" opacity="0.8"/>
          <rect x="150" y="235" width="70" height="8" fill="#FFC629" opacity="0.8"/>
          
          {/* Floating Code Symbols */}
          <text x="380" y="120" fontSize="40" fill="#2DD4B4" opacity="0.6">&lt;/&gt;</text>
          <text x="90" y="180" fontSize="35" fill="#FFC629" opacity="0.5">{ }</text>
          <circle cx="420" cy="220" r="15" fill="#FFD4E8" opacity="0.6"/>
          <circle cx="70" cy="280" r="12" fill="#7EC8E3" opacity="0.6"/>
          
          {/* Coffee Cup */}
          <rect x="320" y="330" width="50" height="60" fill="#FFFFFF" stroke="#2C3E50" strokeWidth="3"/>
          <rect x="320" y="340" width="50" height="40" fill="#6F4E37" opacity="0.3"/>
          <path d="M 370 350 Q 385 350 385 365 Q 385 380 370 380" fill="none" stroke="#2C3E50" strokeWidth="3"/>
          
          {/* Steam from Coffee */}
          <path d="M 335 325 Q 340 310 335 300" fill="none" stroke="#95A5A6" strokeWidth="2" opacity="0.5" strokeLinecap="round"/>
          <path d="M 350 325 Q 355 310 350 300" fill="none" stroke="#95A5A6" strokeWidth="2" opacity="0.5" strokeLinecap="round"/>
          
          {/* Plant */}
          <ellipse cx="100" cy="360" rx="30" ry="15" fill="#34495E"/>
          <path d="M 90 360 Q 85 340 90 320 Q 88 335 95 330 Q 92 345 100 340 Q 98 355 100 360" fill="#2DD4B4"/>
          <path d="M 110 360 Q 105 340 100 325 Q 108 340 115 335 Q 110 350 110 360" fill="#27AE60"/>
          
          {/* Decorative Circles */}
          <circle cx="430" cy="350" r="20" fill="#FFC629" opacity="0.3"/>
          <circle cx="60" cy="150" r="25" fill="#FF6B6B" opacity="0.3"/>
          <circle cx="450" cy="180" r="15" fill="#2DD4B4" opacity="0.4"/>
        </svg>
      </div>
    </section>
  );
}

export default Hero;
