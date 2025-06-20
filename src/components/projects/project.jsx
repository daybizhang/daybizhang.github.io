import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import "./styles/project.css";

const Project = (props) => {
  const { logo, title, description, linkText, link } = props;

  return (
    <div className="project-card">
      <Link to={link} className="project-link-wrapper">
        <div className="project-image-container">
          <img src={logo} alt={title} className="project-image" />
          <h3 className="project-title-overlay">{title}</h3>
        </div>
        
        <div className="project-details">
          <p className="project-description">{description}</p>
          <div className="project-link">
            <FontAwesomeIcon icon={faLink} className="link-icon" />
            <span className="link-text">{linkText}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Project;