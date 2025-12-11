import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [activeTab, setActiveTab] = useState('contact');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_portfolio', // Replace with your EmailJS service ID
        'template_contact', // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'jaffercharliebe@gmail.com'
        },
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      );
      
      alert('Message sent successfully! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send message. Please try again or contact me directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section contact">
      <h2 className="section-title" style={{ color: 'white' }}>Contact Me</h2>
      
      <div className="contact-tabs">
        <button 
          className={`tab-btn ${activeTab === 'contact' ? 'active' : ''}`}
          onClick={() => setActiveTab('contact')}
        >
          Contact Me
        </button>
        <button 
          className={`tab-btn ${activeTab === 'hire' ? 'active' : ''}`}
          onClick={() => setActiveTab('hire')}
        >
          Hire Me
        </button>
      </div>

      {activeTab === 'contact' ? (
        <div className="contact-content">
        <div className="contact-info">
          <h3>Let's Work Together</h3>
          <p>
            I'm always interested in discussing new opportunities, innovative projects, 
            and ways to improve software quality through automation. Whether you need 
            consultation on test strategy or want to collaborate on exciting projects, 
            I'd love to hear from you.
          </p>
          
          <div className="contact-details">
            <div className="contact-item">
              <span className="icon">📧</span>
              <a href="mailto:jaffercharliebe@gmail.com" className="contact-link">jaffercharliebe@gmail.com</a>
            </div>
            <div className="contact-item">
              <span className="icon">💼</span>
              <a href="https://linkedin.com/in/mohammedjafferali" target="_blank" rel="noopener noreferrer" className="contact-link">linkedin.com/in/mohammedjafferali</a>
            </div>
            <div className="contact-item">
              <span className="icon">🐙</span>
              <a href="https://github.com/MohammedJafferAli" target="_blank" rel="noopener noreferrer" className="contact-link">Github.com/MohammedJafferAli</a>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your full name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your.email@example.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder="What's this about?"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Tell me about your project or opportunity..."
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
        </div>
      ) : (
        <div className="hire-content">
          <div className="hire-info">
            <h3>Ready to Hire Me?</h3>
            <p>
              Explore my work and download my resume to learn more about my experience 
              in test automation and quality assurance.
            </p>
            
            <div className="hire-actions">
              <a 
                href="https://github.com/MohammedJafferAli" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary"
              >
                🐙 View GitHub Work
              </a>
              <button 
                className="btn btn-secondary"
                onClick={() => {
                  const confirmed = window.confirm("Do you want to download Mohammed JafferAli's Resume?");
                  if (confirmed) {
                    const link = document.createElement('a');
                    link.href = '/MohammedJafferAli_SQA_1.pdf';
                    link.download = 'Mohammed_JafferAli_Resume.pdf';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }
                }}
              >
                📄 Download Resume
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
