import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from '../assets/img/ReactImg.png';
import meter2 from '../assets/img/backendImg.png';
import meter3 from '../assets/img/dataImg.png';
import meter4 from '../assets/img/toolsImg.png';
import colorSharp from '../assets/img/color-sharp.png';

export const Skills = () => {

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
                    <h2>
                        Skills
                    </h2>
                    <p>Technologies and tools I use to build full-stack web applications,
                      from responsive user interfaces to scalable backend services.</p>
                    <Carousel responsive={responsive} infinite={true} className="skill-slider">
                      <div className="item">
                        <img src = {meter1} 
                             alt = "Frontend"
                             ></img>
                        <h5>Frontend</h5>
                        <p>JavaScript, TypeScript, React, HTML, CSS, Bootstrap</p>
                      </div>

                      <div className="item">
                        <img src = {meter2} alt = "Backend" width = "200" height = "200"></img>
                        <h5>Backend</h5>
                        <p>Node.js, Express.js, Python, Django, PHP, REST APIs, MongoDB, MySQL</p>
                      </div>

                      <div className="item">
                        <img src = {meter3} alt = "Data & Analytics"></img>
                        <h5>Data & Analytics</h5>
                        <p>Data Analysis, Data Visualization, SQL, Pandas, NumPy, Matplotlib</p>
                      </div>

                      <div className="item">
                        <img src = {meter4} alt = "Tools"></img>
                        <h5>Tools & Others</h5>
                        <p>Git, GitHub, VS Code, Docker, Linux, Jupyter Notebook</p>
                      </div>
                    </Carousel>
                </div>
                </Col>
            </Row>
        </Container>
       <img className="background-image-left" src={colorSharp}/>

    </section>
)
}