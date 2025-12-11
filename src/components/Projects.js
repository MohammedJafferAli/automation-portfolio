import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Projects = () => {
  const [titleRef, titleVisible] = useScrollAnimation();
  const [projectsRef, projectsVisible] = useScrollAnimation();

  const projects = [
    {
      title: "Playwright Modern Testing Suite",
      description: "Advanced cross-browser automation framework with parallel execution capabilities. Features AI-assisted test generation and comprehensive test coverage for modern web applications.",
      image: "/playwright-logo.png",
      technologies: ["Playwright", "JavaScript", "TestNG", "GitHub Actions", "Allure Reports"],
      github: "https://github.com/MohammedJafferAli?tab=repositories",
      demo: "#"
    },
    {
      title: "Mobile Testing Framework",
      description: "Cross-platform mobile automation solution supporting Android and iOS testing through PerfectO cloud platform, emulators, and real device testing with comprehensive reporting.",
      image: "/appium-logo.png",
      technologies: ["PerfectO", "Headspin", "Android Studio", "Selenium", "TestNG"],
      github: "https://github.com/MohammedJafferAli?tab=repositories",
      demo: "#"
    },
    {
      title: "Selenium WebDriver Framework",
      description: "Scalable automation framework with Page Object Model design pattern, achieving 30% test case automation and 50% reduction in regression testing time. Includes comprehensive reporting and CI/CD integration.",
      image: "https://selenium.dev/images/selenium_logo_square_green.png",
      technologies: ["Selenium", "Java", "TestNG", "Maven", "Jenkins", "Extent Reports"],
      github: "https://github.com/MohammedJafferAli?tab=repositories",
      demo: "#"
    },
    {
      title: "API Testing Automation",
      description: "Comprehensive REST API testing framework with Postman collections, Newman CLI integration, and Charles Proxy for network traffic analysis. Supports multiple environments and data validation.",
      image: "https://cdn.worldvectorlogo.com/logos/postman.svg",
      technologies: ["Postman", "Newman", "Charles Proxy", "JavaScript", "Jenkins"],
      github: "https://github.com/MohammedJafferAli?tab=repositories",
      demo: "#"
    },
    {
      title: "BDD Cucumber Framework",
      description: "Behavior-driven development framework with Cucumber integration, enabling business-readable test scenarios and comprehensive test documentation for stakeholder collaboration.",
      image: "https://avatars.githubusercontent.com/u/320565?s=200&v=4",
      technologies: ["Cucumber", "Java", "Selenium", "TestNG", "Gherkin", "Maven"],
      github: "https://github.com/MohammedJafferAli?tab=repositories",
      demo: "#"
    },
    {
      title: "AI-Enhanced Test Automation",
      description: "Cutting-edge automation framework leveraging Amazon Q Developer and GitHub Copilot for accelerated test script creation and intelligent test case generation with improved efficiency.",
      image: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      technologies: ["Amazon Q Developer", "GitHub Copilot", "Java", "Selenium", "AI/ML"],
      github: "https://github.com/MohammedJafferAli?tab=repositories",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="section projects">
      <h2 
        ref={titleRef}
        className={`section-title ${titleVisible ? 'fade-in visible' : 'fade-in'}`}
      >
        Featured Projects
      </h2>
      <div ref={projectsRef} className="projects-grid">
        {projects.map((project, index) => (
          <article key={index} className={`project-card ${projectsVisible ? 'slide-in-vertical' : ''}`} style={{animationDelay: `${index * 0.15}s`}}>
            <figure className="project-image" aria-hidden="true">
              <img src={project.image} alt={project.title} />
            </figure>
            <div className="project-content">
              <div className="title-row">
                <h3>{project.title}</h3>
                <span className="pill">{project.technologies[0]}</span>
              </div>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.technologies.slice(1).map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.github} className="project-link">
                  📂 GitHub
                </a>
                <a href={project.demo} className="project-link">
                  🚀 Live Demo
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
