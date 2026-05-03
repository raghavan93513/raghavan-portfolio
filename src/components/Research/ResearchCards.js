import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { BsGithub } from "react-icons/bs";
import { SiGooglescholar } from "react-icons/si";

function ResearchCards(props) {
  const [flipped, setFlipped] = useState(false);
  const isMobile =
    typeof window !== "undefined" &&
    window.matchMedia("(pointer: coarse)").matches;

  const handleClick = () => {
    if (isMobile) setFlipped((f) => !f);
  };

  return (
    <div
      className={`flip-card flip-card-research${flipped ? " is-flipped" : ""}`}
      onClick={handleClick}
      onMouseEnter={() => !isMobile && setFlipped(true)}
      onMouseLeave={() => !isMobile && setFlipped(false)}
      aria-label={`${props.title} research card`}
    >
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={props.imgPath} alt={props.title} className="flip-card-img" />
          <div className="flip-card-front-overlay">
            <div className="flip-card-hint">
              <span>{isMobile ? "Tap to explore" : "Hover to explore"} ✦</span>
            </div>
          </div>
        </div>

        <div className="flip-card-back">
          <div className="flip-back-glow" />
          <h3 className="flip-back-title">{props.title}</h3>
          <p className="flip-back-desc">{props.description}</p>
          <div className="flip-back-buttons">
            {props.ghLink && (
              <Button
                variant="primary"
                href={props.ghLink}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                <BsGithub /> &nbsp;GitHub
              </Button>
            )}
            {props.paperLink && (
              <Button
                variant="primary"
                href={props.paperLink}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                <SiGooglescholar /> &nbsp;Paper
              </Button>
            )}
          </div>
          <div className="flip-back-tech">
            {(props.techStack || []).map((tech) => (
              <span className="flip-tag" key={tech}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default ResearchCards;
