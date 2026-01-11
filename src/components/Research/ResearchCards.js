import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsGithub } from "react-icons/bs";
import { SiGooglescholar } from "react-icons/si";

function ResearchCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title><strong className="purple">{props.title}</strong></Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        {props.ghLink && (
          <Button variant="primary" href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp;
            GitHub
          </Button>
        )}
        {"\n"}
        {"\n"}

        {props.paperLink && (
          <Button
            variant="primary"
            href={props.paperLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <SiGooglescholar /> &nbsp;
            Paper
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ResearchCards;
