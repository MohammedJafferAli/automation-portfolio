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
          <p className="subtitle">Senior Quality Assurance Engineer</p>
          <p className="description">
            ISTQB certified with 7+ years of expertise in test automation and quality assurance. 
            Specialized in designing scalable automation frameworks and delivering secure, 
            high-quality solutions.
          </p>
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
                <span className="stat-number">50+</span>
                <span className="stat-label">Projects</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">100%</span>
                <span className="stat-label">On-Time Delivery</span>
              </div>
            </div>
            

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
