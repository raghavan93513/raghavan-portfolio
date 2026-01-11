import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiReact, DiNodejs } from "react-icons/di";
import { SiPytorch, SiPandas, SiOpencv, SiNumpy, SiScikitlearn, SiPlotly, SiChainlink } from "react-icons/si";
import { VscGraphLeft } from "react-icons/vsc";


function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={3} className="tech-icons">
        <SiPytorch />
        <p className="tech-icon-label">PyTorch</p>
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <SiScikitlearn />
        <p className="tech-icon-label">Scikit-learn</p>
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <SiChainlink />
        <p className="tech-icon-label">LangChain</p>
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <SiPandas />
        <p className="tech-icon-label">Pandas</p>
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <SiNumpy />
        <p className="tech-icon-label">NumPy</p>
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <SiPlotly />
        <p className="tech-icon-label">Matplotlib</p>
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <VscGraphLeft />
        <p className="tech-icon-label">NetworkX</p>
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <SiOpencv />
        <p className="tech-icon-label">OpenCV</p>
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <DiReact />
        <p className="tech-icon-label">React</p>
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <DiNodejs />
        <p className="tech-icon-label">Node.js</p>
      </Col>
    </Row>
  );
}

export default Techstack;
