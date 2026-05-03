import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

export function AboutQuoteCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ color: "rgb(155 126 172)", textAlign: "center" }}>
            "If you are learning something new every day, Congrats, you are
            winning"
          </p>
          <footer className="blockquote-footer text-center">
            Raghavan Vaidhyaraman
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export function AboutCardProfessional() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Currently, I'm a <span className="purple"> Spark Solutions Engineer </span> at <span className="purple"> Databricks</span>, where I spend most of my days deep inside <span className="purple"> Apache Spark, Delta Lake and MLflow</span>, tuning slow pipelines, chasing down weird bugs, and helping teams ship faster. I genuinely love the puzzle of making things go fast, and the happiest when a tough problem finally clicks.
            <br />
            <br />
            I enjoy mentoring new engineers, giving tech talks, and writing enablement articles. I also had a blast placing 1st runner-up at the Databricks Global Hackathon 2025 with Genie AI, our little voice-based assistant prototype. Before all this, I interned at Ideas2IT tinkering with a GPT-powered outreach tool, that's where I first fell in love with LLMs, embeddings and fine-tuning.
            <br />
            <br />
            And honestly? You'll most likely find me on the dance floor at every office party 🕺✨
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export function AboutCardLeadership() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hackathons are honestly my happy place. I've had a blast
            judging and mentoring at AI hackathons hosted by{" "}
            <span className="purple"> IIT Madras </span> and{" "}
            <span className="purple"> IISc Bangalore</span>, sitting with
            student teams, picking apart their wildest ideas, and watching
            them light up when something finally clicks.
            <br />
            <br />
            Back in college, I helped run{" "}
            Cryptic Hunt at{" "}
            <span className="purple"> GraVITas</span>, VIT's annual tech
            carnival, which is where I first caught the bug for organising
            chaotic, but fun events.
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
            Outside work, what makes me feel most alive is just showing up
            for people. With{" "}
            <span className="purple"> Becoming I Foundation (BIF-VIT)</span>,
            I'd travel to schools and run hands-on STEM sessions, there's
            really nothing like the look on a kid's face when a formula finally clicks.
            <br />
            <br />
            With <span className="purple"> Youth Red Cross (VIT)</span>, we
            partnered with hospitals and ran blood donation drives across
            campus. The buzz of a packed donation day is still one of my
            favourite memories. Give me a meaningful cause and a team
            of good humans, and I'm all in 💜
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export function AboutActivitiesCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <ul>
            <li className="about-activity">
              <ImPointRight /> Football, Basketball, Table Tennis and Gyming
              🏋️‍♂️
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
        </blockquote>
      </Card.Body>
    </Card>
  );
}
