import React from "react";

export default function CompanyCareersHero() {
  return (
    <div className="hero not-homepage company-careers-hero">
      <div className="copy mt3">
        <h1>Company Careers</h1>
        <p className="pink mt3">
          We hate annoying ads. That’s why we’re doing something about it.
        </p>
        <p>
          At TripleLift, we are working to make advertising better for everyone
          — content owners, advertisers and consumers — by reinventing ad
          placement one medium at a time. Join our team to help change the face
          of advertising.
        </p>
        <a className="cta cta-style-2 right-text-align" href="#job-boards">
          <span>Explore Job Openings</span>
          <img alt="arrow right" src="/images/arrow-right.svg" />
        </a>
      </div>
      <div className="hero-visual company-careers">
        <img alt="careers" src="/images/TL_Careers_Group_v1.png" />
      </div>
    </div>
  );
}
