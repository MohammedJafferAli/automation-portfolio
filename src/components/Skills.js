import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Skills = () => {
  const [titleRef, titleVisible] = useScrollAnimation();

  const skillCategories = [
    {
      title: "Automation Framework",
      icon: "🔧",
      skills: [
        { name: "Selenium WebDriver", url: "https://selenium.dev" },
        { name: "Playwright", url: "https://playwright.dev" },
        { name: "TestNG", url: "https://testng.org" },
        { name: "Cucumber (BDD)", url: "https://cucumber.io" },
        { name: "Page Object Model", url: "https://selenium.dev/documentation/test_practices/encouraged/page_object_models/" },
        { name: "Data-driven Testing", url: "https://testng.org/doc/documentation-main.html#parameters-dataproviders" }
      ]
    },
    {
      title: "Programming Languages",
      icon: "💻",
      skills: [
        { name: "Java", url: "https://oracle.com/java" },
        { name: "JavaScript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
        { name: "SQL", url: "https://www.w3schools.com/sql/" },
        { name: "Shell", url: "https://www.gnu.org/software/bash/" }
      ]
    },
    {
      title: "API & Mobile Testing",
      icon: "📱",
      skills: [
        { name: "Postman", url: "https://postman.com" },
        { name: "Newman", url: "https://github.com/postmanlabs/newman" },
        { name: "Charles Proxy", url: "https://charlesproxy.com" },
        { name: "PerfectO", url: "https://perfecto.io" },
        { name: "Headspin", url: "https://headspin.io" },
        { name: "Android Emulator", url: "https://developer.android.com/studio/run/emulator" },
        { name: "iOS Simulator", url: "https://developer.apple.com/documentation/xcode/running-your-app-in-simulator-or-on-a-device" }
      ]
    },
    {
      title: "AI-Assisted Development",
      icon: "🤖",
      skills: [
        { name: "Amazon Q Developer", url: "https://aws.amazon.com/q/developer/" },
        { name: "GitHub Copilot", url: "https://github.com/features/copilot" },
        { name: "AI-Enhanced Test Automation", url: "https://www.selenium.dev/blog/2023/ai-and-test-automation/" }
      ]
    },
    {
      title: "CI/CD & DevOps",
      icon: "⚙️",
      skills: [
        { name: "Jenkins", url: "https://jenkins.io" },
        { name: "GitHub Actions", url: "https://github.com/features/actions" },
        { name: "Maven", url: "https://maven.apache.org" },
        { name: "Git", url: "https://git-scm.com" },
        { name: "GitHub", url: "https://github.com" },
        { name: "GitLab", url: "https://gitlab.com" }
      ]
    },
    {
      title: "Test Management",
      icon: "📊",
      skills: [
        { name: "Jira (Xray, Zephyr)", url: "https://atlassian.com/software/jira" },
        { name: "HP-ALM", url: "https://www.microfocus.com/en-us/products/alm-quality-center" },
        { name: "Confluence", url: "https://atlassian.com/software/confluence" },
        { name: "Allure Reports", url: "https://allurereport.org" },
        { name: "Extent Reports", url: "https://extentreports.com" },
        { name: "TestNG Reports", url: "https://testng.org/doc/documentation-main.html#logging" }
      ]
    },
    {
      title: "Development Tools",
      icon: "🛠️",
      skills: [
        { name: "Eclipse", url: "https://eclipse.org" },
        { name: "IntelliJ IDEA", url: "https://jetbrains.com/idea" },
        { name: "VS Code", url: "https://code.visualstudio.com" },
        { name: "Android Studio", url: "https://developer.android.com/studio" }
      ]
    },
    {
      title: "Cross-Platform",
      icon: "♿",
      skills: [
        { name: "NVDA", url: "https://nvaccess.org" },
        { name: "Voiceover", url: "https://support.apple.com/guide/voiceover/" },
        { name: "Talkback", url: "https://support.google.com/accessibility/android/answer/6283677" },
        { name: "Cross-browser Testing", url: "https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing" },
        { name: "Windows", url: "https://microsoft.com/windows" },
        { name: "macOS", url: "https://apple.com/macos" }
      ]
    }
  ];



  return (
    <section id="skills" className="section skills">
      <h2 
        ref={titleRef}
        className={`section-title ${titleVisible ? 'fade-in visible' : 'fade-in'}`}
      >
        Technical Expertise
      </h2>
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div 
            key={index} 
            className="skill-category"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <h3>
              <span className="icon">{category.icon}</span>
              {category.title}
            </h3>
            <div className="skill-list">
              {category.skills.map((skill, skillIndex) => (
                <a 
                  key={skillIndex} 
                  href={skill.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="skill-tag"
                >
                  {skill.name}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
