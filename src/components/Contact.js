import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <>
      {/* Pricing Section */}
      <section id="pricing" className="pricing">
        <div className="pricing-content slide-in-left">
          <h2>Open to Opportunities</h2>
          <p>
            I'm currently open to internships, freelance projects, and collaborative opportunities where I can 
            apply my skills, learn from real-world challenges, and contribute to impactful products. Whether 
            it's an AI-driven application, a full-stack system, or an innovative startup idea—I'm excited to 
            get involved and make a difference.
          </p>
          <a 
            href="mailto:abhishekprakash963@gmail.com?subject=Resume Request&body=Hi Abhishek, I'd like to request your resume."
            className="cta-button" 
            style={{textDecoration: 'none', display: 'inline-block'}}
          >
            Download Resume
          </a>
        </div>
        
        <div className="pricing-card slide-in-right">
          <div className="pricing-header">
            <h3>What I Offer</h3>
            <div className="price">👨‍💻</div>
            <p>
              A motivated and passionate developer with strong computer science fundamentals, a growth mindset, 
              and the ability to adapt quickly. I'm eager to contribute to meaningful projects while growing 
              alongside talented teams.
            </p>
            <a 
              href="mailto:abhishekprakash963@gmail.com?subject=Let's Connect&body=Hi Abhishek, I'd love to connect with you!"
              className="pricing-cta" 
              style={{textDecoration: 'none', display: 'inline-block'}}
            >
              Get In Touch
            </a>
          </div>
          <div className="pricing-features">
            <ul>
              <li>AI / ML Development</li>
              <li>Full-Stack Web Applications</li>
              <li>Algorithm Design & DSA</li>
              <li>Cryptography & Security</li>
              <li>Clean, Maintainable Code</li>
              <li>Fast Learner & Team Player</li>
              <li>Open-Source Contributions</li>
              <li>Problem Solving</li>
              <li>Modern Tech Stack</li>
              <li>Continuous Learning</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="cta-section">
        <h2 className="fade-in">
          Have a project idea, an opportunity, or just want to connect? I'd love to hear from you — drop a 
          message and let's create something impactful.
        </h2>
        <a 
          href="mailto:abhishekprakash963@gmail.com?subject=Project Inquiry&body=Hi Abhishek, I have a project/opportunity to discuss with you."
          className="cta-button fade-in" 
          style={{textDecoration: 'none', display: 'inline-block'}}
        >
          Send Message
        </a>
        
        <div className="cta-illustration fade-in">
          <svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="100" cy="200" rx="50" ry="80" fill="#FF6B6B"/>
            <rect x="150" y="150" width="300" height="140" fill="#7EC8E3" rx="10"/>
            <rect x="200" y="180" width="100" height="80" fill="#FFD4E8" rx="8"/>
            <circle cx="500" cy="150" r="60" fill="#FFC629"/>
            <ellipse cx="550" cy="250" rx="40" ry="60" fill="#2DD4B4"/>
          </svg>
        </div>
      </section>
    </>
  );
}

export default Contact;
