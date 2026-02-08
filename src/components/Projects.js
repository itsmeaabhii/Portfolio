import React, { useState } from 'react';
import './Projects.css';

function Projects() {
  const [statsError, setStatsError] = useState({ github: false, langs: false, streak: false });

  const handleImageError = (type) => {
    setStatsError(prev => ({ ...prev, [type]: true }));
  };

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
                "A full-stack Retrieval-Augmented Generation (RAG) application with FastAPI backend and Pinecone 
                vector database. Integrates Google and Cohere models for embeddings and reranking, featuring semantic 
                search, context-aware responses, and multi-document support with vanilla JavaScript frontend."
              </p>
              <div className="testimonial-author">
                <div className="author-icon author-icon-1"></div>
                <div className="author-info">
                  <h4>Cogni Chat</h4>
                  <p>AI/ML • RAG Application</p>
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
                "A modern AI-powered chat application built with Flutter, featuring real-time messaging, intelligent 
                conversation capabilities, beautiful Material Design UI, and seamless cross-platform support for both 
                Android and iOS devices with Firebase integration."
              </p>
              <div className="testimonial-author">
                <div className="author-icon author-icon-2"></div>
                <div className="author-info">
                  <h4>Flutter AI Chat App</h4>
                  <p>Mobile Development • Flutter</p>
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
                "A native Android music player application built with Kotlin, featuring local music library management, 
                playlist creation, intuitive playback controls, modern Material Design interface, and offline music 
                playback capabilities with custom audio visualization."
              </p>
              <div className="testimonial-author">
                <div className="author-icon author-icon-3"></div>
                <div className="author-info">
                  <h4>Music App</h4>
                  <p>Android Development • Kotlin</p>
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
                "A cryptographic messaging system implementing RSA and AES encryption for secure communication. 
                Features end-to-end encryption, key exchange mechanisms, and digital signatures, demonstrating 
                a strong understanding of applied cryptography and security concepts."
              </p>
              <div className="testimonial-author">
                <div className="author-icon author-icon-4"></div>
                <div className="author-info">
                  <h4>Secure Messenger</h4>
                  <p>Cryptography • Security</p>
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
            {!statsError.github ? (
              <img 
                src="https://github-readme-stats.vercel.app/api?username=itsmeaabhii&show_icons=true&theme=radical"
                alt="GitHub Stats"
                loading="lazy"
                onError={() => handleImageError('github')}
              />
            ) : (
              <div className="stats-placeholder">
                <h3>📊 GitHub Stats</h3>
                <p>Stats temporarily unavailable</p>
                <a href="https://github.com/itsmeaabhii" target="_blank" rel="noopener noreferrer" className="mini-cta">
                  View on GitHub →
                </a>
              </div>
            )}
          </div>
          
          <div className="stat-card fade-in">
            {!statsError.langs ? (
              <img 
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=itsmeaabhii&layout=compact&theme=radical"
                alt="Top Languages"
                loading="lazy"
                onError={() => handleImageError('langs')}
              />
            ) : (
              <div className="stats-placeholder">
                <h3>💻 Top Languages</h3>
                <p>Python • C++ • JavaScript</p>
                <p>TensorFlow • React • Node.js</p>
              </div>
            )}
          </div>
        </div>

        <div className="streak-card fade-in">
          {!statsError.streak ? (
            <img 
              src="https://github-readme-streak-stats.herokuapp.com/?user=itsmeaabhii&theme=radical"
              alt="GitHub Streak"
              loading="lazy"
              onError={() => handleImageError('streak')}
            />
          ) : (
            <div className="stats-placeholder">
              <h3>🔥 GitHub Streak</h3>
              <p>Active contributor since 2022</p>
              <a href="https://github.com/itsmeaabhii" target="_blank" rel="noopener noreferrer" className="mini-cta">
                View Activity →
              </a>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default Projects;
