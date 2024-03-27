import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiReact, DiNodejs } from "react-icons/di";
import { SiPytorch, SiPandas, SiOpencv, SiNumpy} from "react-icons/si";


function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={3} className="tech-icons"><SiPytorch /></Col>
      <Col xs={4} md={3} className="tech-icons"><DiNodejs /></Col>
      <Col xs={4} md={3} className="tech-icons"><DiReact /></Col>
      <Col xs={4} md={3} className="tech-icons"><SiPandas /></Col>
      <Col xs={4} md={3} className="tech-icons"><SiOpencv /></Col>
      <Col xs={4} md={3} className="tech-icons"><SiNumpy /></Col>
    </Row>
  );
}

export default Techstack;
