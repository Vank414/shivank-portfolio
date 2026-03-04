import "./Hero.css";
import { useEffect, useState } from "react";
import profileImg from "/sk.png";
import bgImg from "/bg.jpg";

export default function Hero() {
  const fullText = "Hi, I'm Shivank Kumar";
  const [text, setText] = useState("");

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setText(fullText.slice(0, index + 1));
      index++;

      if (index === fullText.length) {
        clearInterval(interval);
      }
    }, 80);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="hero"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <img src={profileImg} alt="Shivank" className="hero-image" />

        <h1>
          {text}
          <span className="cursor">|</span>
        </h1>

        <p className="hero-sub"> 
          Computer Science Undergraduate | Software Engineering | Algorithms & Scalable Systems
        </p>

        <a href="#about" className="about-btn">
          About Me ↓
        </a>
      </div>
    </section>
  );
}