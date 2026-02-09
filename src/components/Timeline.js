import React from 'react';
import './Timeline.css';

function Timeline() {
  const experiences = [
    {
      id: 1,
      type: 'education',
      title: 'B.Tech in Computer Science & Engineering',
      organization: 'Indian Institute of Information Technology, Kalyani',
      period: '2022 - 2026',
      location: 'West Bengal, India',
      description: 'Pursuing B.Tech with a focus on AI/ML, Full-Stack Development, and Algorithm Design. Active in coding clubs and technical projects.',
      icon: '🎓'
    },
    {
      id: 2,
      type: 'experience',
      title: 'Undergraduate Researcher',
      organization: 'IIIT Kalyani',
      period: 'Jan 2025 - Present',
      location: 'West Bengal, India',
      description: 'Spearheading research on Post-Quantum Cryptography (PQC), specifically optimizing Hermitian code-based McEliece systems. Developed and optimized List Decoding Algorithms in C++, improving error-correction capability and security margins. Automated performance analysis using Python and Java, generating data-driven insights on encryption throughput and memory overhead.',
      icon: '🔬'
    },
    {
      id: 3,
      type: 'achievement',
      title: 'Competitive Programming',
      organization: 'CodeChef, LeetCode, Codeforces',
      period: '2023 - Present',
      location: 'Online',
      description: 'Solved 500+ problems across various platforms. Participated in multiple coding contests and hackathons.',
      icon: '🏆'
    }
  ];

  return (
    <section id="timeline" className="timeline-section">
      <h2 className="fade-in">My Journey</h2>
      <p className="timeline-subtitle fade-in">
        Education, experience, and achievements that shaped my path as a developer
      </p>
      
      <div className="timeline">
        {experiences.map((item, index) => (
          <div 
            key={item.id} 
            className={`timeline-item fade-in ${item.type}`}
          >
            <div className="timeline-icon">{item.icon}</div>
            <div className="timeline-content">
              <span className="timeline-period">{item.period}</span>
              <h3>{item.title}</h3>
              <h4>{item.organization}</h4>
              <p className="timeline-location">📍 {item.location}</p>
              <p className="timeline-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Timeline;
