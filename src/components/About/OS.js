import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiMacos,
  SiWindows, 
  SiLinux, 
} from "react-icons/si";

function OS() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={3} className="tech-icons"> <SiMacos /></Col>
      <Col xs={4} md={3} className="tech-icons"><SiWindows /></Col>
      <Col xs={4} md={3} className="tech-icons"><SiLinux /></Col>
    </Row>
  );
}

export default OS;
