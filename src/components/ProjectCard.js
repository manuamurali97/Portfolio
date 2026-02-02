import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, tech, imgUrl, github }) => {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <p>{tech}</p>
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="project-link"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </Col>
  );
};
