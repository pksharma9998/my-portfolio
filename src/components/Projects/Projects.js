import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import { PROJECTS } from "../../config";
import { MY_RECENT, RECENT_PROJECTS, WORKS } from "../../constant";

function Projects() {

  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          {MY_RECENT} <strong className="purple">{WORKS} </strong>
        </h1>
        <p style={{ color: "white" }}>
          {RECENT_PROJECTS}
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {PROJECTS?.map((project, index) => (
            <Col md={4} className="project-card" key={index}>
              <ProjectCard
                imgPath={project.imgPath}
                isBlog={false}
                title={project.title}
                description={project.description}
                ghLink={project.ghLink}
                demoLink={project.demoLink}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
