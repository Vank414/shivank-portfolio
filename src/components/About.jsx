import "./About.css";

export default function About() {
  return (
    <section id="about" className="about-modern">
      <div className="about-card">

        {/* Header Row */}
        <div className="about-header">
          <div className="about-accent"></div>
          <h2>About Me</h2>
        </div>

        {/* Content */}
        <div className="about-content">

          <h3 className="about-heading">
            I'm a Computer Science undergraduate focused on software engineering, scalable systems, and machine learning. 
            I enjoy building reliable software and solving complex problems through strong algorithmic thinking and 
            clean system design.
          </h3>

          <p>
            I've worked on projects involving <span className="highlight">backend systems, data modeling, and algorithmic problem solving</span>, with 
            an emphasis on writing efficient, production-quality code and designing systems that scale.
          </p>

          <p>
            I'm particularly interested in software engineering roles at technology and quantitative firms, where I can 
            work on challenging problems involving large-scale infrastructure, data systems, and performance-critical applications.          </p>

          <p>
            Outside of development, I enjoy competitive programming, exploring new technologies, and continuously 
            improving my problem-solving skills.
          </p>

          <p>
            In my free time, I enjoy exploring new ideas, reading about
            emerging technologies, and refining my problem-solving skills.
          </p>

        </div>
      </div>
    </section>
  );
}