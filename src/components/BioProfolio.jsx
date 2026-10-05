import React from "react";
import profileImage from "./ImagesFiles/ProfileImage.png";
import "./BioProfolio.css";

export default function BioProfolio({ content }) {
  return (
    <article className="bio-card">
      <div className="bio-art">
        <span className="bio-art-orbit bio-art-orbit-one" />
        <span className="bio-art-orbit bio-art-orbit-two" />
        <img
          className="bio-portrait"
          src={profileImage}
          alt={content.imageAlt}
        />
      </div>
      <div className="bio-details">
        <span className="bio-label">{content.label}</span>
        <h2>{content.name}</h2>
        <p className="bio-role">{content.role}</p>
        <p className="bio-location">
          <span aria-hidden="true">⌖</span> {content.location}
        </p>
        <p className="bio-text">{content.text}</p>
        <div className="bio-status">
          <span className="bio-status-dot" />
          {content.availability}
        </div>
      </div>
    </article>
  );
}
