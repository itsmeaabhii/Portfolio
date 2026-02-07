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
          <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
            <rect x="50" y="80" width="300" height="240" fill="white" stroke="black" strokeWidth="3" rx="10"/>
            <rect x="50" y="80" width="300" height="30" fill="black" rx="10 10 0 0"/>
            <circle cx="70" cy="95" r="5" fill="white"/>
            <circle cx="85" cy="95" r="5" fill="white"/>
            <circle cx="100" cy="95" r="5" fill="white"/>
            <circle cx="140" cy="200" r="30" fill="#2DD4B4" stroke="black" strokeWidth="2"/>
            <circle cx="350" cy="150" r="25" fill="#FFC629" stroke="black" strokeWidth="2"/>
            <circle cx="320" cy="280" r="25" fill="#FF6B6B" stroke="black" strokeWidth="2"/>
            <circle cx="180" cy="340" r="20" fill="#7EC8E3" stroke="black" strokeWidth="2"/>
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
