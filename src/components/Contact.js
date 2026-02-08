import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

function Contact() {
  const form = useRef();
  const [formStatus, setFormStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus('');

    // Replace these with your EmailJS credentials
    const serviceID = 'YOUR_SERVICE_ID';
    const templateID = 'YOUR_TEMPLATE_ID';
    const publicKey = 'YOUR_PUBLIC_KEY';

    emailjs.sendForm(serviceID, templateID, form.current, publicKey)
      .then((result) => {
        setFormStatus('success');
        setIsSubmitting(false);
        form.current.reset();
      }, (error) => {
        setFormStatus('error');
        setIsSubmitting(false);
      });
  };

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
            href="/Abhishek_Resume.pdf"
            className="cta-button" 
            style={{textDecoration: 'none', display: 'inline-block'}}
            download="Abhishek_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
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
        
        <form ref={form} onSubmit={sendEmail} className="contact-form fade-in">
          <div className="form-group">
            <input 
              type="text" 
              name="from_name" 
              placeholder="Your Name" 
              required 
              className="form-input"
            />
          </div>
          
          <div className="form-group">
            <input 
              type="email" 
              name="from_email" 
              placeholder="Your Email" 
              required 
              className="form-input"
            />
          </div>
          
          <div className="form-group">
            <textarea 
              name="message" 
              placeholder="Your Message" 
              required 
              rows="6"
              className="form-input"
            ></textarea>
          </div>
          
          <button 
            type="submit" 
            className="cta-button" 
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
          
          {formStatus === 'success' && (
            <p className="form-message success">✓ Message sent successfully! I'll get back to you soon.</p>
          )}
          {formStatus === 'error' && (
            <p className="form-message error">✗ Something went wrong. Please try again or email me directly.</p>
          )}
        </form>
        
        <div className="cta-illustration fade-in">
          <svg viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
            <defs>
              {/* Modern Gradients */}
              <linearGradient id="primaryGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: '#667eea', stopOpacity: 1}}/>
                <stop offset="100%" style={{stopColor: '#764ba2', stopOpacity: 1}}/>
              </linearGradient>
              
              <linearGradient id="accentGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: '#f093fb', stopOpacity: 1}}/>
                <stop offset="100%" style={{stopColor: '#f5576c', stopOpacity: 1}}/>
              </linearGradient>
              
              <linearGradient id="successGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: '#4facfe', stopOpacity: 1}}/>
                <stop offset="100%" style={{stopColor: '#00f2fe', stopOpacity: 1}}/>
              </linearGradient>

              <linearGradient id="warmGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: '#fa709a', stopOpacity: 1}}/>
                <stop offset="100%" style={{stopColor: '#fee140', stopOpacity: 1}}/>
              </linearGradient>
              
              {/* Glow Effect */}
              <filter id="glow">
                <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>

              {/* Soft Shadow */}
              <filter id="softShadow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceAlpha" stdDeviation="8"/>
                <feOffset dx="0" dy="4" result="offsetblur"/>
                <feComponentTransfer>
                  <feFuncA type="linear" slope="0.2"/>
                </feComponentTransfer>
                <feMerge>
                  <feMergeNode/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>

              {/* Animation Definitions */}
              <style>
                {`
                  @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-15px); }
                  }
                  
                  @keyframes floatSlow {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                  }
                  
                  @keyframes pulse {
                    0%, 100% { opacity: 0.6; transform: scale(1); }
                    50% { opacity: 0.8; transform: scale(1.05); }
                  }
                  
                  @keyframes rotate {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                  }

                  .float { animation: float 4s ease-in-out infinite; }
                  .float-slow { animation: floatSlow 5s ease-in-out infinite; }
                  .pulse { animation: pulse 3s ease-in-out infinite; }
                  .rotate-slow { 
                    animation: rotate 20s linear infinite;
                    transform-origin: center;
                  }
                `}
              </style>
            </defs>

            {/* Background Elements */}
            <circle cx="100" cy="80" r="60" fill="url(#successGrad)" opacity="0.15" className="pulse"/>
            <circle cx="520" cy="320" r="70" fill="url(#warmGrad)" opacity="0.15" className="pulse" style={{animationDelay: '1s'}}/>
            <circle cx="500" cy="90" r="45" fill="url(#accentGrad)" opacity="0.12" className="pulse" style={{animationDelay: '2s'}}/>

            {/* Decorative Rings */}
            <g opacity="0.3" className="rotate-slow">
              <circle cx="300" cy="200" r="180" fill="none" stroke="url(#primaryGrad)" strokeWidth="1" strokeDasharray="10 20"/>
              <circle cx="300" cy="200" r="220" fill="none" stroke="url(#accentGrad)" strokeWidth="1" strokeDasharray="15 25"/>
            </g>

            {/* Main Email Envelope (Center) */}
            <g transform="translate(200, 120)" filter="url(#softShadow)" className="float">
              {/* Envelope Body */}
              <rect x="0" y="20" width="200" height="140" rx="12" fill="url(#primaryGrad)" opacity="0.95"/>
              
              {/* White Paper Inside */}
              <rect x="15" y="35" width="170" height="110" rx="8" fill="white" opacity="0.98"/>
              
              {/* Text Lines on Paper */}
              <rect x="30" y="55" width="100" height="6" rx="3" fill="url(#primaryGrad)" opacity="0.4"/>
              <rect x="30" y="70" width="140" height="6" rx="3" fill="url(#primaryGrad)" opacity="0.3"/>
              <rect x="30" y="85" width="120" height="6" rx="3" fill="url(#primaryGrad)" opacity="0.3"/>
              <rect x="30" y="100" width="90" height="6" rx="3" fill="url(#primaryGrad)" opacity="0.25"/>
              <rect x="30" y="115" width="110" height="6" rx="3" fill="url(#primaryGrad)" opacity="0.25"/>
              
              {/* Envelope Flap */}
              <path d="M 0 20 L 100 85 L 200 20" fill="url(#primaryGrad)" opacity="0.9"/>
              <path d="M 0 20 L 100 85 L 200 20" fill="none" stroke="#5568d3" strokeWidth="2.5" strokeLinejoin="round"/>
              
              {/* Seal/Stamp */}
              <circle cx="160" cy="130" r="12" fill="url(#accentGrad)" opacity="0.8"/>
              <text x="160" y="135" fontSize="14" fontWeight="bold" fill="white" textAnchor="middle">✓</text>
            </g>

            {/* Flying Paper Plane (Top Right) */}
            <g transform="translate(480, 100)" filter="url(#glow)" className="float-slow">
              <path d="M 0 20 L 50 0 L 50 40 L 0 20 Z" fill="url(#accentGrad)" opacity="0.9"/>
              <path d="M 5 20 L 35 10 L 35 30 Z" fill="white" opacity="0.6"/>
              <circle cx="10" cy="20" r="3" fill="white" opacity="0.8"/>
              
              {/* Motion Lines */}
              <line x1="-25" y1="12" x2="-8" y2="16" stroke="url(#accentGrad)" strokeWidth="3" opacity="0.4" strokeLinecap="round"/>
              <line x1="-30" y1="20" x2="-8" y2="20" stroke="url(#accentGrad)" strokeWidth="3" opacity="0.5" strokeLinecap="round"/>
              <line x1="-25" y1="28" x2="-8" y2="24" stroke="url(#accentGrad)" strokeWidth="3" opacity="0.4" strokeLinecap="round"/>
            </g>

            {/* Chat Bubble (Left) */}
            <g transform="translate(40, 180)" className="float" style={{animationDelay: '0.5s'}}>
              <rect x="0" y="0" width="110" height="65" rx="28" fill="url(#successGrad)" opacity="0.85" filter="url(#softShadow)"/>
              <circle cx="35" cy="32" r="5" fill="white" opacity="0.9"/>
              <circle cx="55" cy="32" r="5" fill="white" opacity="0.9"/>
              <circle cx="75" cy="32" r="5" fill="white" opacity="0.9"/>
            </g>

            {/* Send Button (Bottom Left) */}
            <g transform="translate(60, 280)" className="float-slow" style={{animationDelay: '1.5s'}}>
              <rect x="0" y="0" width="100" height="55" rx="24" fill="url(#warmGrad)" opacity="0.85" filter="url(#softShadow)"/>
              <path d="M 25 20 L 45 27.5 L 25 35" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
              <line x1="45" y1="27.5" x2="70" y2="27.5" stroke="white" strokeWidth="4" strokeLinecap="round"/>
            </g>

            {/* Notification Badge (Top Center) */}
            <g transform="translate(400, 80)" className="pulse">
              <circle cx="0" cy="0" r="20" fill="url(#accentGrad)" filter="url(#softShadow)"/>
              <text x="0" y="7" fontSize="20" fontWeight="bold" fill="white" textAnchor="middle">3</text>
            </g>

            {/* Connection Lines (Dotted Paths) */}
            <path d="M 140 220 Q 200 190 280 190" stroke="url(#successGrad)" strokeWidth="2.5" fill="none" opacity="0.4" strokeDasharray="8 12" strokeLinecap="round"/>
            <path d="M 150 315 Q 220 290 300 280" stroke="url(#warmGrad)" strokeWidth="2.5" fill="none" opacity="0.4" strokeDasharray="8 12" strokeLinecap="round"/>
            <path d="M 400 215 Q 450 180 480 135" stroke="url(#accentGrad)" strokeWidth="2.5" fill="none" opacity="0.4" strokeDasharray="8 12" strokeLinecap="round"/>

            {/* Sparkle Elements */}
            <g opacity="0.6">
              <path d="M 520 120 L 526 128 L 534 126 L 528 134 L 534 142 L 526 140 L 520 148 L 522 140 L 514 134 L 522 132 Z" fill="url(#warmGrad)" className="pulse"/>
              <path d="M 130 110 L 135 116 L 141 115 L 137 121 L 141 127 L 135 126 L 130 132 L 131 126 L 125 121 L 131 119 Z" fill="url(#successGrad)" className="pulse" style={{animationDelay: '1s'}}/>
              <path d="M 480 300 L 484 305 L 489 304 L 486 309 L 489 314 L 484 313 L 480 318 L 481 313 L 476 309 L 481 307 Z" fill="url(#accentGrad)" className="pulse" style={{animationDelay: '2s'}}/>
            </g>

            {/* Small Decorative Circles */}
            <circle cx="90" cy="340" r="8" fill="url(#primaryGrad)" opacity="0.5" className="pulse" style={{animationDelay: '0.5s'}}/>
            <circle cx="530" cy="250" r="10" fill="url(#successGrad)" opacity="0.5" className="pulse" style={{animationDelay: '1.5s'}}/>
            <circle cx="180" cy="90" r="6" fill="url(#warmGrad)" opacity="0.5" className="pulse" style={{animationDelay: '2.5s'}}/>
          </svg>
        </div>
      </section>
    </>
  );
}

export default Contact;
