import React, { useState, useEffect } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Skills = () => {
  const [titleRef, titleVisible] = useScrollAnimation();
  const [focusedCardIndex, setFocusedCardIndex] = useState(4); // Start with Automation Framework (index 4)
  const [scrollPosition, setScrollPosition] = useState(0);
  
  const getCardWidth = () => {
    if (window.innerWidth <= 480) return 220; // 200px + 20px gap
    if (window.innerWidth <= 768) return 240; // 220px + 20px gap
    if (window.innerWidth <= 1200) return 270; // 250px + 20px gap
    return 300; // 280px + 20px gap
  };
  
  const getMaxScrollPosition = () => {
    const containerWidth = window.innerWidth * 0.8;
    const cardWidth = getCardWidth();
    const visibleCards = Math.floor(containerWidth / cardWidth);
    return Math.max(0, skillCategories.length - visibleCards);
  };
  
  const updateScrollPosition = (cardIndex) => {
    // Always keep Automation Framework (index 4) centered
    const automationIndex = 4;
    const cardWidth = getCardWidth();
    const containerWidth = window.innerWidth * 0.8;
    const visibleCards = Math.floor(containerWidth / cardWidth);
    const centerOffset = Math.floor(visibleCards / 2);
    
    // Calculate position to center Automation Framework
    let newScrollPos = automationIndex - centerOffset;
    
    // Ensure we don't go negative or beyond valid range
    const maxScroll = Math.max(0, skillCategories.length - visibleCards);
    newScrollPos = Math.max(0, Math.min(newScrollPos, maxScroll));
    
    setScrollPosition(newScrollPos);
  };

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: "💻",
      skills: ["Java", "JavaScript", "SQL", "Shell"]
    },
    {
      title: "API & Mobile Testing",
      icon: "📱",
      skills: ["Postman", "Newman", "Charles Proxy", "PerfectO", "Headspin", "Android Emulator", "iOS Simulator"]
    },
    {
      title: "CI/CD & DevOps",
      icon: "⚙️",
      skills: ["Jenkins", "GitHub Actions", "Maven", "Git", "GitHub", "GitLab"]
    },
    {
      title: "Test Management",
      icon: "📊",
      skills: ["Jira (Xray, Zephyr)", "HP-ALM", "Confluence", "Allure Reports", "Extent Reports", "TestNG Reports"]
    },
    {
      title: "Automation Framework",
      icon: "🔧",
      skills: ["Selenium WebDriver", "Playwright", "TestNG", "Cucumber (BDD)", "Page Object Model", "Data-driven Testing"]
    },
    {
      title: "AI-Assisted Development",
      icon: "🤖",
      skills: ["Amazon Q Developer", "GitHub Copilot", "AI-Enhanced Test Automation"]
    },
    {
      title: "Development Tools",
      icon: "🛠️",
      skills: ["Eclipse", "IntelliJ IDEA", "VS Code", "Android Studio"]
    },
    {
      title: "Cross-Platform",
      icon: "♿",
      skills: ["NVDA", "Voiceover", "Talkback", "Cross-browser Testing", "Windows", "macOS"]
    }
  ];

  useEffect(() => {
    updateScrollPosition(4); // Center Automation card on load
  }, []);
  
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft') {
        const newIndex = focusedCardIndex > 0 ? focusedCardIndex - 1 : skillCategories.length - 1;
        setFocusedCardIndex(newIndex);
        updateScrollPosition(newIndex);
      } else if (event.key === 'ArrowRight') {
        const newIndex = focusedCardIndex < skillCategories.length - 1 ? focusedCardIndex + 1 : 0;
        setFocusedCardIndex(newIndex);
        updateScrollPosition(newIndex);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [skillCategories.length]);

  return (
    <section id="skills" className="section skills">
      <h2 
        ref={titleRef}
        className={`section-title ${titleVisible ? 'fade-in visible' : 'fade-in'}`}
      >
        Technical Expertise
      </h2>
      <div className="skills-container">
        <div 
          className="skills-grid"
          style={{ transform: `translateX(${-scrollPosition * getCardWidth()}px)` }}
        >
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className={`skill-category ${index === 4 ? 'highlighted' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => {
                if (index !== focusedCardIndex) {
                  setFocusedCardIndex(index);
                  updateScrollPosition(index);
                }
              }}
            >
            <h3>
              <span className="icon">{category.icon}</span>
              {category.title}
            </h3>
            <div className="skill-list">
              {category.skills.map((skill, skillIndex) => (
                <span key={skillIndex} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
            </div>
          ))}
        </div>
      </div>
      <div className="skills-navigation">
        <button 
          className="nav-arrow left" 
          onClick={() => {
            const newIndex = focusedCardIndex > 0 ? focusedCardIndex - 1 : skillCategories.length - 1;
            setFocusedCardIndex(newIndex);
            updateScrollPosition(newIndex);
          }}
          aria-label="Previous skill category"
        >
          ‹
        </button>
        <button 
          className="nav-arrow right" 
          onClick={() => {
            const newIndex = focusedCardIndex < skillCategories.length - 1 ? focusedCardIndex + 1 : 0;
            setFocusedCardIndex(newIndex);
            updateScrollPosition(newIndex);
          }}
          aria-label="Next skill category"
        >
          ›
        </button>
      </div>
    </section>
  );
};

export default Skills;
