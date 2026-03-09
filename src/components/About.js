import { Container, Row, Col } from "react-bootstrap";
import profileImg from "../assets/img/me.png"; // replace with your image
import { useLanguage } from "../context/LanguageContext";

export const About = () => {
  const { translations } = useLanguage();

  return (
    <section className="about" id="about">
      <Container>
        <Row>
          <Col md={5}>
            <img src={profileImg} alt="Manua" className="about-img" />
          </Col>
          <Col md={7}>
            <h2>{translations.about.title}</h2>
            <p>{translations.about.p1}</p>
            <p>{translations.about.p2}</p>
            <p>{translations.about.p3}</p>
            <p>{translations.about.p4}</p>
             <div className="resume-section">
              <h3>{translations.about.portfolioTitle}</h3>

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
                {translations.about.portfolioLink}
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
