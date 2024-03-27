import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import langchain from "../../Assets/Projects/langchain.png";
import graph from "../../Assets/Projects/graph.png";
import maskdetection from "../../Assets/Projects/maskdetection.png";
import sentiment from "../../Assets/Projects/sentiment.png";
import salary from "../../Assets/Projects/salary.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={graph}
              isBlog={false}
              title="Research Paper Knowledge Graph and Recommender System"
              description="This project encompasses three components: constructing a knowledge graph to illustrate the relationships among a broad spectrum of research papers; developing a recommender system to suggest related and pivotal papers; and performing an impact analysis to highlight the research works with the most significant influence on subsequent studies."
              ghLink="https://github.com/raghavan93513/Knowledge-Graphs-for-Research-Navigation"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={langchain}
              isBlog={false}
              title="Langchain Food Recommender"
              description="We will use Langchain to split the PDF text into smaller chunks, convert the chunks into embeddings using HuggingFaceEmbeddings, and create a knowledge base using FAISS - Basically a vector database. This knowledge base will allow us to perform an efficient similarity search when the user asks a question. We will use OpenAI's GPT-3.5 model through Langchain's LLM's. (Large Language Model as a Service) functionality for question-answering."
              ghLink="https://github.com/raghavan93513/Langchain-Food-Recommender"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={maskdetection}
              isBlog={false}
              title="Face Mask Detection"
              description="The project aims to detect whether a person is wearing a face mask or not using a saved file or in real-time using PyTorch. A pre-trained ResNet50 model is used in this project. The system captures video frames from a webcam, applies face detection to locate faces in the frames, and then utilizes a deep learning model to classify each detected face as either wearing a mask or not."              
              ghLink="https://github.com/raghavan93513/Face-Mask-Detection"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sentiment}
              isBlog={false}
              title="Twitter Sentiment Analysis"
              description="This project uses machine learning techniques (Natural Language Processing) to analyze the sentiment of Twitter tweets dynamically. By examining the language used in tweets, we can make predictions about the author's sentiment (positive, negative, neutral). This tool is beneficial in various fields such as marketing, politics, and public relations."
              ghLink="https://github.com/raghavan93513/Twitter-Sentimental-Analysis"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={salary}
              isBlog={false}
              title="Salary Analysis and Prediction              "
              description="This project delivered a salary estimation tool for data science roles scraped from Glassdoor with Selenium. The best predictive model was selected through optimization of Linear, Lasso, and Random Forest Regressors using GridsearchCV. Finally, a client-facing API was built using Flask to facilitate salary negotiation for data scientists."
              ghLink="https://github.com/raghavan93513/Salary-Analysis-and-Prediction"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
