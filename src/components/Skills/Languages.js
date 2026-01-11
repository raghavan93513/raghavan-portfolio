import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { DiJavascript1, DiPython, DiJava, DiCss3, DiScala } from "react-icons/di";
import { SiR } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { BsFiletypeSql } from "react-icons/bs";
import { TbBrandGraphql } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={3} className="tech-icons">
        <DiPython />
        <p className="tech-icon-label">Python</p>
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <DiJava />
        <p className="tech-icon-label">Java</p>
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <DiScala />
        <p className="tech-icon-label">Scala</p>
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <SiR />
        <p className="tech-icon-label">R</p>
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <BsFiletypeSql />
        <p className="tech-icon-label">SQL</p>
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <TbBrandGraphql />
        <p className="tech-icon-label">SPARQL</p>
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <DiJavascript1 />
        <p className="tech-icon-label">JavaScript</p>
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <CgCPlusPlus />
        <p className="tech-icon-label">C++</p>
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <FaHtml5 />
        <p className="tech-icon-label">HTML5</p>
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <DiCss3 />
        <p className="tech-icon-label">CSS3</p>
      </Col>
    </Row>
  );
}


export default Techstack;
