import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content fade-in">
        <h2>Building Tomorrow's Solutions, Today</h2>
        <p>
          Hi, I'm Abhishek, a Computer Science engineering student at IIIT Kalyani with a strong passion for 
          AI/ML, full-stack development, and problem-solving at scale. I love turning complex ideas into intelligent 
          systems and clean, user-friendly applications. From building data-driven models to crafting modern web 
          experiences, I focus on creating solutions that make a real-world impact.
        </p>
        
        <div className="features">
          <div className="feature scale-in">
            <div className="feature-icon">📱</div>
            <div className="feature-text">
              <h3>AI & Machine</h3>
              <p>Learning</p>
            </div>
          </div>
          <div className="feature scale-in">
            <div className="feature-icon">�</div>
            <div className="feature-text">
              <h3>Full-Stack</h3>
              <p>Development</p>
            </div>
          </div>
          <div className="feature scale-in">
            <div className="feature-icon">🚀</div>
            <div className="feature-text">
              <h3>Problem Solving</h3>
              <p>& Algorithms</p>
            </div>
          </div>
        </div>
        
        <a href="#projects" className="cta-button" style={{marginTop: '2rem', textDecoration: 'none', display: 'inline-block'}}>View My Work</a>
      </div>
      
      <div className="hero-image slide-in-right">
        <svg className="illustration" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
          <rect x="50" y="100" width="400" height="350" fill="#E8F5F3" rx="20"/>
          <ellipse cx="100" cy="150" rx="40" ry="60" fill="#2DD4B4"/>
          <ellipse cx="120" cy="140" rx="30" ry="50" fill="#1A9876"/>
          <rect x="150" y="200" width="100" height="80" fill="#FFD4E8" rx="10"/>
          <rect x="150" y="290" width="100" height="100" fill="#7EC8E3" rx="10"/>
          <rect x="260" y="250" width="120" height="70" fill="#FFC629" rx="10"/>
          <rect x="260" y="330" width="120" height="60" fill="#2DD4B4" rx="10"/>
          <circle cx="350" cy="120" r="30" fill="#FFD4E8"/>
          <rect x="330" y="150" width="40" height="60" fill="#7EC8E3" rx="5"/>
          <rect x="320" y="210" width="60" height="80" fill="#FFC629" rx="5"/>
          <rect x="200" y="80" width="150" height="40" fill="#FF6B6B" rx="20"/>
        </svg>
      </div>
    </section>
  );
}

export default Hero;
