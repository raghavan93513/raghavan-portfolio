import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Contactme.jpeg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              THE TINY <span className="purple"> NAVIGATOR </span>
            </h1>
            <p className="home-about-body">
              I’m pretending this is a phone 📞 but it’s actually me telling you where everything is on my website. 
              <br />
              <br />
              If you’re here to understand what my grown-up self does, 
              
              <ul>
              <li>The 
              <i>
                <b className="purple" onClick={() => window.open("/about", "_blank", "noopener,noreferrer")} style={{ cursor: "pointer" }}> About </b>
              </i>              
              section has a few more insights about what drives me
              </li>

              <li>The 
              <i>
                <b className="purple" onClick={() => window.open("/project", "_blank", "noopener,noreferrer")} style={{ cursor: "pointer" }}> Projects </b>
              </i>              
               are the “look what I made” section. 
              </li>

              <li>The 
              <i>
                <b className="purple" onClick={() => window.open("/research", "_blank", "noopener,noreferrer")} style={{ cursor: "pointer" }}> Research </b>
              </i>
              is where I turn big questions into real work, real results, and yes, real papers.
              </li>

              <li>The 
              <i>
                <b className="purple" onClick={() => window.open("/skills", "_blank", "noopener,noreferrer")} style={{ cursor: "pointer" }}> Skills </b>
              </i>
              section is where I show my certifications and technical superpowers.
              </li>

              <li>The 
              <i>
                <b className="purple" onClick={() => window.open("/resume", "_blank", "noopener,noreferrer")} style={{ cursor: "pointer" }}> Resume </b>
              </i>
              is the clean, official version of my accomplishments. 
              </li>

              <li>If you get lost, 
              <i>
                <b className="purple" onClick={() => window.open("/home", "_blank", "noopener,noreferrer")} style={{ cursor: "pointer" }}> RV Button </b>
              </i>
               at the top will take you back to the home page. 
              </li>

              </ul>
              
              Consider this my tiny hand wave 👋 from the flower field, and I’d be happy to connect with you using the links below.
              
              
              {/* I fell in love with Artificial Intelligence and Development and I have at least learnt
              something, Hopefully… 🤷‍♂️
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> Python, Java, Javascript. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Products related to Artificial Intelligence</b> and
                also in areas related to{" "}
                <b className="purple">
                  LLMOps.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for Data Science
              with <b className="purple">AI</b> and
              <i>
                <b className="purple">
                  {" "}
                  Big Data
                </b>
              </i>
              &nbsp; like working with
              <i>
                <b className="purple"> GPT-4 and Apache Spark</b>
              </i> */}
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/raghavan93513"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/raghavan-vaidhyaraman/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/ashwinraghavan_/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
              
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
