import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsAward } from "react-icons/bs";

function SkillsCards(props) {
  return (
    <Card className="cert-card-view">
      <Card.Body className="cert-card-body">
        <div className="cert-icon">
          <BsAward />
        </div>
        <Card.Title className="cert-title">
          <strong className="purple">{props.title}</strong>
        </Card.Title>
        {props.certLink && (
          <Button variant="primary" href={props.certLink} target="_blank" className="cert-btn">
            View Certificate
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default SkillsCards;
