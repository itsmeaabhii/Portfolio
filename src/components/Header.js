import React, { useState, useEffect } from 'react';
import './Header.css';
import { FaBars, FaTimes, FaMoon, FaSun, FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check localStorage for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.body.classList.add('dark-mode');
    }
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <nav className="nav">
      <div className="logo">
        <div className="logo-s">A</div>
        <div className="logo-text">
          <h1>Abhishek</h1>
          <p>Engineering Student & Developer</p>
        </div>
      </div>
      
      <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <li><a href="#home" onClick={closeMenu}>Home</a></li>
        <li><a href="#services" onClick={closeMenu}>Skills</a></li>
        <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
        <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
        <li className="social-icons-nav">
          <a href="https://www.linkedin.com/in/abhishek-prakash-0391402b7/" target="_blank" rel="noopener noreferrer" onClick={closeMenu} aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://github.com/itsmeaabhii" target="_blank" rel="noopener noreferrer" onClick={closeMenu} aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://leetcode.com/u/abhishekprakash963/" target="_blank" rel="noopener noreferrer" onClick={closeMenu} aria-label="LeetCode">
            <SiLeetcode />
          </a>
        </li>
      </ul>

      <div className="nav-actions">
        <button 
          className="theme-toggle" 
          onClick={toggleDarkMode}
          aria-label="Toggle dark mode"
        >
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </button>
        
        <a href="#contact" className="cta-button" style={{textDecoration: 'none'}}>Let's Connect</a>
      </div>

      <div className="menu-toggle" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
}

export default Header;
