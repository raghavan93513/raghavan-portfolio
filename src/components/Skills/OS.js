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
      <Col xs={4} md={3} className="tech-icons">
        <SiMacos />
        <p className="tech-icon-label">macOS</p>
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <SiWindows />
        <p className="tech-icon-label">Windows</p>
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <SiLinux />
        <p className="tech-icon-label">Linux</p>
      </Col>
    </Row>
  );
}

export default OS;
