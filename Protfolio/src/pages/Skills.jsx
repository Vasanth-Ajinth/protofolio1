import "./Skill.css";

function Skills() {
  return (
    <div className="skills-container">
      <h1 className="title">My Skills</h1>

      <div className="skills-wrapper">

        {/* LEFT SIDE */}
        <div className="skills-box">
          <h2>Frontend Skills</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React JS</li>
            <li>Bootstrap</li>
            <li>Tailwind CSS</li>
          </ul>
        </div>

        {/* RIGHT SIDE */}
        <div className="skills-box">
          <h2>Tools & Platforms</h2>
          <ul>
            <li>Git & GitHub</li>
            <li>VS Code</li>
            <li>NPM</li>
            <li>Figma</li>
          </ul>
        </div>
      </div>

      <div className="skills-wrapper">
        <div className="skills-box">
          <h2>Backend Basics</h2>
          <ul>
            <li>Node.js Basics</li>
            <li>MongoDB Basics</li>
            <li>Express Basics</li>
          </ul>
        </div>

        <div className="skills-box">
          <h2>Soft Skills</h2>
          <ul>
            <li>Communication</li>
            <li>Team Work</li>
            <li>Problem Solving</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;
