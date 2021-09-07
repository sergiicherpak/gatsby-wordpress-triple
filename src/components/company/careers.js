import React from "react";

export default function Careers() {
  return (
    <div className="careers-section">
      <div className="animate-border-outer shadow-3"></div>
      <div className="animate-border-content">
        <div className="careers-section-container">
          <div className="image-bg">
            <div className="overlay" />
          </div>
          <div className="section-copy">
            <h2 className="text-primaryGradient">Careers</h2>
            <h3>
              TripleLift believes in the power of diversity, equity and inclusion.
            </h3>
            <p>
              Our culture enables individuals to share their uniqueness and
              contribute as part of a team.
            </p>
            <p>
              With our DEI initiatives, TripleLift aims to be a place that works
              for you, and where you can feel a sense of belonging.
            </p>
            <p>
              To drive our inclusive culture, our People team, DEI roundtable,
              employee resource groups, and Executive Leadership Team support
              efforts to break down barriers and create sustainable change in our
              organization.
            </p>
            <a
              className="cta cta-style-2"
              href="/company-careers#job-boards"
            >
              <span>Explore job openings</span>
              <img alt="arrow right" src="/images/arrow-right.svg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
