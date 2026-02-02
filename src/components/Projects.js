import { Container, Row, Col, Tab } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import { ProjectCard } from "./ProjectCard";
import projImg1 from '../assets/img/chatappImg.png';
import projImg2 from '../assets/img/taskappImg.png';
import projImg3 from '../assets/img/motionImg.png';
import projImg4 from '../assets/img/movieappImg.png';
import projImg5 from '../assets/img/portfolioImg.png';
import projImg6 from '../assets/img/churnImg.png';
import projImg7 from '../assets/img/blogImg.png';
import projImg8 from '../assets/img/formImg.png';

import colorSharp2 from '../assets/img/color-sharp2.png';

export const Projects = () => {
   const projects = [
  {
    title: "Real-Time Chat Application",
    description: "Internal real-time messaging application for team communication. (The project is created for my previous organization, hence the  full code is private.)",
    tech: "React, Node.js, MongoDB, Socket.IO",
    imgUrl: projImg1,
    github: "https://github.com/manuamurali97/ChatApp",
    category:"fullstack",
  },
  {
    title: "Task Manager Application",
    description: "Task management system with full CRUD functionality and a responsive UI with secure user authentication using JWT.",
    tech: "MERN Stack (Javascript, React, Node.js, Express.js, MongoDB)",
    imgUrl: projImg2,
    github: "https://github.com/manuamurali97/task-manager-mern",
    category:"fullstack",
  },
  {
    title: "Blog Application",
    description: "Blog platform with user authentication, CRUD operations for posts, and responsive design using Laravel framework.",
    tech: "Laravel, MySQL",
    imgUrl: projImg7,
    github: "https://github.com/manuamurali97/Laravel-Blog-User-Authentication",
    category:"fullstack",
  },
  {
    title: "Movie Explorer",
    description: "Live movie search powered by the TMDB API. The App displays movie posters, titles, and release years, with favorite functionality using React Context API.",
    tech: "React, Context API, HTML, CSS",
    imgUrl: projImg4,
    github: "https://github.com/manuamurali97/Movie-Suggestion-App---React-JS",
    category:"self",
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio website showcasing projects and skills.",
    tech: "React, Bootstrap",
    imgUrl: projImg5,
    github: "https://github.com/manuamurali97/Portfolio-Website---React",
    category:"self",
  },
  {
    title: "Login & Registration Form",
    description: "Responsive login and registration form with validation.",
    tech: "React, Bootstrap",
    imgUrl: projImg8,
    github: "https://github.com/manuamurali97/Full-Stack-Login_Register-Form",
    category:"self",
  },
  {
    title: "Motion Analysis using Python",
    description: "Pose estimation and movement visualization of Kalaripayattu martial art.",
    tech: "Python, MediaPipe, OpenCV",
    imgUrl: projImg3,
    github: "https://github.com/manuamurali97/Motion-Analysis-Python",
    category:"python",
  },
  {
    title: "Customer Churn Analysis using ML",
    description: "Predictive model to identify customers likely to churn. Performed data cleaning, EDA, feature engineering, and model evaluation.",
    tech: "Python, Scikit-learn, Pandas",
    imgUrl: projImg6,
    github: "https://github.com/manuamurali97/customer-churn-analysis",
    category:"python",
  },
];


    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>Here are some of my recent projects.</p>

                        <Tab.Container id="projects-tabs" defaultActiveKey="fullstack">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="fullstack">Full Stack Projects</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="python">Python Projects</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="self">Self Study Projects</Nav.Link>
                                </Nav.Item>
                            </Nav>

                      <Tab.Content>
                         <Tab.Pane eventKey="fullstack">
                             <Row>
                                  {projects.filter((project) => project.category === "fullstack").map((project, index) => (
                                        <ProjectCard key={index} {...project} />
                                    ))}
                            </Row>
                        </Tab.Pane>

                        <Tab.Pane eventKey="python">
                            <Row className="justify-content-center">
                            {projects
                                .filter((project) => project.category === "python")
                                .map((project, index) => (
                                <ProjectCard key={index} {...project} />
                                ))}
                            </Row>
                        </Tab.Pane>

                        <Tab.Pane eventKey="self">
                            <Row>
                            {projects
                                .filter((project) => project.category === "self")
                                .map((project, index) => (
                                <ProjectCard key={index} {...project} />
                                ))}
                            </Row>
                        </Tab.Pane>
                    </Tab.Content>

                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
            
        </section>
    );
};
