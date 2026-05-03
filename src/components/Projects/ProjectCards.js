import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  const [flipped, setFlipped] = useState(false);
  const isMobile =
    typeof window !== "undefined" &&
    window.matchMedia("(pointer: coarse)").matches;

  const handleClick = () => {
    if (isMobile) setFlipped((f) => !f);
  };

  return (
    <div
      className={`flip-card${flipped ? " is-flipped" : ""}`}
      onClick={handleClick}
      onMouseEnter={() => !isMobile && setFlipped(true)}
      onMouseLeave={() => !isMobile && setFlipped(false)}
      aria-label={`${props.title} project card`}
    >
      <div className="flip-card-inner">
        {/* FRONT */}
        <div className="flip-card-front">
          <img
            src={props.imgPath}
            alt={props.title}
            className="flip-card-img"
            style={props.imgFit ? { objectFit: props.imgFit } : undefined}
          />
          <div className="flip-card-front-overlay">
            <div className="flip-card-hint">
              <span>{isMobile ? "Tap to explore" : "Hover to explore"} ✦</span>
            </div>
          </div>
        </div>

        {/* BACK */}
        <div className="flip-card-back">
          <div className="flip-back-glow" />
          <h3 className="flip-back-title">{props.title}</h3>
          <p className="flip-back-desc">{props.description}</p>
          <div className="flip-back-buttons">
            <Button
              variant="primary"
              href={props.ghLink}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              <BsGithub /> &nbsp;
              {props.isBlog ? "Blog" : "GitHub"}
            </Button>
            {!props.isBlog && props.demoLink && (
              <Button
                variant="primary"
                href={props.demoLink}
                target="_blank"
                rel="noreferrer"
                style={{ marginLeft: "10px" }}
                onClick={(e) => e.stopPropagation()}
              >
                <CgWebsite /> &nbsp;Demo
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

export default ProjectCards;
