import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiGithub, SiMysql, SiPowerbi, SiDocker, SiMlflow } from "react-icons/si";

function Tools() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={3} className="tech-icons">
        <SiGithub />
        <p className="tech-icon-label">GitHub</p>
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <SiMysql />
        <p className="tech-icon-label">MySQL</p>
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <SiDocker />
        <p className="tech-icon-label">Docker</p>
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <SiMlflow />
        <p className="tech-icon-label">MLflow</p>
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <SiPowerbi />
        <p className="tech-icon-label">Power BI</p>
      </Col>
    </Row>
  );
}
export default Tools;
