import './App.css'
import worldquestImg from './assets/worldquest.png'
import recipeImg from './assets/recipe.png'
import battleshipImg from './assets/battleship.png'
import runbookImg from './assets/runbook.png'

function App() {
  return (
    <>
      <nav>
        <div>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <main>
        <section id="hero">
          <p className="hero-intro">Hello, my name is</p>
          <h1>Adil Khan</h1>
          <h2>Junior Software Engineer & Full-Stack Developer</h2>
          <p className="hero-text">
            I build responsive web applications and full-stack projects using
            JavaScript, React, Node.js, Express, MongoDB, and Django.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">View Projects</a>
            <a href="#contact" className="secondary-btn">Contact Me</a>
          </div>
        </section>

        <section id="about">
          <h2>About Me</h2>
          <p>
            Junior Software Engineer based in London with hands-on experience in
            full-stack web development using JavaScript, React, Node.js, Express,
            and Django.
          </p>

          <p>
            After completing a degree in Political Science and International
            Relations, I transitioned into software engineering through an
            intensive bootcamp at General Assembly, where I built deployed
            applications with REST APIs, authentication, and modern development
            workflows.
          </p>

          <p>
            I have experience working with GitHub workflows, Agile practices, and
            both individual and team-based projects. I enjoy building clean,
            user-focused applications and continuously improving my skills.
          </p>

          <p>
            Currently seeking a Junior Software Engineer or Full-Stack Developer
            role where I can contribute and grow.
          </p>
        </section>

        <section id="skills">
          <h2>Skills</h2>

          <div className="skills-container">

            <div className="skill-box">
              <h3>Frontend</h3>
              <ul>
                <li>JavaScript (ES6+)</li>
                <li>React</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Vite</li>
              </ul>
            </div>

            <div className="skill-box">
              <h3>Backend</h3>
              <ul>
                <li>Node.js</li>
                <li>Express</li>
                <li>Django</li>
              </ul>
            </div>

            <div className="skill-box">
              <h3>Database</h3>
              <ul>
                <li>MongoDB</li>
                <li>SQL</li>
              </ul>
            </div>

            <div className="skill-box">
              <h3>Tools & Deployment</h3>
              <ul>
                <li>Git & GitHub</li>
                <li>Postman</li>
                <li>Netlify</li>
                <li>Heroku</li>
              </ul>
            </div>

          </div>
        </section>

        <section id="projects">
          <h2>Projects</h2>

          <div className="projects-container">

            <div className="project-card">
              <img src={worldquestImg} alt="WorldQuest project" />
              <h3>WorldQuest</h3>
              <p>
                A full-stack travel app where users can explore countries and share
                their own travel experiences and quests.
              </p>
              <p className="tech">
                React, Node.js, Express, MongoDB
              </p>
              <div className="project-links">
                <a href="https://joyful-ganache-ae62a5.netlify.app/" target="_blank">Live Demo</a>
                <a href="https://github.com/adilk1997/WorldQuest-Full-Stack-Web-App-Front-end" target="_blank">GitHub</a>
              </div>
            </div>

            <div className="project-card">
              <img src={recipeImg} alt="Recipe Journal project" />
              <h3>Recipe Journal</h3>
              <p>
                A Django CRUD application where users can create, edit, and manage
                their personal recipes.
              </p>
              <p className="tech">
                Django, Python, SQL
              </p>
              <div className="project-links">
                <a href="https://recipe-journal.onrender.com/" target="_blank" rel="noopener noreferrer">Live Demo</a>
                <a href="https://github.com/adilk1997/recipe-journal" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>

            <div className="project-card">
              <img src={battleshipImg} alt="Battleship project" />
              <h3>Battleship Game</h3>
              <p>
                A browser-based JavaScript game where players can place ships and play
                locally on the same device with interactive game logic and UI.
              </p>
              <p className="tech">
                JavaScript, HTML, CSS
              </p>
              <div className="project-links">
                <a href="https://adilk1997.github.io/battleship/" target="_blank">Live Demo</a>
                <a href="https://github.com/adilk1997/battleship" target="_blank">GitHub</a>
              </div>
            </div>

            <div className="project-card">
              <img src={runbookImg} alt="RunBook project" />
              <h3>RunBook – Running Tracker</h3>
              <p>
                A full-stack running tracker app where users can log, edit, and track their runs with automatic pace and speed calculations.
              </p>
              <p className="tech">
                Node.js, Express, MongoDB, EJS
              </p>
              <div className="project-links">
                <a href="https://running-tracker-mm3a.onrender.com" target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
                <a href="https://github.com/adilk1997/running-tracker" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </div>
            </div>

          </div>
        </section>

        <section id="contact">
          <h2>Contact</h2>

          <p>If you'd like to get in touch, feel free to reach out:</p>

          <div className="contact-links">
            <a href="mailto:adilkhan251297@gmail.com">Email Me</a>
            <a href="https://www.linkedin.com/in/adil-khan-5874341b9" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/adilk1997" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </section>
      </main>
    </>
  )
}

export default App