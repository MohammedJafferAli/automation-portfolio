import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const About = () => {
  const [titleRef, titleVisible] = useScrollAnimation();
  const [imageRef, imageVisible] = useScrollAnimation();
  const [textRef, textVisible] = useScrollAnimation();

  return (
    <section id="about" className="section about">
      <h2 
        ref={titleRef}
        className={`section-title ${titleVisible ? 'fade-in visible' : 'fade-in'}`}
      >
        About Me
      </h2>
      <div className="about-content">
        <div 
          ref={imageRef}
          className={`about-image ${imageVisible ? 'slide-in-left visible' : 'slide-in-left'}`}
        >
          <div className="profile-image">
            <img src="/MyAvator.png" alt="Mohammed Jaffer Ali" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
          </div>
        </div>
        <div 
          ref={textRef}
          className={`about-text ${textVisible ? 'slide-in-right visible' : 'slide-in-right'}`}
        >
          <h3>Transforming Quality Assurance Through Innovation</h3>
          <p>
            <strong>ISTQB Certified Senior QA Engineer</strong> with 7+ years of comprehensive experience in test automation, 
            API testing, and mobile automation. Currently serving as a key contributor at <strong>TechMahindra Limited</strong> 
            for the British Telecommunication Group, where I architect and implement cutting-edge automation solutions.
          </p>
          <p>
            <strong>Technical Excellence:</strong> Expert in Selenium WebDriver, Playwright, Appium, TestNG, and Cucumber BDD frameworks. 
            I've designed 15+ scalable automation frameworks with reusable libraries and custom utilities, 
            achieving a remarkable <strong>30% improvement in test efficiency</strong> while maintaining 
            <strong>100% on-time project delivery</strong>.
          </p>
          <p>
            <strong>AI-Powered Innovation:</strong> Pioneering the integration of AI tools like Amazon Q Developer 
            and GitHub Copilot in test automation development. My approach combines traditional QA methodologies 
            with modern AI assistance, accelerating development cycles and enhancing team productivity.
          </p>
          <p>
            <strong>Leadership & Mentorship:</strong> Passionate about knowledge sharing and team development. 
            I regularly mentor junior QA engineers, conduct technical workshops, and contribute to establishing 
            best practices that elevate overall team performance and project quality standards.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
