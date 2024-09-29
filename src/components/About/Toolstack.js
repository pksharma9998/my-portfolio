import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiVisualstudiocode, SiSlack } from "react-icons/si";
import { SLACK, VS_CODE } from "../../constant";

function Toolstack() {
  const techIcons = [
    { icon: <SiVisualstudiocode />, title: VS_CODE },
    { icon: <SiSlack />, title: SLACK },
  ]

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techIcons.map((tech, index) => (
        <Col xs={4} md={2} className="tech-icons" key={index}>
          <div title={tech.title}>
            {tech.icon}
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
