import { Container, Row, Col, Tab } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import { ProjectCard } from "./ProjectCard";
import { useLanguage } from "../context/LanguageContext";

import projImg1 from '../assets/img/chatappImg.png';
import projImg2 from '../assets/img/aidocImg.png';
import projImg3 from '../assets/img/motionImg.png';
import projImg4 from '../assets/img/movieappImg.png';
import projImg7 from '../assets/img/blogImg.png';
import projImg8 from '../assets/img/formImg.png';
import projImg9 from '../assets/img/taskappImg.png';
import projImg10 from '../assets/img/valentineImg.png';
import projImg11 from '../assets/img/loopImg.png';

import colorSharp2 from '../assets/img/color-sharp2.png';

export const Projects = () => {
   const { translations } = useLanguage();
   const projects = [

  // ===== SYSTEMS & PLATFORMS =====
  

  {
    title: "AI Document Learning Platform",
    description: "A modular document ingestion and LLM-powered processing pipeline with asynchronous job handling and structured backend architecture.",
    tech: "React, Node.js, Prisma, PostgreSQL, OpenAI API",
    imgUrl: projImg2, // replace if needed
    github: "https://github.com/manuamurali97/AI-Powered-Document-Learning-Platform",
    category: "systems",
  },

  {
    title: "Motion Analysis System",
    description: "Computer vision-based pose tracking and movement visualization system generating trajectory overlays and analytical outputs.",
    tech: "Python, OpenCV, MediaPipe",
    imgUrl: projImg3,
    github: "https://github.com/manuamurali97/Motion-Analysis-Python",
    category: "systems",
  },
  {
    title: "Real-Time Chat Platform",
    description: "WebSocket-based real-time communication system with persistent session management and optimized message delivery architecture.",
    tech: "React, Node.js, WebSockets, MongoDB",
    imgUrl: projImg1,
    github: "https://github.com/manuamurali97/ChatApp",
    category: "systems",
  },

  // ===== WEB APPLICATIONS =====
  {
    title: "Blog Platform",
    description: "Authentication-enabled blog application with post management, authorization checks, and structured backend logic.",
    tech: "Laravel, MySQL",
    imgUrl: projImg7,
    github: "https://github.com/manuamurali97/Laravel-Blog-User-Authentication",
    category: "applications",
  },
  {
    title: "Movie Explorer",
    description: "Interactive movie discovery interface powered by TMDB API with persistent favorites and clean state management.",
    tech: "React, Context API",
    imgUrl: projImg4,
    github: "https://github.com/manuamurali97/Movie-Suggestion-App---React-JS",
    category: "applications",
  },


  {
    title: "Task Management Application",
    description: "Full-stack task management platform featuring JWT-based authentication, protected APIs, and responsive UI.",
    tech: "MERN Stack",
    imgUrl: projImg9,
    github: "https://github.com/manuamurali97/task-manager-mern",
    category: "applications",
  },

  // ===== EXPERIMENTS =====
  {
    title: "Valentine Interactive Experience",
    description: "Playful interactive web experiment exploring animation, motion design, and dynamic UI behavior.",
    tech: "React, Framer Motion",
    imgUrl: projImg10, // replace if needed
    github: "https://github.com/manuamurali97/Valentine-game",
    category: "experiments",
  },
  {
    title: "LoopForge",
    description: "Creative web tool that generates looping visual animations based on structured user prompts.",
    tech: "React, Animation Systems",
    imgUrl: projImg11, // replace with correct image
    github: "https://github.com/manuamurali97/Loop-Forge-",
    category: "experiments",
  },

  {
    title: "Login & Registration System",
    description: "Role-based authentication system with session management and secure password handling.",
    tech: "PHP, MySQL",
    imgUrl: projImg8,
    github: "https://github.com/manuamurali97/Full-Stack-Login_Register-Form",
    category: "experiments",
  }

];


    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>{translations.projects.title}</h2>
                        <p>{translations.projects.description}</p>

                        <Tab.Container id="projects-tabs" defaultActiveKey="systems">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="systems">{translations.projects.systems}</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="applications">{translations.projects.applications}</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="experiments">{translations.projects.experiments}</Nav.Link>
                                </Nav.Item>
                            </Nav>

                      <Tab.Content>
                         <Tab.Pane eventKey="systems">
                             <Row>
                                  {projects.filter((project) => project.category === "systems").map((project, index) => (
                                        <ProjectCard key={index} {...project} />
                                    ))}
                            </Row>
                        </Tab.Pane>

                        <Tab.Pane eventKey="applications">
                            <Row className="justify-content-center">
                            {projects
                                .filter((project) => project.category === "applications")
                                .map((project, index) => (
                                <ProjectCard key={index} {...project} />
                                ))}
                            </Row>
                        </Tab.Pane>

                        <Tab.Pane eventKey="experiments">
                            <Row>
                            {projects
                                .filter((project) => project.category === "experiments")
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
            <img className="background-image-right" src={colorSharp2} alt="Background decoration"></img>
            
        </section>
    );
};
