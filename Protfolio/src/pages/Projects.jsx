import "./Project.css";

function Projects() {
  return (
    <div className="projects-container">
      <h1 className="title">My Projects</h1>

      <div className="projects-wrapper">

        <div className="project-card">
          <img src="/p1.jpg" alt="project" />
          <h2>Portfolio Website</h2>
          <p>My personal portfolio website using React JS.</p>
          <a href="#" className="btn">View Demo</a>
        </div>

        <div className="project-card">
          <img src="/p2.jpg" alt="project" />
          <h2>Calculator UI</h2>
          <p>Simple stylish calculator using HTML CSS JS.</p>
          <a href="#" className="btn">View Demo</a>
        </div>
      </div>

      <div className="projects-wrapper">
        <div className="project-card">
          <img src="/p2.png" alt="project" />
          <h2>Login Page</h2>
          <p>Responsive Login form with validation.</p>
          <a href="https://e-commerce-app-v.netlify.app/" className="btn">View Demo</a>
        </div>

        <div className="project-card">
          <img src="/p1.png" alt="project" />
          <h2>Weather App</h2>
          <p>Weather forecast using API and JavaScript.</p>
          <a href="https://weatherpostman.netlify.app/" className="btn">View Demo</a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
