import React from 'react';
import profileImage from '../images/profile-image.jpg';

function Home() {
  return (
    <div className="container">
      <div className="header">
        <img className="profile-image" src={profileImage} alt="Profile" />
        <h1 className="name">Asmer Karabeg</h1>
        <p className="title">Computer Science student</p>
      </div>

      <div className="section about-me project-item">
        <h2 className="section-title">About Me</h2>
        <p>
        As a software engineering student with a strong background in mathematics, 
        I bring a unique perspective to problem-solving in the tech industry. 
        I have experience working on team projects. 
        My strong math skills enable me to analyze complex data and develop innovative solutions. Seeking opportunities to apply my technical and analytical skills in a dynamic and collaborative work environment. 
        Looking to connect with professionals in the industry to learn and grow as a software engineer.
        </p>
      </div>

      <div className="section skills">
        <h2 className="section-title">Skills</h2>
        <ul className="skills-list">
          <li className="skill">JavaScript</li>
          <li className="skill">HTML</li>
          <li className="skill">CSS</li>
          <li className="skill">React</li>
          <li className="skill">C++</li>
          <li className="skill">Git</li>
          <li className="skill">Django</li>
          <li className="skill">OCaml</li>
          <li className="skill">Racket</li>
          <li className="skill">SQL</li>
        </ul>
      </div>

      <div className="section projects">
        <h2 className="section-title">Projects</h2>
        <div className="project-item">
          <h3 className="project-title">Project "Hero"</h3>
          <p className="project-description">
            This project is in progress with my colleagues.
          </p>
          <div className="project-links">
            <a className="project-link" href="https://github.com/asmer085/heroj_dws-GRUPA-3">GitHub(private)</a>
          </div>
        </div>
      </div>


      <div className="section education">
        <h2 className="section-title">Education</h2>
        <div className="education-item project-item">
          <h3 className="education-title">University of Sarajevo</h3>
          <p className="education-date">2020 - PRESENT</p>
          <p className="education-description">
            Faculty of Science, University of Sarajevo
            Department of Mathematics, Computer Science
          </p>
        </div>
      </div>

      <div className="section contact">
        <h2 className="section-title">Contact</h2>
        <div className="contact-item project-item">
          <span className="contact-label">Email:</span>
          <a className="contact-link" href="mailto:asmerkarabeg61@gmail.com">asmerkarabeg61@gmail.com</a>
        </div>
        <div className="contact-item project-item">
          <span className="contact-label">Phone:</span>
          <span className="contact-link">+387603226681</span>
        </div>
        <div className="contact-item project-item">
          <span className="contact-label">LinkedIn:</span>
          <a className="contact-link" href="https://www.linkedin.com/in/asmer-karabeg-6ba619269/">linkedin.com/in/asmerkarabeg</a>
        </div>
      </div>

      <div className="footer">
        &copy; 2023 Asmer Karabeg. All rights reserved.
      </div>
    </div>
  );
}

export default Home;
