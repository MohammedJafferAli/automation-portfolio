import React from 'react';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Mohammed<br />Jaffer Ali</h1>
          <p className="subtitle">ISTQB Certified Senior QA Engineer | Test Automation Expert</p>
          <p className="description">
            Passionate Senior QA with 7+ years of expertise in Web, Mobile API Testing using both Automation and Manual approaches.
            Currently delivering quality solutions at TechMahindra for British Telecommunication Group. 
            Specialized in Selenium WebDriver, Playwright, Appium, and AI-assisted automation frameworks 
            that improve efficiency by 30% while maintaining 100% on-time delivery.
          </p>
          <div className="hero-highlights">
            <div className="highlight-item">
              <span className="highlight-icon">🏆</span>
              <span className="highlight-text">ISTQB Foundation Level Certified</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-icon">🚀</span>
              <span className="highlight-text">TechMahindra - British Telecom Project</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-icon">⚡</span>
              <span className="highlight-text">AI-Assisted Automation Expert</span>
            </div>
          </div>
          <div className="cta-buttons">
            <button 
              className="btn btn-primary"
              onClick={() => scrollToSection('projects')}
            >
              View Projects
            </button>
            <button 
              className="btn btn-secondary"
              onClick={() => scrollToSection('contact')}
            >
              Get in Touch
            </button>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="hero-card">
            <div className="card-header">
              <div className="card-avatar">
                <img src="/MyAvator.png" alt="Mohammed Jaffer Ali" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
              </div>
              <div className="card-title">Mohammed Jaffer Ali</div>
              <div className="card-role">Senior QA Engineer</div>
            </div>
            
            <div className="card-stats">
              <div className="stat-item">
                <span className="stat-number">7+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">30%</span>
                <span className="stat-label">Efficiency Gain</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">3</span>
                <span className="stat-label">Frameworks Built</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">ISTQB</span>
                <span className="stat-label">Certified</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
