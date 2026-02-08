import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <>
      {/* Clients Section */}
      <section className="clients">
        <h2 className="fade-in">Technologies I Work With</h2>
        <p className="fade-in">
          I use a modern, production-ready tech stack to design, build, and deploy scalable applications across AI/ML and full-stack development.
        </p>
        
        <div className="tech-categories">
          <div className="tech-category fade-in">
            <h3>Programming Languages</h3>
            <div className="tech-items">
              <span className="tech-tag">Python</span>
              <span className="tech-tag">C++</span>
              <span className="tech-tag">JavaScript</span>
            </div>
          </div>

          <div className="tech-category fade-in">
            <h3>Frontend</h3>
            <div className="tech-items">
              <span className="tech-tag">React</span>
              <span className="tech-tag">HTML5</span>
              <span className="tech-tag">CSS3</span>
              <span className="tech-tag">Tailwind CSS</span>
            </div>
          </div>

          <div className="tech-category fade-in">
            <h3>Backend & APIs</h3>
            <div className="tech-items">
              <span className="tech-tag">FastAPI</span>
              <span className="tech-tag">Flask</span>
              <span className="tech-tag">Node.js</span>
              <span className="tech-tag">REST APIs</span>
            </div>
          </div>

          <div className="tech-category fade-in">
            <h3>AI / Machine Learning</h3>
            <div className="tech-items">
              <span className="tech-tag">TensorFlow</span>
              <span className="tech-tag">PyTorch</span>
              <span className="tech-tag">scikit-learn</span>
              <span className="tech-tag">LangChain</span>
            </div>
            <p className="tech-note">(NLP, Computer Vision, RAG Applications)</p>
          </div>

          <div className="tech-category fade-in">
            <h3>Databases & Vector Stores</h3>
            <div className="tech-items">
              <span className="tech-tag">MongoDB</span>
              <span className="tech-tag">PostgreSQL</span>
              <span className="tech-tag">FAISS</span>
              <span className="tech-tag">ChromaDB</span>
            </div>
          </div>

          <div className="tech-category fade-in">
            <h3>DevOps & Tools</h3>
            <div className="tech-items">
              <span className="tech-tag">Docker</span>
              <span className="tech-tag">Git</span>
              <span className="tech-tag">GitHub</span>
              <span className="tech-tag">Linux</span>
              <span className="tech-tag">VS Code</span>
            </div>
          </div>

          <div className="tech-category fade-in">
            <h3>Deployment & Cloud <span className="exposure-badge">(Basic Exposure)</span></h3>
            <div className="tech-items">
              <span className="tech-tag">AWS</span>
              <span className="tech-tag">Render</span>
              <span className="tech-tag">Vercel</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="projects" className="testimonials">
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

      {/* GitHub Stats Section */}
      <section className="github-stats">
        <h2 className="fade-in">GitHub Activity</h2>
        <p className="fade-in">A snapshot of my coding journey and contributions</p>
        
        <div className="stats-grid">
          <div className="stat-card fade-in">
            <img 
              src="https://github-readme-stats-git-masterrstaa-rickstaa.vercel.app/api?username=itsmeaabhii&show_icons=true&theme=radical&hide_border=true&bg_color=1A1A1A&title_color=FFC629&text_color=FFFFFF&icon_color=2DD4B4&count_private=true&include_all_commits=true"
              alt="GitHub Stats"
              loading="lazy"
              onError={(e) => {e.target.src = 'https://github-readme-stats.vercel.app/api?username=itsmeaabhii&show_icons=true&theme=radical&hide_border=true&bg_color=1A1A1A&title_color=FFC629&text_color=FFFFFF&icon_color=2DD4B4&count_private=true&include_all_commits=true'}}
            />
          </div>
          
          <div className="stat-card fade-in">
            <img 
              src="https://github-readme-stats-git-masterrstaa-rickstaa.vercel.app/api/top-langs/?username=itsmeaabhii&layout=compact&theme=radical&hide_border=true&bg_color=1A1A1A&title_color=FFC629&text_color=FFFFFF&langs_count=8"
              alt="Top Languages"
              loading="lazy"
              onError={(e) => {e.target.src = 'https://github-readme-stats.vercel.app/api/top-langs/?username=itsmeaabhii&layout=compact&theme=radical&hide_border=true&bg_color=1A1A1A&title_color=FFC629&text_color=FFFFFF&langs_count=8'}}
            />
          </div>
        </div>

        <div className="streak-card fade-in">
          <img 
            src="https://streak-stats.demolab.com/?user=itsmeaabhii&theme=radical&hide_border=true&background=1A1A1A&ring=FFC629&fire=FF6B6B&currStreakLabel=FFFFFF"
            alt="GitHub Streak"
            loading="lazy"
            onError={(e) => {e.target.src = 'https://github-readme-streak-stats.herokuapp.com/?user=itsmeaabhii&theme=radical&hide_border=true&background=1A1A1A&ring=FFC629&fire=FF6B6B&currStreakLabel=FFFFFF'}}
          />
        </div>
      </section>
    </>
  );
}

export default Projects;
