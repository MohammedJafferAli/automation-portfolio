import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    // Always default to dark theme for new visitors
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'dark' : true;
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDarkTheme ? 'dark' : 'light');
    localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
  }, [isDarkTheme]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <>
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <nav className="nav-container">
          <div className="logo">Mohammed JafferAli SQA</div>
          
          <ul className={`nav-menu ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
            <li><a href="#home" className="nav-link" onClick={() => scrollToSection('home')}>Home</a></li>
            <li><a href="#about" className="nav-link" onClick={() => scrollToSection('about')}>About</a></li>
            <li><a href="#skills" className="nav-link" onClick={() => scrollToSection('skills')}>Skills</a></li>
            <li><a href="#projects" className="nav-link" onClick={() => scrollToSection('projects')}>Projects</a></li>
            <li><a href="#contact" className="nav-link" onClick={() => scrollToSection('contact')}>Contact</a></li>
          </ul>

          <div className="nav-actions">
            <button 
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {isDarkTheme ? '☀️' : '🌙'}
            </button>
            
            <button 
              className="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              ☰
            </button>
          </div>
        </nav>
      </header>
      
      <div className="flash-news">
        <div className="flash-news-content">
          <span className="flash-icon">🔥</span>
          <span className="flash-text">
            Currently Serving Notice Period • Available for New Opportunities • 
            ISTQB Certified Senior QA Engineer • 7+ Years Experience • 
            Immediate Joiner After Notice Period • 
          </span>
        </div>
      </div>
    </>
  );
};

export default Header;
