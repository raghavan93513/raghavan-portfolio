import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/ProfilePic.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import FunFactTicker from "../FunFactTicker";

function AuroraBackground() {
  return (
    <div className="aurora-bg" aria-hidden="true">
      <div className="aurora-blob aurora-blob-1" />
      <div className="aurora-blob aurora-blob-2" />
      <div className="aurora-blob aurora-blob-3" />
      <div className="aurora-blob aurora-blob-4" />
    </div>
  );
}

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <AuroraBackground />
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hey There!{" "}
                <span className="wave" role="img" aria-label="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong
                  className="main-name glitch-text"
                  data-text=" RAGHAVAN VAIDHYARAMAN"
                >
                  {" "}
                  RAGHAVAN VAIDHYARAMAN
                </strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} className="home-avatar-col">
              <div className="avatar-wrapper">
                <div className="avatar-ring" aria-hidden="true" />
                <img
                  src={homeLogo}
                  alt="Raghavan Vaidhyaraman"
                  className="img-fluid home-avatar-img"
                  loading="eager"
                  decoding="async"
                />
                <div className="avatar-glow" aria-hidden="true" />
              </div>
            </Col>
          </Row>
        </Container>

        {/* Scrolling highlights ticker */}
        <FunFactTicker />
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
