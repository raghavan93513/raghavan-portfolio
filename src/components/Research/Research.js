import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ResearchCard from "./ResearchCards";
import Particle from "../Particle";

// Using require for image imports
const paper1 = require("../../Assets/Research/paper1.png");
const paper2 = require("../../Assets/Research/paper2.png");

function Research() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Publications</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are my research publications and academic contributions.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="project-card">
            <ResearchCard
              imgPath={paper1}
              title="BERT based Citation Recommender and Impactful Nodes Identifier in RDF Knowledge Graphs"
              description="Knowledge graphs have emerged as powerful tools for representing and organizing information in a structured and interconnected manner. In this research, we aim to build a knowledge graph and a recommendation system for research papers. This research is divided into three parts: Charting the Research Progress (constructing the RDF knowledge graph and visualizing), The Search for Knowledge (making a research paper recommender system), and revealing the Trailblazers (finding the most impactful paper in the dataset). By leveraging state-of-the-art tools and models, the knowledge graph was not only accurate but also visually intuitive, offering insights into the complex web of academic interrelations. The recommender system, built on this knowledge base, demonstrated high efficacy in suggesting relevant and significant research papers, with its recommendations being both contextually and academically pertinent. The impact analysis reveals the most influential papers, providing a clear view of research works that have shaped and directed academic discourse in their respective fields."
              ghLink="https://github.com/raghavan93513/Knowledge-Graphs-for-Research-Navigation"
              paperLink="https://doi.org/10.1109/ICSCSA64454.2024.00077"
            />
          </Col>

          <Col md={6} className="project-card">
            <ResearchCard
              imgPath={paper2}
              title="Nonlinear Classification on MiniRocket Architecture for Fish-Freshness Prognostics"
              description="This paper aims to evaluate the performance of multiple non-linear classification techniques with MiniRocket, a highly efficient convolution-based feature extractor. In this paper, we evaluate and extend the proposed MiniRocket framework for classifying multivariate sensor data, focusing on a practical “Fish Freshness” monitoring use case. In operational practice, high-fidelity freshness classification enables dynamic inventory routing, just-in-time processing, and trustworthy quality labelling, thereby reducing food waste and reinforcing consumer confidence throughout seafood supply networks. We demonstrate that, when paired with a simple non-linear classifier, MiniRocket achieves state-of-the-art accuracy while requiring orders of magnitude less computation than deep-learning alternatives. We have demonstrated that combining MiniRocket with a Random Forest Classifier yields classification accuracy of greater than or equal to 90%, particularly improving performance on ambiguous classes such as “Semi-Fresh”. The model’s simplicity, scalability, and efficiency make it suitable for real-time applications. "
              ghLink="https://github.com/raghavan93513/Fish-Freshness-Nonlinear-Classification-on-MiniRocket-Architecture"
              paperLink="https://doi.org/10.1007/978-3-032-13003-7_27"
            />
          </Col>

          {/* Add more research cards as needed */}
          {/* 
          <Col md={6} className="project-card">
            <ResearchCard
              imgPath={yourImage}
              title="Your Publication Title"
              description="Your publication description"
              ghLink="https://github.com/your-repo"
              paperLink="https://link-to-paper"
            />
          </Col>
          */}

        </Row>
      </Container>
    </Container>
  );
}

export default Research;
