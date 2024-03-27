import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { DiJavascript1, DiPython, DiJava, DiCss3 } from "react-icons/di";
import { SiR } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { BsFiletypeSql } from "react-icons/bs";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={3} className="tech-icons"><DiPython /></Col>
      <Col xs={4} md={3} className="tech-icons"><DiJava /></Col>
      <Col xs={4} md={3} className="tech-icons"><SiR /></Col>
      <Col xs={4} md={3} className="tech-icons"><BsFiletypeSql /></Col>
      <Col xs={4} md={3} className="tech-icons"><DiJavascript1 /></Col>
      <Col xs={4} md={3} className="tech-icons"><CgCPlusPlus /></Col>
      <Col xs={4} md={3} className="tech-icons"><FaHtml5 /></Col>
      <Col xs={4} md={3} className="tech-icons"><DiCss3 /></Col>
    </Row>
  );
}


export default Techstack;
