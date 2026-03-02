import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SkillsCard from "./SkillsCards";
import Particle from "../Particle";
import Languages from "./Languages";
import Frameworks from "./Frameworks";
import Tools from "./Tools";
import Platforms from "./Platforms";
import OS from "./OS";

function Skills() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Certifications</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are my professional certifications and credentials.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
          <Col md={6} className="project-card">
            <SkillsCard
              title="Databricks Certified Machine Learning Associate"
              certLink="https://credentials.databricks.com/b569512b-6fa2-4ba3-9335-cc68e3a97af0#acc.DWPLGmnq"
            />
          </Col>

          <Col md={6} className="project-card">
            <SkillsCard
              title="Databricks Certified Generative AI Engineer Associate"
              certLink="https://credentials.databricks.com/ed0d9350-221c-4ca3-bf68-c0ff0d7f167e#acc.92ABpud3"
            />
          </Col>

          <Col md={6} className="project-card">
            <SkillsCard
              title="Databricks Certified Data Engineer Associate"
              certLink="https://credentials.databricks.com/10aadaf8-cedd-499d-bc63-c8e4b0552071#acc.w4jmOd2U"
            />
          </Col>

          <Col md={6} className="project-card">
            <SkillsCard
              title="Lakehouse Fundamentals"
              certLink="https://credentials.databricks.com/374f9956-18ab-462b-bf1a-00458805b62b#acc.oXJDz0T3"
            />
          </Col>

          <Col md={6} className="project-card">
            <SkillsCard
              title="Generative AI Fundamentals"
              certLink="https://credentials.databricks.com/d3272ef9-9a57-4121-a6b1-13bc6ef6de58#acc.d7QXBo0p"
            />
          </Col>

          <Col md={6} className="project-card">
            <SkillsCard
              title="IBM Certified Artificial Intelligence Analyst"
              certLink="https://courses.ibmcep.cognitiveclass.ai/certificates/fe53aed3d98948179e976b4e9f239c22"
            />
          </Col>

          <Col md={6} className="project-card">
            <SkillsCard
              title="Git Complete: The definitive, step-by-step guide to Git"
              certLink="https://www.udemy.com/certificate/UC-fcb39abf-202b-4ed2-8218-ebfb479151d5"
            />
          </Col>

          {/* Add more certification cards as needed */}

        </Row>

        <h1 className="project-heading">
          <strong className="purple">Technical Skillset </strong>
          
        </h1>
        <br></br>
        <br></br>
        <h1 className="project-heading">
          <strong> Languages </strong>
        </h1>
        <br></br>
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

      </Container>
    </Container>
  );
}

export default Skills;
