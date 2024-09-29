import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiJavascript1, DiReact, DiGit } from "react-icons/di";
import { SiNextdotjs, SiTypescript, SiRedux } from "react-icons/si";
import { GIT, JAVSCRIPT, NEXT_JS, REACT_JS, REDUX, TYPESCRIPT } from "../../constant";

function Techstack() {
  const techIcons = [
    { icon: <DiJavascript1 />, title: JAVSCRIPT },
    { icon: <DiReact />, title: REACT_JS },
    { icon: <SiNextdotjs />, title: NEXT_JS },
    { icon: <DiGit />, title: GIT },
    { icon: <SiTypescript />, title: TYPESCRIPT },
    { icon: <SiRedux />, title: REDUX },
  ];

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

export default Techstack;
