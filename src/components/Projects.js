import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <>
      {/* Clients Section */}
      <section className="clients">
        <h2 className="fade-in">Technologies I Work With</h2>
        <p className="fade-in">
          I leverage modern tools and frameworks to build reliable and scalable applications:
        </p>
        
        <div className="clients-grid">
          <div className="client-logo scale-in">Python</div>
          <div className="client-logo scale-in">React</div>
          <div className="client-logo scale-in">TensorFlow</div>
          <div className="client-logo scale-in">FastAPI</div>
          <div className="client-logo scale-in">C++</div>
          <div className="client-logo scale-in">JavaScript</div>
          <div className="client-logo scale-in">LangChain</div>
          <div className="client-logo scale-in">Docker</div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2 className="fade-in">Featured Projects</h2>
        
        <div className="testimonials-grid">
          <div className="testimonial-card slide-in-left">
            <div className="testimonial-window">
              <div className="window-controls">
                <div className="window-control"></div>
                <div className="window-control"></div>
                <div className="window-control"></div>
              </div>
            </div>
            <div className="testimonial-content">
              <p>
                "A comprehensive RAG-based application that enables intelligent document question-answering using 
                LangChain and vector databases. Features semantic search, context-aware responses, and multi-document 
                support, built with a FastAPI backend and React frontend."
              </p>
              <div className="testimonial-author">
                <div className="author-icon author-icon-1"></div>
                <div className="author-info">
                  <h4>RAG Document Assistant</h4>
                  <p>AI/ML Project</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="testimonial-card slide-in-right">
            <div className="testimonial-window">
              <div className="window-controls">
                <div className="window-control"></div>
                <div className="window-control"></div>
                <div className="window-control"></div>
              </div>
            </div>
            <div className="testimonial-content">
              <p>
                "A full-stack e-commerce platform with real-time inventory management, secure payment integration, 
                and responsive UI. Built using React, Node.js, MongoDB, and Stripe API, featuring user authentication, 
                cart management, order tracking, and an admin dashboard."
              </p>
              <div className="testimonial-author">
                <div className="author-icon author-icon-2"></div>
                <div className="author-info">
                  <h4>E-Commerce Platform</h4>
                  <p>Full-Stack Development</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="testimonial-card slide-in-left">
            <div className="testimonial-window">
              <div className="window-controls">
                <div className="window-control"></div>
                <div className="window-control"></div>
                <div className="window-control"></div>
              </div>
            </div>
            <div className="testimonial-content">
              <p>
                "A cryptographic messaging system implementing RSA and AES encryption for secure communication. 
                Includes end-to-end encryption, key exchange mechanisms, and digital signatures, demonstrating 
                a strong understanding of applied security concepts."
              </p>
              <div className="testimonial-author">
                <div className="author-icon author-icon-3"></div>
                <div className="author-info">
                  <h4>Secure Messenger</h4>
                  <p>Cryptography Project</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
