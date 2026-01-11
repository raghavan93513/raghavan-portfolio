import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiSlack,
  SiVercel,
  SiAmazonaws, 
  SiApachespark,
  SiDatabricks,
  SiMicrosoftazure
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiApachespark />
        <p className="tech-icon-label">Spark</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDatabricks />
        <p className="tech-icon-label">Databricks</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonaws />
        <p className="tech-icon-label">AWS</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftazure />
        <p className="tech-icon-label">Azure</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <p className="tech-icon-label">VS Code</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
        <p className="tech-icon-label">Slack</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
        <p className="tech-icon-label">Vercel</p>
      </Col>
    </Row>
  );
}


export default Toolstack;
