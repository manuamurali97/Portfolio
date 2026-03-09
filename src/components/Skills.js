import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import engineering from '../assets/img/engineering.png';
import meter1 from '../assets/img/ReactImg.png';
import meter2 from '../assets/img/backendImg.png';
import meter3 from '../assets/img/dataImg.png';
import meter4 from '../assets/img/toolsImg.png';
import colorSharp from '../assets/img/color-sharp.png';
import { useLanguage } from "../context/LanguageContext";

export const Skills = () => {
const { translations } = useLanguage();

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

return (
    <section className="skill" id = "skills">
        <Container>
            <Row>
                <Col>
                <div className="skill-bx">
                    <h2>{translations.skills.title}</h2>
                    <p>{translations.skills.description}</p>
                    <Carousel responsive={responsive} infinite={true} className="skill-slider">

                    <div className="item">
                      <img src={engineering} alt="Core Engineering" />
                      <h5>{translations.skills.core}</h5>
                      <p>TypeScript, JavaScript, Python, SQL, C++</p>
                    </div>

                    <div className="item">
                      <img src={meter1} alt="Frontend Systems" />
                      <h5>{translations.skills.frontend}</h5>
                      <p>React, Next.js, Tailwind CSS, HTML5, CSS3, React Native</p>
                    </div>

                    <div className="item">
                      <img src={meter2} alt="Backend & APIs" />
                      <h5>{translations.skills.backend}</h5>
                      <p>Node.js, Express, FastAPI, WebSockets, REST APIs, GraphQL</p>
                    </div>

                    <div className="item">
                      <img src={meter3} alt="AI & Data Systems" />
                      <h5>{translations.skills.ai}</h5>
                      <p>OpenAI API, Hugging Face, Scikit-learn, Pandas, OpenCV</p>
                    </div>

                    <div className="item">
                      <img src={meter4} alt="Infrastructure" />
                      <h5>{translations.skills.infrastructure}</h5>
                      <p>Docker, Git, GitLab CI/CD, PostgreSQL, MongoDB, Prisma ORM</p>
                    </div>

                  </Carousel>
                </div>
                </Col>
            </Row>
        </Container>
       <img className="background-image-left" src={colorSharp} alt="background"/>

    </section>
)
}