import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import {
  AboutQuoteCard,
  AboutCardProfessional,
  AboutCardLeadership,
  AboutCardPersonal,
  AboutActivitiesCard,
} from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import NGOImg from "../../Assets/NGO.jpeg";
import hackathonImg from "../../Assets/hackathon.jpeg";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col md={10} className="reveal">
            <AboutQuoteCard />
          </Col>
        </Row>

        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
            className="reveal-left"
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who I Am{" "}
              <strong className="purple neon-text">Professionally</strong>
            </h1>
            <AboutCardProfessional />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img reveal-right"
          >
            <img src={laptopImg} alt="about" className="img-fluid about-float-img" />
          </Col>
        </Row>

        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img reveal-left"
          >
            <img
              src={hackathonImg}
              alt="Hackathon mentoring and judging"
              className="img-fluid about-float-img"
            />
          </Col>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
            className="reveal-right"
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Where I Lead and{" "}
              <strong className="purple neon-text">Contribute</strong>
            </h1>
            <AboutCardLeadership />
          </Col>
        </Row>

        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img reveal-left"
          >
            <img src={NGOImg} alt="NGO work" className="img-fluid about-float-img" />
          </Col>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
            className="reveal-right"
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who I Am{" "}
              <strong className="purple neon-text">Personally</strong>
            </h1>
            <AboutCardPersonal />
          </Col>
        </Row>

        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={10}
            style={{
              justifyContent: "center",
              paddingTop: "20px",
              paddingBottom: "50px",
            }}
            className="reveal"
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Some activities that I love to do
            </h1>
            <AboutActivitiesCard />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default About;
