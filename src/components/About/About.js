import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
// import Github from "./Github";
import Frameworks from "./Frameworks";
import Languages from "./Languages";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Platforms from "./Platforms";
import Tools from "./Tools";
import OS from "./OS";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>

        <h1 className="project-heading">
          <strong className="purple">Technical Skillset </strong>
        </h1>

        <h1 className="project-heading">
          <strong> Languages </strong>
        </h1>

        <Languages />

        <h1 className="project-heading">
          <strong> Frameworks  </strong>
        </h1>

        <Frameworks />

        <h1 className="project-heading">
          <strong> Tools </strong>
        </h1>

        <Tools />

        <h1 className="project-heading">
          <strong> Platforms </strong>
        </h1>

        <Platforms />

        <h1 className="project-heading">
          <strong> Operating Systems </strong>
        </h1>

        <OS />

        {/* <Github /> */}
      </Container>
    </Container>
  );
}

export default About;
