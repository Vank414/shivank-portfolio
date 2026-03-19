import "./Contact.css";
import {
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section className="contact-section">
      <div className="contact-wrapper">

        <h2 className="contact-title">Connect with me!</h2>

        {/* TOP CARDS */}
        <div className="contact-cards">

          <div className="contact-card">
            {/* <FaEnvelope className="contact-icon" /> */}
            <h3>Email</h3>
            <p>shivank.orbit@gmail.com</p>
            <p>shivank.kumar24b@iiitg.ac.in</p>
          </div>

          <div className="contact-card">
            <h3>Socials</h3>
            <div className="social-icons">
              <a href="https://github.com/Cipher14S" target="_blank" rel="noreferrer">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/shivank-kumar-a498ba321/" target="_blank" rel="noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://instagram.com/yourusername" target="_blank" rel="noreferrer">
                <FaInstagram />
              </a>
            </div>
          </div>

          <div className="contact-card">
            <h3>Coding Profiles</h3>
            <div className="coding-links">
              <a href="https://codeforces.com/profile/Coherent14S" target="_blank" rel="noreferrer">Codeforces</a>
              <a href="https://atcoder.jp/users/Rare14S" target="_blank" rel="noreferrer">AtCoder</a>
              <a href="https://leetcode.com/u/Arcane14S/" target="_blank" rel="noreferrer">LeetCode</a>
            </div>
          </div>

        </div>

        {/* BOTTOM SPLIT SECTION */}
        <div className="contact-bottom">

          {/* LEFT SIDE TEXT */}
          <div className="contact-left">
            <h3>Always open to meaningful conversations.</h3>
            <p>
              I'm always open to discussing research ideas, scalable systems,
              internships, software engineering roles, or quantitative
              problem-solving opportunities.
            </p>
            <p>
              Whether it's collaboration, networking, or just a technical chat —
              feel free to reach out anytime.
            </p>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="contact-right">
            <h3 className="message-title">Drop a Message</h3>

            <form className="message-form">
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea placeholder="Your Message" rows="4" required></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}