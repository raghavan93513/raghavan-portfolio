import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

export function AboutCardProfessional() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I am an <span className="purple"> Associate Spark Solutions Engineer </span> at <span className="purple"> Databricks</span>, optimizing Apache Spark, Delta Lake and MLflow pipelines across 50+ enterprise workloads. I delivered up to 80% runtime improvements and ~40% cloud cost reduction through performance tuning, partitioning, and lineage driven debugging. I am recognized as an <span className="purple"> SME in Spark, Delta Lake, and MLflow</span>, and I have mentored 8 engineers while authoring 20 plus enablement articles used globally. I also earned 1st runner up in the <span className="purple"> Databricks Global Hackathon 2025 </span> for Genie AI, a voice based assistant prototype, and delivered two nationwide Spark tech talks.
            <br />
            <br />
            Earlier, I completed a Databricks internship building expertise in Spark and streaming and creating reusable notebooks adopted internally. At <span className="purple"> Ideas2IT</span>, I built a GPT powered outreach tool using embedding based retrieval and fine tuning, increasing reply rates by 40% across a 2,500 user base.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export function AboutCardPersonal() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          At Becoming I Foundation (BIF-VIT), I led STEM sessions for 100+ students across multiple schools and guided volunteers to keep programs running. At Youth Red Cross (VIT), I partnered with hospitals, ran campus campaigns, and organized blood donation drives with 60+ donors each time. 
            <br />
            <br />
            Some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Football, Basketball, Table Tennis and Gyming 🏋️‍♂️
            </li>
            <li className="about-activity">
              <ImPointRight /> Jogging and Cycling 🚴
            </li>
            <li className="about-activity">
              <ImPointRight /> Meditation and Yoga 🧘‍♂️
            </li>
            <li className="about-activity">
              <ImPointRight /> Gaming 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring Different Types of Food 🍕
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling 🌍
            </li>
          </ul>
          <br />
          <p style={{ color: "rgb(155 126 172)" }}>
            "If you are learning something new everyday, Congrats you are winning"{" "}
          </p> 
          
          <footer className="blockquote-footer">Raghavan Vaidhyaraman</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}
