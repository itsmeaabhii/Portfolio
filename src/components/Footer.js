import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="fade-in">
      <div className="footer-content">
        <div className="footer-brand">
          <div className="footer-logo">
            <div className="footer-logo-s">A</div>
            <div>
              <h3>Abhishek</h3>
              <p>Engineering Student & Developer</p>
            </div>
          </div>
          
          <div className="footer-contact">
            <p><strong>Contact Me</strong></p>
            <p>IIIT Kalyani, West Bengal, India</p>
            <p><strong>Email:</strong><br/><a href="mailto:abhishekprakash963@gmail.com">abhishekprakash963@gmail.com</a></p>
            <p><strong>Phone:</strong><br/>+91 8853318817</p>
            <p><strong>GitHub:</strong><br/><a href="https://github.com/itsmeaabhii" target="_blank" rel="noopener noreferrer">github.com/itsmeaabhii</a></p>
          </div>
        </div>
        
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Skills</a></li>
            <li><a href="https://github.com/itsmeaabhii" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href="https://linkedin.com/in/itsmeaabhii" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="https://twitter.com/_abhishek_2203" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Let's Connect</h4>
          <p>Interested in collaborating or just want to say hi? Feel free to reach out!</p>
          <div className="newsletter">
            <input type="email" placeholder="Your Email" required />
            <label>
              <input type="checkbox" required />
              Subscribe for project updates
            </label>
            <button onClick={(e) => {
              e.preventDefault();
              const email = e.target.parentElement.querySelector('input[type="email"]').value;
              if (email) {
                window.location.href = `mailto:abhishekprakash963@gmail.com?subject=Subscribe&body=Hi Abhishek, I'd like to stay connected. My email: ${email}`;
              } else {
                alert('Please enter your email address');
              }
            }}>Connect</button>
          </div>
        </div>
        
        <div className="footer-section">
          <div className="social-links">
            <a href="https://github.com/itsmeaabhii" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://linkedin.com/in/itsmeaabhii" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://instagram.com/aabhish.ekh" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://twitter.com/_abhishek_2203" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="mailto:abhishekprakash963@gmail.com">Email</a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="footer-legal">
          <a href="mailto:abhishekprakash963@gmail.com">Contact</a>
          <a href="https://github.com/itsmeaabhii" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/itsmeaabhii" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
        <p className="copyright">© 2026 by Abhishek. Built with React. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
