import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/Webimg1.png";
import { motion, AnimatePresence } from "framer-motion";

export const Banner = () => {
  const titles = [
    "Full-Stack Developer",
    "React & TypeScript Developer",
    "JavaScript & Python Developer",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <h1>
              Hi, I’m <span className="highlight">Manua Murali</span>
            </h1>

            <span className="tagline">Welcome to my Portfolio</span>

            <AnimatePresence mode="wait">
              <motion.h2
                key={titles[index]}
                className="subtitle"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.5 }}
              >
                {titles[index]}
              </motion.h2>
            </AnimatePresence>

            <p>
              I’m a full-stack developer specializing in building modern,
              scalable web applications using JavaScript, TypeScript, and React,
              with a strong foundation in Python and data-driven thinking.
            </p>
          </Col>

          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
