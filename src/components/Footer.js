import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="social-links">
        <a href="https://github.com/MohammedJafferAli" className="social-link" target="_blank" rel="noopener noreferrer">
          🐙 GitHub
        </a>
        <a href="https://linkedin.com/in/mohammedjafferali" className="social-link" target="_blank" rel="noopener noreferrer">
          💼 LinkedIn
        </a>
        <a href="mailto:jaffercharliebe@gmail.com" className="social-link">
          📧 Email
        </a>
      </div>
      <p>&copy; {currentYear} Mohammed Jaffer Ali. All rights reserved.</p>
      <p>ISTQB Certified QA Engineer | Built with React & passion for quality assurance</p>
    </footer>
  );
};

export default Footer;
