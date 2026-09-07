import React from 'react';
import { projects } from './data/projectsData';
import { Mail, ExternalLink, Code2, Terminal, Code } from 'lucide-react';
import './App.css';

function App() {
  return (
    <div className="portfolio-container">
 
      <header className="navbar">
        <div className="logo">&lt;FatimaZaheer /&gt;</div>
        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

    
      <section id="about" className="hero">
        <h1>Fatima Zaheer</h1>
        <h2>Full-Stack MERN Developer</h2>
        <p>
          Passionate software developer specializing in building clean, high-performance web applications using React.js, Node.js, Express, and MongoDB. Experienced in monorepo architectures and modern UI design.
        </p>
        <div className="btn-group">
          <a href="https://github.com/FatimaZaheer25" target="_blank" rel="noreferrer" className="btn btn-primary">
            <Code size={18} style={{ marginRight: '8px', verticalAlign: 'middle' }} />GitHub Profile
          </a>
          <a href="#contact" className="btn btn-secondary">Get In Touch</a>
        </div>
      </section>

=
      <section id="skills">
        <h3 className="section-title">Technical Skills</h3>
        <div className="projects-grid">
          <div className="project-card">
            <h4><Code2 color="#38bdf8" /> Frontend Development</h4>
            <p>React.js, JavaScript (ES6+), React Router, HTML5, CSS3, Flexbox & CSS Grid, Modern Responsive Design</p>
          </div>
          <div className="project-card">
            <h4><Terminal color="#38bdf8" /> Backend & Database</h4>
            <p>Node.js, Express.js, RESTful APIs, JWT Authentication, Bcrypt, MongoDB Atlas, Mongoose, MySQL</p>
          </div>
        </div>
      </section>


      <section id="projects">
        <h3 className="section-title">Featured Projects</h3>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div>
                <h3>{project.title}</h3>
                <p style={{ color: '#94a3b8', fontSize: '0.95rem' }}>{project.description}</p>
                <div style={{ margin: '1rem 0' }}>
                  {project.techStack.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
              <a href={project.githubUrl} target="_blank" rel="noreferrer" className="btn btn-secondary" style={{ textAlign: 'center' }}>
                View Repository <ExternalLink size={14} style={{ marginLeft: '4px' }} />
              </a>
            </div>
          ))}
        </div>
      </section>

 
      <section id="contact">
        <h3 className="section-title">Get In Touch</h3>
        <div className="project-card" style={{ textAlign: 'center', padding: '3rem 1.5rem' }}>
          <h3>Let's Build Something Together!</h3>
          <p style={{ color: '#94a3b8' }}>I am currently open to Junior Web Developer roles and Paid Full-Stack Internships.</p>
          <div style={{ marginTop: '1.5rem' }}>
            <a href="mailto:fatimazahra8726@gmail.com" className="btn btn-primary">
              <Mail size={18} style={{ marginRight: '8px', verticalAlign: 'middle' }} /> Send Email
            </a>
          </div>
        </div>
      </section>

    
      <footer className="footer">
        <p>© 2026 Fatima Zaheer. Built with React & Vite.</p>
      </footer>
    </div>
  );
}

export default App;