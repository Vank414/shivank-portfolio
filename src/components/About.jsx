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
            I'm a Computer Science undergraduate with a strong interest in software engineering, 
            scalable systems, and machine learning. I enjoy building reliable, high-performance 
            software and tackling complex problems using solid algorithmic thinking and clean, maintainable system design.
          </h3>

          <p>
            My experience includes developing <span className="highlight">backend systems, working with data models, and 
            solving algorithmic challenges</span>, with a consistent focus on writing efficient, production-quality code. 
            I'm particularly interested in designing systems that scale and perform well under real-world constraints.
          </p>

          <p>
            I'm actively seeking <span className="highlight">software engineering opportunities</span>—especially at technology and
            <span className="highlight"> quantitative firms</span>—where I can contribute to solving challenging problems in large-scale 
            infrastructure, data-intensive systems, and performance-critical applications.
          </p>
            
          <p>
            Outside of academics and development, I regularly practice competitive programming, 
            explore emerging technologies, and continuously refine my problem-solving skills.
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