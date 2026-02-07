import React from 'react';
import './Skills.css';

function Skills() {
  return (
    <section id="services" className="services">
      <h2 className="fade-in">What I Bring to the Table</h2>
      <p className="services-subtitle fade-in">
        From AI/ML projects to full-stack applications, I leverage modern technologies and best practices 
        to deliver quality solutions that make an impact.
      </p>
      
      <div className="services-grid">
        <div className="service-card scale-in">
          <div className="service-icon service-icon-1">🧠</div>
          <h3>AI & Machine Learning</h3>
          <p>
            Designing and implementing intelligent systems using TensorFlow, PyTorch, and scikit-learn. 
            Experienced in NLP, computer vision, RAG-based applications, and implementing ML algorithms from 
            scratch with a strong theoretical understanding.
          </p>
        </div>
        
        <div className="service-card scale-in">
          <div className="service-icon service-icon-2">💻</div>
          <h3>Full-Stack Development</h3>
          <p>
            Building modern, responsive, and scalable web applications using React, Node.js, FastAPI, and Flask. 
            Skilled in designing RESTful APIs, handling authentication, and developing clean front-end interfaces 
            with seamless backend integration.
          </p>
        </div>
        
        <div className="service-card scale-in">
          <div className="service-icon service-icon-3">🔐</div>
          <h3>Cryptography & Security</h3>
          <p>
            Hands-on experience in implementing secure systems using strong cryptographic principles. Knowledge 
            of encryption algorithms, secure communication protocols, and cybersecurity best practices with 
            practical implementations.
          </p>
        </div>
        
        <div className="service-card scale-in">
          <div className="service-icon service-icon-4">🚀</div>
          <h3>Problem Solving & DSA</h3>
          <p>
            Strong foundation in data structures and algorithms, with experience in competitive programming and 
            optimization. Adept at breaking down complex problems and designing efficient, scalable solutions.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Skills;
