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
          <h3>Delivering Quality Through Innovation</h3>
          <p>
            ISTQB certified Senior QA Engineer with 7+ years of comprehensive experience in test automation 
            and quality assurance. I specialize in designing scalable automation frameworks aligned with 
            system architecture principles, ensuring maintainability and performance across diverse projects.
          </p>
          <p>
            My expertise spans developing reusable libraries, custom utilities, and implementing 
            AI-assisted automation solutions. I've successfully improved test efficiency by 30% and 
            maintained a 100% on-time project delivery record through exceptional time management.
          </p>
          <p>
            Currently working with TechMahindra Limited for British Telecommunication Group, I leverage 
            cutting-edge technologies including Amazon Q Developer and GitHub Copilot to accelerate 
            test automation development and mentor teams for enhanced productivity.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
