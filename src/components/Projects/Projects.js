import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import langchain from "../../Assets/Projects/langchain.png";
import maskdetection from "../../Assets/Projects/maskdetection.png";
import sentiment from "../../Assets/Projects/sentiment.png";
import salary from "../../Assets/Projects/salary.png";

const PROJECTS = [
  {
    imgPath: maskdetection,
    imgFit: "contain",
    title: "Face Mask Detection",
    description:
      "Detects whether a person is wearing a face mask in real-time using PyTorch and a pre-trained ResNet50. Captures webcam video, applies face detection, and classifies each face as masked or unmasked.",
    ghLink: "https://github.com/raghavan93513/Face-Mask-Detection",
    techStack: [
      "Python",
      "PyTorch",
      "ResNet50",
      "OpenCV",
      "Computer Vision",
    ],
  },
  {
    imgPath: langchain,
    imgFit: "contain",
    title: "Langchain Food Recommender",
    description:
      "Uses LangChain to split PDFs into chunks, converts them to embeddings via HuggingFace, stores in FAISS vector DB, and powers QA with OpenAI GPT-3.5 through LangChain's LLM-as-a-Service.",
    ghLink: "https://github.com/raghavan93513/Langchain-Food-Recommender",
    techStack: [
      "Python",
      "LangChain",
      "HuggingFace Embeddings",
      "FAISS",
      "OpenAI GPT-3.5",
    ],
  },
  {
    imgPath: sentiment,
    title: "Twitter Sentiment Analysis",
    description:
      "Uses NLP and machine learning to dynamically analyze Twitter tweet sentiment (positive, negative, or neutral). Applicable in marketing, politics, and public relations.",
    ghLink: "https://github.com/raghavan93513/Twitter-Sentimental-Analysis",
    techStack: [
      "Python",
      "Scikit-learn",
      "NLTK",
      "Pandas",
      "Twitter API",
    ],
  },
  {
    imgPath: salary,
    title: "Salary Analysis and Prediction",
    description:
      "Scraped 50k+ Glassdoor data science listings with Selenium. Optimized Linear, Lasso, and Random Forest regressors via GridSearchCV. Built a client-facing Flask API for salary negotiation.",
    ghLink: "https://github.com/raghavan93513/Salary-Analysis-and-Prediction",
    techStack: [
      "Python",
      "Selenium",
      "Scikit-learn",
      "GridSearchCV",
      "Flask",
    ],
  },
];

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading reveal">
          My Recent{" "}
          <strong className="purple neon-text">Works </strong>
        </h1>
        <p style={{ color: "rgba(255,255,255,0.7)" }} className="reveal">
          Here are a few projects I've worked on — hover (or tap) to explore:
        </p>
        <Row
          style={{ justifyContent: "center", paddingBottom: "10px" }}
          className="projects-row"
        >
          {PROJECTS.map((p, i) => (
            <Col
              md={6}
              className={`project-card reveal`}
              key={p.title}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <ProjectCard {...p} isBlog={false} />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
