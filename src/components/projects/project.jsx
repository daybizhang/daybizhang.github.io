import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import "./styles/project.css";

const Project = (props) => {
  const { projectImage, title, description } = props;

  // Create URL-friendly project ID from title
  const projectId = title.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className="project-card">
      <Link to={`/project/${projectId}`} className="project-link-wrapper">
        <div className="project-image-container">
          <img src={projectImage} alt={title} className="project-image" />
          <h3 className="project-title-overlay">{title}</h3>
        </div>
        
        <div className="project-details">
          <p className="project-description">{description}</p>
          <div className="project-link">
            <FontAwesomeIcon icon={faLink} className="link-icon" />
            <span className="link-text">View Details</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Project;