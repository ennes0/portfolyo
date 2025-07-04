import './App.css';
import { useEffect, useState } from 'react';
import emailjs from 'emailjs-com';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import AppPrivacy from './pages/AppPrivacy';
import DataUsage from './pages/DataUsage';

// Navbar'ı ayrı bir component olarak çıkaralım
function Navbar({ isScrolled }) {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = document.querySelector('.navbar').offsetHeight;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight - 20;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="nav-links">
        <Link to="/" className="nav-link">
          <span className="nav-icon">
            <i className="fas fa-home"></i>
          </span>
          <span className="nav-text">Home</span>
        </Link>
        {isHomePage && (
          <>
            <a 
              href="#about" 
              className="nav-link" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('about');
              }}
            >
              <span className="nav-icon"><i className="fas fa-user"></i></span>
              <span className="nav-text">About</span>
            </a>
            <a 
              href="#projects" 
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('projects');
              }}
            >
              <span className="nav-icon"><i className="fas fa-code"></i></span>
              <span className="nav-text">Projects</span>
            </a>
            <a 
              href="#contact" 
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
            >
              <span className="nav-icon"><i className="fas fa-envelope"></i></span>
              <span className="nav-text">Contact</span>
            </a>
          </>
        )}
      </div>
    </nav>
  );
}

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar isScrolled={isScrolled} />
        <Routes>
          <Route path="/" element={
            <MainContent 
              setActiveSection={setActiveSection} 
              activeSection={activeSection}
              isScrolled={isScrolled}
              setIsScrolled={setIsScrolled}
            />
          } />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms" element={<Terms />} />
          <Route path="app-privacy" element={<AppPrivacy />} />
          <Route path="data-usage" element={<DataUsage />} />
        </Routes>
      </div>
    </Router>
  );
}

// Update MainContent props to include isScrolled and setIsScrolled
function MainContent({ activeSection, setActiveSection, isScrolled, setIsScrolled }) {
  const [formData, setFormData] = useState({
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({
    sending: false,
    error: null,
    success: false
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          // Ana element için
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
          // Çocuk elementler için
          if (entry.target.classList.contains('stagger-children') && entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '-50px'
      }
    );

    // Scroll reveal class'ını ekle ve observe et
    document.querySelectorAll('.scroll-reveal, .stagger-children').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          setActiveSection(entry.target.id);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('section').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, [setActiveSection]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [setActiveSection, setIsScrolled]);

  // Initialize EmailJS
  useEffect(() => {
    try {
      emailjs.init({
        publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
        limitRate: true
      });
      console.log('EmailJS initialized successfully');
    } catch (error) {
      console.error('EmailJS initialization error:', error);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ sending: true, error: null, success: false });

    try {
      await emailjs.send(
        "service_s932tkg",  // Service ID doğrudan string olarak
        "template_pk2d95f", // Template ID doğrudan string olarak
        {
          from_name: formData.email,
          to_name: 'Mehmet Enes',
          message: formData.message,
          reply_to: formData.email,
        },
        "GSO-RY6cDPpzxYXbZ"  // Public key doğrudan string olarak
      );

      console.log('Email sent successfully');
      setStatus({ sending: false, error: null, success: true });
      setFormData({ email: '', message: '' });
      
    } catch (error) {
      console.error('Email error:', error);
      setStatus({
        sending: false,
        error: 'Failed to send message. Please try again later.',
        success: false
      });
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="App">
      <section id="home" className="hero-section">
        <div className="hero-background">
          <div className="animated-bg"></div>
          <div className="particles">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="particle"></div>
            ))}
          </div>
        </div>
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-greeting">Hello, I'm Mehmet Enes</div>
            <h1 className="glitch" data-text="Welcome to My Portfolio">
              Welcome to My Portfolio
            </h1>
            <div className="typing-container">
              <p className="typing-text">I'm a</p>
              <p className="profession">
                <span>Full-Stack Developer</span>
                <span>Front-End Developer</span>
                <span>Back-End Developer</span>
              </p>
            </div>
            <p className="hero-description">
              Creating modern web applications with cutting-edge technologies
            </p>
            <div className="hero-buttons">
              <a 
                href="#projects" 
                className="hero-btn primary"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById('projects');
                  if (element) {
                    const navbarHeight = document.querySelector('.navbar').offsetHeight;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - navbarHeight - 20;
                    
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: "smooth"
                    });
                  }
                }}
              >
                View My Work
              </a>
              <a 
                href="#contact" 
                className="hero-btn secondary"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById('contact');
                  if (element) {
                    const navbarHeight = document.querySelector('.navbar').offsetHeight;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - navbarHeight - 20;
                    
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: "smooth"
                    });
                  }
                }}
              >
                Contact Me
              </a>
            </div>
            <div className="hero-social">
              <a href="https://github.com/ennes0" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/enes-oy/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
          <div className="hero-shape">
            <div className="shape-wrapper">
              <div className="shape-circle"></div>
              <div className="shape-dots"></div>
            </div>
          </div>
          <div 
            className="scroll-indicator"
            onClick={() => {
              const element = document.getElementById('about');
              if (element) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - navbarHeight - 20;
                
                window.scrollTo({
                  top: offsetPosition,
                  behavior: "smooth"
                });
              }
            }}
            style={{ cursor: 'pointer' }}
          >
            <div className="mouse">
              <div className="wheel"></div>
            </div>
            <div className="arrow">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </section>

      {/* About section'a scroll reveal ekle */}
      <section id="about" className="about-section">
        <div className="about-container">
          <div className="about-left scroll-reveal">
            <div className="about-image-wrapper simple-frame">
              <img src={`${process.env.PUBLIC_URL}/enes.jpeg`} alt="Profile" className="profile-img" />
              <span className="experience-tag">2+ Years Experience</span>
            </div>
          </div>
          <div className="about-right">
            <h2 className="scroll-reveal">About Me</h2>
            <p className="about-intro scroll-reveal">Full-Stack Developer passionate about creating end-to-end web solutions with expertise in both front-end and back-end technologies</p>
            <div className="about-details stagger-children">
              <div className="about-item">
                <i className="fas fa-code"></i>
                <div className="about-item-content">
                  <h3>Full-Stack Development</h3>
                  <p>Specialized in React, Node.js, and modern web technologies for complete solutions</p>
                </div>
              </div>
              <div className="about-item">
                <i className="fas fa-database"></i>
                <div className="about-item-content">
                  <h3>Database Management</h3>
                  <p>Working with SQL and NoSQL databases for efficient data storage and retrieval</p>
                </div>
              </div>
              <div className="about-item">
                <i className="fas fa-mobile-alt"></i>
                <div className="about-item-content">
                  <h3>Responsive Web Apps</h3>
                  <p>Building scalable applications that work seamlessly across all devices</p>
                </div>
              </div>
            </div>
            <div className="skills-container">
              <h3 className="scroll-reveal">Technical Skills</h3>
              <div className="skills-grid stagger-children">
                {[
                  'React',
                  'React Native',
                  'JavaScript',
                  'TypeScript',
                  'Node.js',
                  'Express.js',
                  'MongoDB',
                  'PostgreSQL',
                  'MySQL',
                  'Redis',
                  'REST API',
                  'GraphQL',
                  'Docker',
                  'AWS',
                  'Python',
                  'Django',
                  'HTML/CSS',
                  'Git',
                  'CI/CD'
                ].map(skill => (
                  <div key={skill} className="skill-item">
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects section'a scroll reveal ekle */}
      <section id="projects" className="projects-section">
        <div className="projects-container">
          <h2 className="scroll-reveal">My Projects</h2>
          <p className="projects-intro scroll-reveal">Featured Project</p>
          <div className="projects-grid scroll-reveal">
            {[
              {
                title: "Grade Wizard",
                description: "A sophisticated iOS application that helps students track and analyze their academic performance. Built with React Native for the frontend and Python for the backend ML algorithms, this app features grade prediction, performance analytics, and personalized study recommendations.",
                image: `${process.env.PUBLIC_URL}/Thee.png`,
                tech: ["React Native", "Python", "Machine Learning", "iOS", "Node.js", "MongoDB"],
                liveLink: "https://apps.apple.com/tr/app/grade-wizard/id6741734068?l=tr"
              },
              {
                title: "MediMates",
                description: "A medication reminder and social health app that helps users track their medications and connect with friends for support. Features include personalized medication schedules, social interactions, chat functionality, and health reminders.",
                image: `${process.env.PUBLIC_URL}/MediMates.png`,
                tech: ["React Native", "Express.js", "MySQL", "Socket.io", "Redux", "Node.js", "Firebase"],
                liveLink: "#",
                comingSoon: true
              }
            ].map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <div className="project-links">
                      {project.comingSoon ? (
                        <div className="coming-soon-badge">Coming Soon</div>
                      ) : (
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                          <i className="fas fa-external-link-alt"></i> {project.title === "MediRemind" ? "View Project" : "View App"}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <div className="project-content">
                  <h3>{project.title} {project.comingSoon && <span className="coming-soon-tag">Coming Soon</span>}</h3>
                  <p>{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact section'a scroll reveal ekle */}
      <section id="contact" className="contact-section">
        <div className="contact-container">
          <div className="contact-info stagger-children">
            <h2>Contact Me</h2>
            <p>Let's work together! Feel free to reach out.</p>
            <div className="contact-details">
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <span>mehmetenesoy@gmail.com</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <span>+90 (536) 721-7637</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>Istanbul, Turkey</span>
              </div>
            </div>
          </div>
          <div className="contact-form-container scroll-reveal">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
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
                  rows="5"
                ></textarea>
              </div>
              <button 
                className="submit-btn" 
                type="submit"
                disabled={status.sending}
              >
                {status.sending ? (
                  <><i className="fas fa-spinner fa-spin"></i> Sending...</>
                ) : (
                  <>Send Message <i className="fas fa-paper-plane"></i></>
                )}
              </button>
              {status.success && (
                <div className="success-message">
                  <i className="fas fa-check-circle"></i> Message sent successfully!
                </div>
              )}
              {status.error && (
                <div className="error-message">
                  <i className="fas fa-exclamation-circle"></i> {status.error}
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Grade Wizard</h3>
              <p>Your AI-Powered Academic Assistant</p>
              <div className="app-badges">
                <a href="https://apps.apple.com/tr/app/grade-wizard/id6741734068?l=tr" className="app-store-badge">
                  <img src={`${process.env.PUBLIC_URL}/appstr.png`} alt="Download on App Store" />
                </a>
              </div>
            </div>
            <div className="footer-section">
              <h3>Legal</h3>
              <div className="footer-links">
                <Link to="privacy-policy">Privacy Policy</Link>
                <Link to="terms">Terms of Service</Link>
                <Link to="app-privacy">App Privacy</Link>
                <Link to="data-usage">Data Usage</Link>
              </div>
            </div>
            <div className="footer-section">
              <h3>Contact</h3>
              <p>Email: mehmetenesoy@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Mehmet Enes Oy. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
