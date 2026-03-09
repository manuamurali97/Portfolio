import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/Webimg1.png";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

export const Banner = () => {
  const { translations, language } = useLanguage();
  const titles = translations.banner.titles;
  

  const [index, setIndex] = useState(0);

  useEffect(() => {
  setIndex(0); // reset when language changes

  const interval = setInterval(() => {
    setIndex((prev) => (prev + 1) % titles.length);
  }, 2500);

  return () => clearInterval(interval);
}, [titles, language]);

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <h1>
              {translations.banner.intro}{" "}
              <span className="highlight">Manua Murali</span>
            </h1>


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
              {translations.banner.description}
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
