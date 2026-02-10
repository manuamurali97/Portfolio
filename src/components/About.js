import { Container, Row, Col } from "react-bootstrap";
import profileImg from "../assets/img/me.png"; // replace with your image

export const About = () => {
  return (
    <section className="about" id="about">
      <Container>
        <Row>
          <Col md={5}>
            <img src={profileImg} alt="Manua" className="about-img" />
          </Col>
          <Col md={7}>
            <h2>About Me</h2>
            <p>
              I’m a full-stack developer who enjoys building clean, reliable web applications and solving 
              problems across the stack. I primarily work with JavaScript, TypeScript, PHP, React, and the 
              MERN stack, and I like to create responsive, user-friendly interfaces. I'm also passionate
              about learning new technologies and improving my skills.
            </p>
            <p>
              Alongside web development, I have a strong background in Python and data-oriented 
              problem solving, thanks to my Master's degree in Data Science, which helps me approach challenges analytically and make thoughtful 
              technical decisions. I value writing maintainable code, learning continuously, and 
              building things that are practical, scalable, and easy to use.
            </p>
            <p>
                When I’m not coding, I enjoy reading tech blogs, exploring new frameworks, and contributing
                to open source projects. Something not technical about me is that I love drawing and photography!
            </p>
            <p>
                If you're looking for a dedicated developer who is eager to learn and grow, or just want to connect, feel free to reach out!
            </p>

             <div className="resume-section">
              <h3>Projects Overview</h3>

              <iframe
                src="/ProjectOverview.pdf"
                title="Resume"
                className="resume-preview"
              ></iframe>

              <a
                href="/ProjectOverview.pdf"
                target="_blank"
                rel="noreferrer"
                className="resume-link"
              >
                Open Projects Overview ↗
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
