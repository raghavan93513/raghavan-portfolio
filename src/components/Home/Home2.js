import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Contactme.jpeg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const NAV_LINKS = [
  { label: "About", path: "/about" },
  { label: "Projects", path: "/project" },
  { label: "Research", path: "/research" },
  { label: "Skills", path: "/skills" },
  { label: "Resume", path: "/resume" },
];

const SOCIAL = [
  {
    href: "https://github.com/raghavan93513",
    icon: <AiFillGithub />,
    label: "GitHub",
    color: "#c770f0",
  },
  {
    href: "https://www.linkedin.com/in/raghavan-vaidhyaraman/",
    icon: <FaLinkedinIn />,
    label: "LinkedIn",
    color: "#00d4ff",
  },
  {
    href: "https://www.instagram.com/ashwinraghavan_/",
    icon: <AiFillInstagram />,
    label: "Instagram",
    color: "#ff006e",
  },
];

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row className="align-items-center">
          <Col md={8} className="home-about-description reveal">
            <h1 style={{ fontSize: "2.6em" }}>
              THE TINY{" "}
              <span className="purple neon-text"> NAVIGATOR </span>
            </h1>
            <div className="home-about-body">
              <p>
              I'm pretending this is a phone 📞 but it's actually me telling
              you where everything is on my website.
              <br />
              <br />
              If you're here to understand what my grown-up self does:
              </p>
              <ul className="nav-guide-list">
                {NAV_LINKS.map(({ label, path }) => (
                  <li key={label}>
                    The{" "}
                    <i>
                      <b
                        className="purple nav-link-word"
                        onClick={() =>
                          window.open(path, "_blank", "noopener,noreferrer")
                        }
                        style={{ cursor: "pointer" }}
                        role="link"
                        tabIndex={0}
                        onKeyDown={(e) =>
                          e.key === "Enter" &&
                          window.open(path, "_blank", "noopener,noreferrer")
                        }
                      >
                        {" "}
                        {label}{" "}
                      </b>
                    </i>
                    {label === "About" &&
                      "section has a few more insights about what drives me"}
                    {label === "Projects" &&
                      'are the "look what I made" section.'}
                    {label === "Research" &&
                      "is where I turn big questions into real work, real results, and yes, real papers."}
                    {label === "Skills" &&
                      "section is where I show my certifications and technical superpowers."}
                    {label === "Resume" &&
                      "is the clean, official version of my accomplishments."}
                  </li>
                ))}
                <li>
                  If you get lost,{" "}
                  <i>
                    <b
                      className="purple nav-link-word"
                      onClick={() =>
                        window.open("/", "_blank", "noopener,noreferrer")
                      }
                      style={{ cursor: "pointer" }}
                      role="link"
                      tabIndex={0}
                      onKeyDown={(e) =>
                        e.key === "Enter" &&
                        window.open("/", "_blank", "noopener,noreferrer")
                      }
                    >
                      {" "}
                      RV Button{" "}
                    </b>
                  </i>
                  at the top will take you back to the home page. Bonus:
                  double-click it for a surprise.
                </li>
              </ul>
              <p>
              Consider this my tiny hand wave 👋 from the flower field, and
              I'd be happy to connect with you using the links below.
              </p>
            </div>
          </Col>
          <Col md={4} className="myAvtar reveal-right">
            <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} glareEnable>
              <div className="contact-img-wrapper">
                <img src={myImg} className="img-fluid" alt="Raghavan" />
                <div className="contact-img-glow" aria-hidden="true" />
              </div>
            </Tilt>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-about-social reveal">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              {SOCIAL.map(({ href, icon, label, color }) => (
                <li key={label} className="social-icons">
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                    aria-label={label}
                    style={{ "--social-color": color }}
                  >
                    {icon}
                  </a>
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
