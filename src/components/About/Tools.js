import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiGithub, SiMysql, SiPowerbi, SiAdobephotoshop, SiAdobepremierepro } from "react-icons/si";

function Tools() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={3} className="tech-icons"><SiGithub /></Col>
      <Col xs={4} md={3} className="tech-icons"><SiMysql /></Col>
      <Col xs={4} md={3} className="tech-icons"><SiPowerbi /></Col>
      <Col xs={4} md={3} className="tech-icons"><SiAdobephotoshop /></Col>
      <Col xs={4} md={3} className="tech-icons"><SiAdobepremierepro /></Col>
    </Row>
  );
}
export default Tools;
