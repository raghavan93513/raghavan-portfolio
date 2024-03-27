import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hey Everyone, I am <span className="purple">Raghavan Vaidhyaraman </span>
            from <span className="purple"> Bengaluru, India.</span>
            <br /> I am a final year student pursuing an BTech Degree
            in Computer Science Engineering in specialization with Data Science at VIT, Vellore.
            <br />
            Additionally, I am currently employed at <span className="purple"> Databricks</span> as a Technical Solution Engineer.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Sports
            </li>
            <li className="about-activity">
              <ImPointRight /> Jogging and Cycling
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Games on my PC
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring Different Types of Food
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "If you are learning something new everyday, Congrats you are winning"{" "}
          </p>
          <footer className="blockquote-footer">Raghavan Vaidhyaraman</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
